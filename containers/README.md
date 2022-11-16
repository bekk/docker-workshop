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

### Inspisere innsiden av containere

Containere består av en eller flere "innkapslede" prosesser. Dette kan vi utnytte for å inspisere innsiden av en container mens den kjører. 

Følgende kommando starter et shell (kommandolinje) inne i en container, og kobler den til terminalen du bruker. (merk at `my-nginx` containeren må være kjørende)

docker exec --interactive --tty my-nginx /bin/sh

I dette shellet har du tilgang til alle verktøy som er installert i containeren, det kan være ganske begrenset for å spare plass, men de aller vanligste verktøyene er ofte tilgjengelige. Se og naviger deg rundt i containeren med `ls` og `cd`, og når du er ferdig kan du trykke `Ctrl+d` for å "logge ut" av shellet.

## Oppgaver

### Oppgave 1

Finn ut hva de forskjellige flaggene gjør når du kjører `docker run`:

- `--detach`
- `--publish`
- `--name`

Endre på disse verdiene, og se hva som endres i `docker ps`. Gjør deg godt kjent med kommandoen!

Tips: `docker [kommando] --help` gir mye info

### Oppgave 2

Endre på teksten som serveres av nginx på http://localhost:8000. For å få til dette må du starte et shell (`/bin/sh`) mot containeren, finne filen `/usr/share/nginx/html/index.html`, og åpne denne med `vi`. Hvis du trenger noen tips kan du åpne teksten under!

<details>
  <summary>Tips</summary>
  For å åpne et shell mot containeren kan du bruke kommandoen `docker exec`, som kjører en kommando i selve containeren. `docker exec -it /bin/sh` starter et interaktivt shell i containeren, slik at du kan skrive kommandoer der.

  `vi` er litt knotete å bruke. En enkel måte å endre filen på er å :

  - Åpne filen med `vi /usr/share/nginx/html/index.html`
  - Trykke `:` for å skrive inn en kommando
  - Skrive inn `%s/to nginx/to outer space/` og trykke enter
  - Lagre og gå ut av filen ved å trykke `:x` og så enter

  Åpne nettleseren igjen, og se den oppdaterte teksten!
</details>
