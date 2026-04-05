# 🚪 Verboden

## Het doel

Het verbodscommando kan erg handig zijn om een ​​lijst met leden te maken die u niet wilt retourneren.

Zodra u een ban toevoegt, wordt de ban verzonden naar het kanaal dat u in [setup-a-server.md](../server-setups/setup-a-server.md "mention") hebt ingesteld, dus u hoeft de opdracht niet op een specifiek kanaal uit te voeren!

Als een uitgesloten speler lid wordt van een van je clans, wordt er een waarschuwing verzonden naar het kanaal dat je hebt ingesteld in [setup-a-clan.md](../clan-setups/setup-a-clan.md "mention")
:::warning
Het gebruik van het ban-commando zal hen er niet van weerhouden lid te worden van je clan. Dit valt buiten de controle van de bots.
:::

## Het commando

Om een ​​gebruiker aan de lijst toe te voegen gebruik je `/ban add` (dit ondersteunt "slim zoeken", zodat een gebruikersnaam kan werken).&#x20;

:::info
Alle verbanningen kunnen worden bekeken met `/ban list` en een verbanning kan worden verwijderd met `/ban remove`
:::

## De parameters

### Vereist

`player`: gebruikersnaam of tag van de speler. Als je de spelersnaam niet in de lijst kunt vinden, kun je de spelerstag gebruiken, zelfs als deze niet op de lijst staat.

### Optioneel

* `reason`: Zodat u zich kunt herinneren waarom u ze verbiedt.
* `dm_player`: Als je een tekst toevoegt, stuurt de bot een dm naar de speler met deze tekst.

