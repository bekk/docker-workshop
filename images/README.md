# Docker images

[Agenda](/README.md) | [1. Containere](/containers/README.md) | [2. Volumer](/volumes/README.md) | [3. Nettverk](/networks/README.md) | 4. Images | [5. Compose](/compose/README.md) | [6. Dockerfile](/dockerfiles/README.md)

## Praktisk

<details>
  <summary>Offisiell dokumentasjon</summary>

  - [docker image](https://docs.docker.com/engine/reference/commandline/image/)
</details>

Se hvilke images du allerede har på maskinen din
```
docker image ls
```

Last ned et nginx image
```
docker image pull nginx:alpine
```

Gå til https://hub.docker.com og sjekk hvilke andre versjoner av `nginx`-imaget som er tilgjengelig

Man kan fjerne ubrukte images med
```
docker image prune
```


## Oppgaver

Images har en _tag_ som er på formen `[image-navn]:[versjon]`, f.eks. `nginx:alpine`.

Den som kontrollerer et image kan oppdatere tags, kan du se for deg hvorfor dette kan være et problem for oss som bruker imagene?
