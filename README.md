# docker-workshop
Workshop for NTNU Sprint november 2022

## Agenda

- Teori: Intro
  - Hvilket problem ønsker vi å løse med Docker?
  - Docker vs VMer – hva er forskjellen?
  - Containere
  - Images
- Praktisk:
  - Containere: starte, stoppe, slette, liste ut, se logger
  - Images: liste ut, laste ned, slette, tags
- Teori: Volumer
  - Hva er et volum?
  - Hvorfor trenger vi det?
  - Mounting
- Praktisk:
  - Mounte volum inn i en container, og editere fil fra utsiden
  - Mounte volum inn i container, og editere fil fra container
- Teori: Nettverk
  - Hvordan kan containere prate sammen?
  - Default-nettverket
  - Innom oppretting av nettverk/andre typer nettverk?
- Praktisk:
  - Kjøre opp to containere (DB + noe annet?), koble dem sammen
- Teori: Images
  - Hvordan kan man lage sine egne images?
  - Hvorfor vil man dette? Permanent løsning
- Praktisk:
  - Story: på tide å dytte applikasjonen vår ut i prod, lage et image med applikasjonen bygget inn
- Teori: Docker Compose
  - Kjedelig å skrive alle kommandoene for å kjøre opp mange containere hver gang
  - «En slags oppskrift»
- Praktisk?
  - Sette opp compose-fil med noe av det man har gjort tidligere?
