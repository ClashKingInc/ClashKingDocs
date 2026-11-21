---
description: Veelgestelde vragen
---

# ❓ Veelgestelde vragen

<details>

<summary>Hoe stel ik de bot in?</summary>

Volg de [Quick Start](quick-start.md) om ClashKing toe te voegen, het dashboard te openen, clans toe te voegen en de eerste functies in te stellen.

</details>

<details>

<summary>Waarom ontbreken sommige statistieken of verschillen ze van het spel?</summary>

Sommige statistieken zijn gebaseerd op geregistreerde waarnemingen in plaats van rechtstreeks beschikbare Clash of Clans-gegevens. Gegevens kunnen vertraagd, niet beschikbaar of onvolledig zijn, vooral voor oudere periodes. Ontbrekende gegevens betekenen niet automatisch dat de waarde nul is. Voeg je clan toe via **Management → Clans** in het dashboard; zie [Add / Setup a clan](dashboard/add-setup-a-clan.md).

</details>

<details>

<summary>Wat betekenen last online en activity?</summary>

**Last online** is het tijdstip van de meest recente geregistreerde aanwijzing van spelersactiviteit. Het is een schatting op basis van waargenomen spelgegevens, geen exacte online status. **Activity** telt geregistreerde waarnemingen in de geselecteerde periode en meet niet hoe lang iemand heeft gespeeld. Een ontbrekende waarneming bewijst niet dat een speler inactief was.

Als bijvoorbeeld de spelgegevens van een speler tussen twee waarnemingen veranderen, kan ClashKing activiteit registreren, maar niet precies zien hoe lang de speler online was. Zie [Clan commands](bot-commands/clan-commands.md) en [Family commands](bot-commands/family-commands.md) voor activiteitsrapporten.

</details>

<details>

<summary>Waarom zijn de emoji's van de bot niet zichtbaar?</summary>

Controleer of de emoji's in andere kanalen wel verschijnen en of de bot externe emoji's in het betreffende kanaal mag gebruiken. Controleer de server- en kanaalrechten, inclusief eventuele uitzonderingen per kanaal. Blijft het probleem bestaan, neem dan contact op via de [supportserver](https://discord.gg/clashking).

</details>

<details>

<summary>Waarom plaatst mijn feed of log geen berichten?</summary>

1. Open **Logs** in het dashboard en selecteer de juiste server of clan. Controleer of de log aanstaat en de bestemming is opgeslagen.
2. Controleer **Issues** op een niet beschikbaar kanaal, thread of forumbericht. Open een gearchiveerd forumbericht opnieuw voordat je het selecteert.
3. Controleer of ClashKing webhooks mag aanmaken en berichten in de bestemming mag plaatsen. Logs worden periodiek bijgewerkt; geef een gebeurtenis dus even tijd om te verschijnen.

Zie [Setup logs](dashboard/setup-logs.md) voor meer informatie. Controleer bij warreminders ook of het oorlogslogboek van de clan openbaar is; zie [Reminders](dashboard/reminders.md).

</details>

<details>

<summary>Waarom verschillen mijn Legend-statistieken van het spel?</summary>

Legend-weergaven gebruiken geregistreerde gevechtsgegevens. Recente resultaten kunnen even op zich laten wachten en ontbrekende waarnemingen kunnen dag- of seizoenstotalen onvolledig maken. Sommige afgesloten dagen bevatten geschatte automatische verdedigingen, aangeduid met **Auto** in de dagweergave; die waarden hangen af van beschikbare eerdere verdedigingen.

Vergelijk de juiste dag met **Today** of **Yesterday** onder `/legends player` en voer het commando later opnieuw uit als resultaten nog worden geregistreerd. Bij onvolledige gegevens zijn totalen niet gegarandeerd gelijk aan het spel. Zie [Legends](bot-commands/legends.md).

</details>

<details>

<summary>Kan de bot laten zien waaraan Capital Gold is gedoneerd?</summary>

ClashKing kan geregistreerde totalen van Capital Gold-donaties tonen, maar de spelgegevens geven niet aan welk gebouw of welke upgrade elke donatie heeft ontvangen.

</details>
