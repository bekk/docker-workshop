import { Client, PostgresError } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import { QueryObjectResult } from "https://deno.land/x/postgres@v0.17.0/query/query.ts";

function createAttributesString(attributes: Array<Array<string>>) {
  return attributes
  .filter(attr => attr.length > 0)
  .map(([name, ...values]) => {
    if (values.length === 0) {
      return ` ${name}`;
    }
    return ` ${name}="${values.join(" ")}"`
  });
}

function h(tag: string, attrs: Array<Array<string>>, children: Array<string>): string {
  return `<${tag}${createAttributesString(attrs)}>${children.join("")}</${tag}>`;
}

function he(tag: string, attrs: Array<Array<string>>): string {
  return `<${tag}${createAttributesString(attrs)}/>`;
}

function html(attrs: Array<Array<string>>, children: Array<string>):string {
  return `<!DOCTYPE html>${h("html", attrs, children)}`;
}

function queryResultToHtml(query: QueryObjectResult): string {
  const columns = query.columns || [];

  return h("div", [], [
    h("table", [], [
      h("tr", [], columns.map(col => h("th", [], [ col ]))),
      ...query.rows.map(row => h("tr", [], columns.map(column => h("td", [], [String(row[column])]))))
    ]),
    h("form", [["method", "post"]], 
      columns.map(column => h("label", [], [column, he("input", [["name", column], ["type", "text"]])]))
      .concat(he("input", [["type", "submit"], ["value", "Insert"]]))
    )
  ]);
}

const SERVER_PORT = 80;
const DB_USER = Deno.env.get("DB_USER") || "postgres";
const DB_NAME = Deno.env.get("DB_NAME") || "postgres";
const DB_PASS = Deno.env.get("DB_PASS");
if (!DB_PASS) {
  console.error("Database password (DB_PASS) not set. Exiting.");
  Deno.exit(1);
}
const DB_HOST = Deno.env.get("DB_HOST") || "localhost";
const DB_PORT = Number(Deno.env.get("DB_PORT")) || 5432;

const client = new Client({
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  hostname: DB_HOST,
  port: DB_PORT,
});

await client.connect();
console.log(
  `Connected to database "${DB_NAME}" as user "${DB_USER}" on "${DB_HOST}:${DB_PORT}".`,
);

const testTable = await client.queryArray(
  "SELECT * FROM pg_tables WHERE tablename = 'test'",
);

if (testTable.rowCount === 0) {
  console.log("No test table found. Creating...");
  await client.queryArray(
    "CREATE TABLE test (id INT, data TEXT);",
  );
}

const rows = await client.queryArray("SELECT * FROM test;");
if (rows.rowCount === 0) {
  await client.queryArray("INSERT INTO test (id, data) VALUES (0, 'hello');");
}

console.log(`HTTP server listens on port ${SERVER_PORT}.`);

for await (const conn of Deno.listen({ port: 80 })) {
  for await (const e of Deno.serveHttp(conn)) {
    if (e.request.method === "GET") {
      const res = await client.queryObject<Record<string, unknown>>("SELECT * FROM test;");

      e.respondWith(
        new Response(`<h1>Hello</h1>${queryResultToHtml(res)}`, {
          headers: { "content-type": "text/html" },
        }),
      );
      break;
    } else if (e.request.method === "POST") {
      const formData = await e.request.formData();

      const id = formData.get("id");
      const data = formData.get("data");
      let insertError;
      try {
        await client.queryArray`INSERT INTO test (id, data) VALUES (${id}, ${data});`;
      } catch (error) {
        if (error instanceof PostgresError) {
          insertError = error.message;
        } else {
          throw error;
        }
      }

      const qres = await client.queryObject<Record<string, unknown>>("SELECT * FROM test;");

      let res = new Response(`<h1>PostgreSQL server</h1>${queryResultToHtml(qres)}`, {
        headers: { "content-type": "text/html" },
        status: 201
      });

      if (insertError) {
        res = new Response(`<h1>PostgreSQL server</h1><div style="color: red;">${insertError}</div>${queryResultToHtml(qres)}`, {
          headers: { "content-type": "text/html" },
          status: 400
        });
      }

      e.respondWith(res);

      break;
    }
    e.respondWith(new Response("method not allowed", { status: 405 }));
  }
}
