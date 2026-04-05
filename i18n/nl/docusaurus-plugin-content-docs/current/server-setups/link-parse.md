# 🏹Link parseren

## Het doel

U kunt het parseren van links zo configureren dat elk bericht met een link wordt vervangen door visuele insluitingen, zodat u precies kunt zien wat elke link bevat. Gebruik hiervoor de opdracht `/setup link-parse`.

:::info
Je kunt het ook handmatig doen voor legerlinks en basislinks (zie [army-links.md](../utility/army-links.md "mention"))
:::

## Het commando

`/setup link-parse`

## De parameters

### Optioneel

* `{army_links}`: vervang de legerlink door een insluiting.
* `{player_links}`: vervang de spelerlink door een embed.&#x20;
* `{clan_links}`: vervang de clanlink door een embed.&#x20;
* `{base_links}`: vervang de basislink door een instortvoorziening. Hiervoor is een afbeelding en optioneel een beschrijvende tekst nodig.
* `{show_parse}`: indien ingeschakeld, kunt u -show PartOfTheNameOfOneOfYourClans gebruiken om een ​​overzicht van deze clan te zien.
* `{manage_whitelist}`: schakel het parseren van links alleen in bepaalde kanalen in.

## Voorbeelden

<details>

<summary>Legerlinks</summary>

Een legerlink wordt automatisch omgezet naar een ingesloten formaat, zoals weergegeven in het onderstaande voorbeeld.

![](</img/gitbook/image (146).png>)

U kunt dit ook handmatig doen met de opdracht [ZXQPH8QXZ](../utility/army-links.md).

</details>

<details>

<summary>Spelerlinks</summary>

Een spelerlink wordt automatisch omgezet naar een ingesloten formaat, zoals geïllustreerd in het onderstaande voorbeeld.

![](</img/gitbook/image (140).png>)

</details>

<details>

<summary>Clanlink</summary>

Clanlinks worden automatisch omgezet in een ingesloten indeling, zoals hieronder wordt gedemonstreerd.

![](</img/gitbook/image (139).png>)

</details>

<details>

<summary>Basislinks</summary>

Heb jij een mooie basis die je graag wilt delen? Plaats eenvoudigweg een foto van de basis samen met de basislink in één bericht. Door het parseren van links wordt het omgezet in een bericht, zoals weergegeven in het onderstaande voorbeeld. Je kunt ook gewone tekst in het bericht opnemen dat boven de insluiting wordt weergegeven, bijvoorbeeld met vermelding van de vereiste verdediging van het clankasteel!

![](</img/gitbook/image (141).png>)

U kunt ook de opdracht [/base](../utility/base-links.md) gebruiken om dergelijke insluitingen te maken!&#x20;

Basislinks blijven 90 dagen actief vanaf de datum van de laatste klik.

</details>

<details>

<summary>Toon parse</summary>

Heb je je clan toegevoegd aan je Discord-server (met behulp van [/addclan](../clan-setups/add-a-clan.md)) en wil je snel een insluiting van je clan weergeven? Je kunt dit doen met -showd NameOfTheClan. Er verschijnt een insluiting onder het bericht, zoals geïllustreerd in het onderstaande voorbeeld.

![](</img/gitbook/image (142).png>)

</details>

<details>

<summary>Beheer witte lijst</summary>

Wilt u het parseren van links alleen in bepaalde kanalen inschakelen? Gebruik de optionele parameter `manage_whitelist` om de witte lijst te beheren. Het parseren van links werkt alleen in de kanalen die u heeft toegevoegd.

![](</img/gitbook/image (143).png>)

Met de rode knop worden alle kanalen op de witte lijst verwijderd. Als u een specifiek kanaal opnieuw wilt toevoegen, moet u alle kanalen op de witte lijst opnieuw selecteren.

</details>

