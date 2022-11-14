# Container orchestration med Docker Compose

## Praktisk

Generelt slitsomt å opprette masse containere, volumer og nettverk på denne "manuelle" måten, men vi kan bruke _docker compose_

lag en fil som heter `docker-compose.yml`:
```yaml
version: "3"

services:
  db:
    image: postgres:alpine
    env:
      - POSTGRES_PASSWORD=password
  server:
    image: trysnetron/pg-server:latest=
    env:
      - DB_PASS=password
      - DB_HOST=db
    ports:
      - "8000:80"
```

Lagre den, og i samme mappe som filen, kjør
```
docker compose up
```

Dette skal starte begge containerne med riktige instillinger, og lage et nettverk som den kobler begge to på

## Oppgaver
