# Dockerfile

[Agenda](/README.md) | [1. Containere](/containers/README.md) | [2. Volumer](/volumes/README.md) | [3. Nettverk](/networks/README.md) | [4. Images](/images/README.md) | [5. Compose](/compose/README.md) | 6. Dockerfile

## Praktisk

<details>
  <summary>Offisiell dokumentasjon</summary>

  - [Dockerfile](https://docs.docker.com/engine/reference/builder/)
  - [docker build](https://docs.docker.com/engine/reference/commandline/build/)
</details>

Fram til nå har vi brukt ferdige images for å lage containere, og kombinert forskjellige containere sammen for å lage helhetlige systemer. Men disse imagene kan jo ikke på magisk vis ha oppstått av seg selv! Hvordan lager man dem?

Et image lages med en oppskrift. En oppskrift som forteller hva man skal ta utgangspunkt i, hvilke brukere som skal være tilgjengelig i containeren, hvilke filer man ønsker å ha med, hvilke prosesser man ønsker å starte, og så videre. Denne oppskriften kalles for en `Dockerfile`.

For å bygge et image fra en oppskrift bruker man kommandoen fra mappa man har Dockerfilen i

```
docker build -t repo-navn/image-navn:latest .
```

## Oppgaver

### Oppgave 1

Lag en enkel Dockerfile med dette innholder:

```
FROM alpine
CMD ["echo", "Hello, World!"]
```

Bygg et image, og kjør det. Klarer du å få ut "Hello, World!"?

### Oppgave 2

Endre Dockerfilen slik at den pinger vg.no.


### Oppgave 3

Dra ut URLen til en miljøvariabel slik at du kan sende den inn når du starter containeren.

