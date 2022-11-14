# Docker containers

## Praktisk

Start en nginx-container
```
docker run --detach --publish 8000:80 --name my-nginx nginx:alpine
```

Gå til http://localhost:8000 og se at det fungerer

Se hvilke containere som kjører
```
docker ps
```

Stop containeren
```
docker stop my-nginx
```

Merk at `docker ps` i utgangspunktet kun viser containere som kjører, se _alle_ containere med
```
docker ps --all
```

Fjern containeren helt med
```
docker rm my-nginx
```

## Oppgaver

Finn ut hva de forskjellige flaggene gjør når du kjører `docker run`:

- `--detach`
- `--publish`
- `--name`

Tips: `docker [kommando] --help` gir mye info
