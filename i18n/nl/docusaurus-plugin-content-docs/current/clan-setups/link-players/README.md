# 🔗 Spelers koppelen

Het doel

Om correct te kunnen werken, moet de bot weten welke discord-gebruikers eigenaar zijn van elk CoC-account van je clan. Hierdoor kan het lid bijvoorbeeld toegang krijgen tot een specifiek kanaal of ze automatisch pingen met [reminders.md](../../server-setups/reminders.md "mention") die u hebt ingesteld.

## Het commando

Hiervoor moet u de opdracht `/link` uitvoeren

:::info
Als u per ongeluk iemand koppelt, kunt u de opdracht [unlink-players.md](unlink-players.md "mention") gebruiken.
:::

## De parameters

### Vereist

`player`: Dit komt overeen met de tag van de speler die je wilt koppelen. Je kunt deze tag vinden in hun profiel in het spel. Het zou er zo uit moeten zien: #PVJ98GL.



### Optioneel

`user`: Dit is de discord-gebruiker waarmee u het CoC-account wilt koppelen. Als u de opdracht voor uzelf uitvoert, hoeft u deze optie niet te gebruiken. Het is alleen nuttig als u een account aan iemand anders wilt koppelen.

`api_token`: Dit is om te bewijzen dat het account van jou is. Je kunt dit vinden in de parameters van Clash Of Clans.&#x20;
:::warning
Het API-token is alleen vereist als dit is ingesteld door het clanpersoneel (zie [setup-a-server.md](../../server-setups/setup-a-server.md "mention")), of als het account al aan iemand anders is gekoppeld.
:::

`greet`: Hiermee wordt een begroetingsbericht naar de gebruiker verzonden zodra deze is gekoppeld.

<figure><img src="/img/docs-media/image (129).png" alt="" /><figcaption></figcaption></figure>
