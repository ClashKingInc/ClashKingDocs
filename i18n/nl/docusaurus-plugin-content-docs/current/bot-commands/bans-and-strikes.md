---
description: Beheer bans en strikes in Discord of via het dashboard.
slug: /bot-commands/bans-and-strikes
---

# 🚪 Bans & strikes

Met bans en strikes houd je moderatienotities over spelers bij op je server. Een ban legt vast dat een speler niet terug mag komen; een strike legt een waarschuwing vast, bijvoorbeeld voor een overtreding van de clanregels.

:::info
Een ClashKing-ban voorkomt **niet** dat een speler een clan kan joinen. Wil je een waarschuwing ontvangen wanneer een gebande speler joint, zet dan **Ban Alerts** aan voor die clan onder **Logs**. Zie [Logs instellen](../dashboard/setup-logs.md).
:::

## Een record toevoegen

Gebruik `/record add` op je Discord-server en geef op:

- **player_tag**: de Clash of Clans-spelertag.
- **type**: kies **Ban** of **Strike**.

Vul in het formulier een **Reason** in. Bij een strike kun je ook een **Strike weight** (standaard 1) en een optionele vervaltijd in dagen instellen. Gebruik bijvoorbeeld gewicht 2 voor een ernstigere waarschuwing. Laat de vervaltijd leeg als de strike niet hoeft te verlopen. Bij beide types kun je één bewijsafbeelding toevoegen: PNG, JPEG, GIF of WebP van maximaal 10 MB.

## Records bekijken en verwijderen

Gebruik `/record list` om bans en strikes te bekijken. Kies eventueel **type** om alleen bans of alleen strikes te tonen. Het resultaat heeft knoppen om te navigeren, te verversen en records te verwijderen.

Wil je direct één record verwijderen, gebruik dan `/record remove`, kies het **type** en selecteer het **record** uit de suggesties. Voor deze Discord-commando’s heb je **Server beheren** of **Beheerder** nodig.

## Records beheren in het dashboard

Open het dashboard, selecteer je server en kies **Bans & Strikes** onder **Management**. Op de tabbladen **Bans** en **Strikes** kun je records zoeken, sorteren, toevoegen en verwijderen; strikes kun je ook per speler bekijken.

Vul bij het toevoegen in het dashboard een spelertag en reden in. Voor strikes kun je ook een gewicht en optionele vervaltijd instellen. Als bewijs kun je eventueel de URL van een openbaar toegankelijke afbeelding toevoegen.
