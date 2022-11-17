# Docker images

[Agenda](/README.md) | [1. Containere](/containers/README.md) | [2. Volumer](/volumes/README.md) | [3. Nettverk](/networks/README.md) | 4. Images | [5. Compose](/compose/README.md) | [6. Dockerfile](/dockerfiles/README.md)

## Praktisk

<details>
  <summary>Offisiell dokumentasjon</summary>

  - [docker image](https://docs.docker.com/engine/reference/commandline/image/)
  - [docker rmi](https://docs.docker.com/engine/reference/commandline/rmi/)
</details>

Containere opprettes fra det Docker kaller for images. En analogi fra objektorientert programmering er at man kan se på imaget som en _klasse_, og containeren som en _instans_ av denne klassen. Man kan lage flere containere fra samme image, på samme måte som at man kan lage flere instanser av samme klasse.

Docker holder en oversikt over alle imagene man har lokalt på maskinen:

```sh
docker image ls
```

Last ned et nginx image

```sh
docker image pull nginx:alpine
```

Gå til https://hub.docker.com og sjekk hvilke andre versjoner av `nginx`-imaget som er tilgjengelig

Etter hvert fylles maskinen opp med flere og flere images, og da kan det være kjekt å fjerne de ubrukte:

```sh
docker image prune
```

Det er også mulig å fjerne enkelt-images:

```sh
docker rmi nginx:alpine
```

## Oppgaver

Images har en _tag_ som er på formen `[image-navn]:[versjon]`, f.eks. `nginx:alpine`.

Den som kontrollerer et image kan oppdatere tags, kan du se for deg hvorfor dette kan være et problem for oss som bruker imagene?
