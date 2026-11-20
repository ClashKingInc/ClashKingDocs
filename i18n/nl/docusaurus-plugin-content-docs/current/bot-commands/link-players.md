---
description: Koppel Clash of Clans-accounts aan Discord en beheer accountlinks.
---

# 🔗 (Un)link players

Koppel je Clash of Clans-accounts aan Discord zodat ClashKing je spelers herkent voor onder andere rollen, reminders en rosteraanmeldingen. Iedere speler kan zijn eigen accounts koppelen met de onderstaande commando’s.

## Je account koppelen

1. Gebruik `/link add` op je Discord-server.
2. Vul je **spelertag** (bijvoorbeeld `#PVJ98GL`) en je Clash of Clans-**API-token** in het formulier in. Je vindt de spelertag op je profiel in het spel en de API-token in de spelinstellingen.
3. Verstuur het formulier en controleer de bevestiging. Herhaal dit voor elk account dat je wilt koppelen.

:::info
De API-token bevestigt dat het spelersaccount van jou is. Vul de token in het formulier van de bot in; de bot bewaart de token niet.
:::

## Een koppeling verwijderen

Gebruik `/link remove` en selecteer een van je gekoppelde accounts als **player**. Hiermee verwijder je je eigen koppeling.

## Een hoofdaccount kiezen

Gebruik `/link set-main` en selecteer een van je zichtbaar gekoppelde accounts. Deze keuze geldt voor de huidige Discord-server en wordt onder andere gebruikt bij het verversen van bijnamen.

## Gekoppelde accounts bekijken

Gebruik `/link list` om je eigen zichtbare gekoppelde accounts te zien. Voor een ander overzicht geef je één van deze optionele velden op:

- **discord_user**: toont de zichtbaar gekoppelde accounts van die gebruiker.
- **clan**: toont koppelingen voor een clan die aan deze server is toegevoegd, waaronder gekoppelde en niet-gekoppelde spelers en verborgen of buiten de server gekoppelde accounts.

Kies een gebruiker óf een clan, niet allebei. De zichtbaarheid van verborgen koppelingen hangt af van de privacyinstellingen van de eigenaar en clanverificatie.

## Ongeverifieerde clanlinks beheren

Een serverbeheerder of een rol met **Links → Manage**-toegang in het dashboard kan `/modlink add` of `/modlink remove` gebruiken voor spelers die momenteel in een geverifieerde familyclan zitten. Kies bij toevoegen de **player** en een huidig Discord-serverlid; de nieuwe koppeling is ongeverifieerd. Alleen de eigenaar kan geverifieerde spelerlinks wijzigen. Zie [Add / Setup a clan](../use-the-dashboard/add-a-clan.md) voor clanverificatie.

Via **Management → Links** in het dashboard kun je ook accounts en clanrosters bekijken. Op het tabblad **Clans** kunnen Links-beheerders toegestane ongeverifieerde koppelingen voor geverifieerde clans toevoegen of verwijderen.
