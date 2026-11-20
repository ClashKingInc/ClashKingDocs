---
slug: /bot-commands/one-off-reminders
---

# 📳 Eenmalige reminders

Gebruik `/reminders` in Discord om direct één herinnering te versturen. Hiermee maak je geen opgeslagen herinnering of schema aan. Zie [reminders via het dashboard](../server-setups/reminders.md) voor automatische herinneringen.

## Een herinnering versturen

Voer `/reminders` uit op je server. Je hebt de machtiging **Server beheren** nodig.

- **type** (verplicht): kies **War & CWL**, **Clan Games** of **Raid Weekend**.
- **clan** (verplicht): selecteer de clan op naam of tag.
- **channel** (optioneel): kies een tekstkanaal of thread op de server. Zonder keuze wordt de herinnering in het huidige kanaal geplaatst.
- **custom_text** (optioneel): voeg maximaal 500 tekens toe onder de herinnering.

De bot controleert het huidige evenement en toont spelers die nog moeten deelnemen. Tijdens de voorbereiding van een oorlog toont hij de komende oorlogsselectie. Spelers met een gekoppeld account die op de server kunnen worden gevonden, worden vermeld; andere spelers verschijnen met hun naam en tag. Voor oorlogen moet het oorlogslogboek toegankelijk zijn. Clan Games en Raid Weekend moeten actief zijn.
