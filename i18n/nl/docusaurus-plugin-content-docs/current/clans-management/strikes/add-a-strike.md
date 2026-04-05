# 🎳 Voeg een waarschuwing toe

## Het doel

Wanneer een speler een van je clanregels niet volgt, kun je een waarschuwing toevoegen om hem daarvoor te waarschuwen en deze waarschuwing in de gaten te houden.

## Het commando

Om een ​​waarschuwing toe te voegen gebruik je `/strike add` (dit ondersteunt "slim zoeken", zodat een gebruikersnaam kan werken).&#x20;

:::info
Stakingen kunnen worden verwijderd met `/strike remove {strike ID}`. Dit is geen gebruiker, maar de combinatie van letters/numbers voor elke slag, die je kunt vinden met behulp van het commando [view-strikes.md](view-strikes.md "mention").
:::

## De parameters

### Vereist

* `player`: gebruikersnaam of tag van de speler. Als je de spelersnaam niet in de lijst kunt vinden, kun je de spelerstag gebruiken, zelfs als deze niet op de lijst staat.
* `reason`: Zodat u zich kunt herinneren waarom u ze verbiedt

### Optioneel

* `rollover_days`: De tijd dat de staking "actief" is. Strikes die de rollover-periode bereiken, worden niet verwijderd, maar worden gedeactiveerd wanneer het totale aantal strikes van de speler wordt bekeken.
* `strike_weight`: Deze kan op elke waarde worden ingesteld, afhankelijk van de ernst van de waarschuwing (standaardwaarde 1)
* `dm_player`: Als je een tekst toevoegt, stuurt de bot een dm naar de speler met deze tekst

De twee optionele velden zijn `{rollover_days}` en `{strike_weight}`.&#x20;

Strike\_weight heeft een standaardwaarde van 1, maar kan op elke waarde worden ingesteld, afhankelijk van de ernst van de waarschuwing.&#x20;

Rollover\_days is de tijd dat de waarschuwing 'actief' is. Strikes die de rollover-periode bereiken, worden niet verwijderd, maar worden gedeactiveerd wanneer het totale aantal strikes van de speler wordt bekeken.