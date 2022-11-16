FROM denoland/deno:alpine-1.27.2

COPY ./pg-server.ts .

RUN deno cache ./pg-server.ts

CMD ["deno", "run", "--allow-net", "--allow-env", "./pg-server.ts"]
