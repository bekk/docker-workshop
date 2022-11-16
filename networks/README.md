# Docker networks

[Agenda](/README.md) | [1. Containere](/containers/README.m) | [2. Volumer](/volumes/README.md) | 3. Nettverk | [4. Images](/images/README.md) | [5. Compose](/compose/README.md) | [6. Dockerfile](/dockerfiles/README.md)

## Praktisk

<details>
  <summary>Offisiell dokumentasjon</summary>

  - [docker run](https://docs.docker.com/engine/reference/run/)
  - [docker network](https://docs.docker.com/engine/reference/commandline/network/)
</details>

Hva om vi har lyst til å koble sammen containere?

Man kan opprette nettverk internt i Docker og koble containere på disse. Dette gjør at containerne kan snakke med hverandre.

Vi oppretter et test-nettverk med
```
docker network create my-net
```

Kjør så 
```
docker network ls
```
Og se at nettverket du nettopp lagde eksisterer

så kan vi opprette en database-container
```
docker run --name my-postgres --env POSTGRES_PASSWORD=password --detach --network my-net postgres:alpine
```

Opprett så en container med en liten webserver som kan bruke databasen:
```
docker run --name my-server --env DB_PASS=password --env DB_HOST=my-postgres --detach --publish 8000:80 --network my-net trymsneltvedt/pg-server:latest
```

Og gå inn på http://localhost:8000


Når man er ferdig kan man fjerne nettverket med
```
docker network rm my-net
```

## Oppgaver

### Oppgave 1

Lag enda en container fra `trymsneltvedt/pg-server:latest` imaget og koble den til den samme databasen, få inn data i databasen og se at det oppdaterer seg på tvers av de to webserverne.


