# Docker volumes

[Agenda](/README.md) | [1. Containere](/containers/README.md) | 2. Volumer | [3. Nettverk](/networks/README.md) | [4. Images](/images/README.md) | [5. Compose](/compose/README.md) | [6. Dockerfile](/dockerfiles/README.md)

## Praktisk

<details>
  <summary>Offisiell dokumentasjon</summary>

  - [docker run](https://docs.docker.com/engine/reference/run/)
  - [docker logs](https://docs.docker.com/engine/reference/commandline/logs/)
</details>

Docker støtter å lage "volumer" for å persistere data eller hente data fra utsiden av selve containeren. Det finnes flere forskjellige typer volumer, og det vi skal se på nå er det Docker kaller for "bind mounts". Et bind mount er en mappe eller fil på harddisken som er tilgjengeliggjort fra innsiden av containeren.

Bind mounts lages når man starter en container:
```
docker run --volume /path/til/mappe:/path/inni/containeren --publish 8000:80 --name my-nginx --detach nginx:alpine
```

På denne måten blir `/path/til/mappe` tilgjengelig på innsiden av containeren på `/path/inni/containeren`.

Lag en enkel index.html-fil:
```html
<h1>Hello</h1>
```

```
docker run --volume $(pwd):/usr/share/nginx/html --publish 8000:80 --name my-nginx --detach nginx:alpine
```
>Obs: på Windows vil `$(pwd)` funker dårlig. Her er det enkleste å angi full sti til mappa man står i på formatet `C:\path\til\mappe`.

## Oppgaver

### Oppgave 1

Vi så i sted at det er mulig å endre en hva som serveres av nginx hvis man åpner et shell mot containeren og editerer filen med `vi`. Dette er kjekt, men også litt for begrenset og knotete. Hva hvis man vil bruke en helt annen editor, eller skal jobbe med flere filer?

Lag en enkel html-fil i denne mappen. Den kan inneholde
```html
<h1>Hello</h1>
```

Få denne inn i containeren ved å bruke `--volume`-kommandoen. Filen må endre opp i mappen `/usr/share/nginx/html` for at nginx skal klare å finne den.

Sjekk at den fungerer ved å gå inn på http://localhost:8000.

### Oppgave 2

Når du har fått til å servere filen fra nginx, prøv å åpne filen i din favoritteditor, endre den, og last siden på nytt!

### Oppgave 3

Prøv å gå til en fil/sti i nettleseren (f.eks. http://localhost:8000/nope) som nginx ikke vil finne. Du får forhåpentligvis "404 Not Found" tilbake. Men hvordan kan vi debugge dette? Hvor leter nginx etter fila? Sjekk loggen til nginx/containeren!

<details>
  <summary>Hint!</summary>
  Docker har en kommando vi ikke har sett på enda som heter `docker logs`. `docker logs [container-navn]` gir deg output fra selve containeren, og hvis ting er satt opp riktig betyr gjerne dette programmet som startes i containeren
</details>
