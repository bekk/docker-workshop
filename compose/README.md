# Container orchestration med Docker Compose

[Agenda](/README.md) | [1. Containere](/containers/README.md) | [2. Volumer](/volumes/README.md) | [3. Nettverk](/networks/README.md) | [4. Images](/images/README.md) | 5. Compose | [6. Dockerfile](/dockerfiles/README.md)

## Praktisk

<details>
  <summary>Offisiell dokumentasjon</summary>

  - [docker compose](https://docs.docker.com/compose/reference/)
</details>

Generelt slitsomt å opprette masse containere, volumer og nettverk på denne "manuelle" måten, men vi kan bruke _docker compose_

lag en fil som heter `compose.yaml`:
```yaml
version: "3"

services:
  db:
    image: postgres:alpine
    env:
      POSTGRES_PASSWORD: password
  server:
    image: trymsneltvedt/pg-server:latest
    env:
      DB_PASS: password
      DB_HOST: db
    ports:
      - "8000:80"
```

Lagre den, og i samme mappe som filen, kjør
```
docker compose up
```

Dette skal starte begge containerne med riktige instillinger, og lage et nettverk som de blir koblet på.

Man kan også kjøre `docker compose up` med `--detach` for å kjøre containerne i bakgrunnen.

## Oppgaver

### Oppgave 1

Legg til en nginx-tjeneste i compose-filen og gjør det mulig å nå den fra nettleseren.

### Oppgave 2

Lag en bind mount til nginx-tjenesten sånn at den kan servere din egne index.html-fil.

<details>
  <summary>Hint!</summary>
  Man kan legge til bind mounts for mappen man befinner seg i til tjenester med
  ```yaml
  volumes:
    - .:[path i container]
  ```
</details>

