# 🎁 Winacties

Wil je iets teruggeven aan je gemeenschap? Organiseer nu je eigen weggeefacties!&#x20;

Het is mogelijk om de winacties vooraf in te plannen! Gewichten kunnen ook worden aangepast op basis van rollen. Langetermijnspelers kunnen bijvoorbeeld een hogere kans krijgen ([/role tenure](../players-roles/roles-th-and-more/tenure-role.md) om deze op te zetten).

:::info
Deze functie is vrij nieuw! Rapporteer bugs of functiesuggesties in [the discord!](https://discord.clashk.ing/)
:::

## Beheer weggeefacties

U kunt uw weggeefacties beheren via een webpaginadashboard. U kunt de link verkrijgen met het commando `/giveaway dashboard`.  Deze link vervalt 1 uur nadat u de opdracht heeft uitgevoerd.

:::info
U heeft de machtiging Server beheren nodig om toegang te krijgen tot het dashboard. Om toegang te verlenen aan anderen of een specifieke rol (zoals een giveaways-manager), gebruikt u de opdracht [**/whitelist add** ](../server-setups/whitelist.md)
:::

<figure><img src="/img/gitbook/image (132).png" alt="" /><figcaption><p>Get the dashboard link using /giveaway dashboard</p></figcaption></figure>

Klik op **maak winactie** om een ​​nieuwe winactie aan te maken. Voer de details in, zoals de prijs, begin- en eindtijd, samen met een aangepast bericht of afbeelding!

<figure><img src="/img/gitbook/image (135).png" alt="" width="261" /><figcaption><p>You can customize the giveaway with the dashboard!</p></figcaption></figure>

### Vereisten voor weggeefacties

Het is mogelijk om bepaalde eisen te stellen aan de winacties.  Deze vereisten zullen het mogelijk maken om meer gewicht toe te kennen aan specifieke gebruikers op basis van hun rollen. Bovendien helpt het om te voorkomen dat bots deelnemen aan weggeefacties. Momenteel hebben wij de volgende eisen:

* Gebruiker moet een onenigheidsprofielfoto hebben
* De gebruiker moet een Clash of Clans-account hebben dat is gekoppeld aan de ClashKing-bot (met behulp van [/link](../clan-setups/link-players/))
* Sta alleen gebruikers met een bepaalde rol toe om deel te nemen
*Of pas de odds voor een bepaalde rol aan

## Voorbeeld van een winactie

<figure><img src="/img/gitbook/image (147).png" alt="" width="275" /><figcaption><p>Example of a giveaway</p></figcaption></figure>

:::info
De deelnameknop wordt 60 seconden na de laatste klik bijgewerkt.&#x20;
:::

## Winacties opnieuw uitrollen

Het is ook mogelijk om bepaalde winactiewinnaars opnieuw uit te schrijven.

### Het commando

`/giveaway reroll {giveaway name} {users_to_replace}`

#### De parameters

#### Vereist

* `giveaway name`: naam van de winactie
* `users_to_replace`: vermelding van de gebruikers die moeten worden vervangen door een nieuwe winnaar.

#### Optioneel

* `reason`: reden van de herroll.&#x20;