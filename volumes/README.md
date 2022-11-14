# Docker volumes

## Praktisk

Lag en enkel index.html-fil:
```html
<h1>Hello</h1>
```

Start så en ny container med tilgang til mappen du befinner deg i
```
docker run --volume $(pwd):/usr/share/nginx/html --publish 8000:80 --name my-nginx --detach nginx:alpine
```

Sjekk at den fungerer ved å gå inn på http://localhost:8000.


**TODO: Trenger noe her om vanlige volumer og, ikke bare mount volumes**

## Oppgaver
