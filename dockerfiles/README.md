# Dockerfile

## Praktisk

Fram til nå har vi brukt ferdige images for å lage containere, og kombinert forskjellige containere sammen for å lage helhetlige systemer. Men disse imagene kan jo ikke på magisk vis ha oppstått av seg selv: hvordan lager man dem?

Et image lages på bakgrunn av en oppskrift. En oppskrift som forteller hva man skal ta utgangspunkt i, hvilke brukere som skal være tilgjengelig i containeren, hvilke filer man ønsker å ha med, hvilke prosesser man ønsker å starte, og så videre. Denne oppskriften kalles for en `Dockerfile`.
