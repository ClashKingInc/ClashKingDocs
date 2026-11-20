---
description: Koppel Clash of Clans-accounts aan Discord-gebruikers met /link.
---

# 🔗 (Un)link players

## /link add

Gebruik `/link add` om een account te koppelen. Er opent een venster waarin je invult:

- **Player tag**: de tag van het Clash of Clans-account dat je wilt koppelen.
- **API token**: de API-token van je Clash of Clans-account.

:::info
Je API-token is veilig te delen met de bot. De bot gebruikt deze slechts één keer om te controleren of de Discord-gebruiker daadwerkelijk eigenaar is van het account. Dit verbetert de privacy en helpt misbruik te voorkomen.
:::

## /link remove

Gebruik `/link remove` en geef de speler als argument om een gekoppeld account te verwijderen.

## /link set-main

Gebruik `/link set-main` met een **player**-argument om dat account als je hoofdaccount in te stellen. Veel Discord-botcommando's gebruiken dit hoofdaccount als eerste.

## /link list

Gebruik `/link list` om gekoppelde accounts te bekijken. Er zijn twee optionele inputs:

- **clan**: filter de resultaten op een specifieke clan.
- **discord_user**: filter de resultaten op een specifieke Discord-gebruiker.

Als je geen van beide opgeeft, toont het commando alle gekoppelde accounts die je kunt zien.
