# 📄 Logboekinstellingen

## Het doel

Weet precies wat er in realtime in je clan gebeurt. Je kunt verschillende soorten logs instellen:&#x20;

[#clan-logs](log-setup.md#clan-logs "mention")

[#war-cwl-logs](log-setup.md#war-cwl-logs "mention")

[#capital-logs](log-setup.md#capital-logs "mention")

[#players-logs](log-setup.md#players-logs "mention")

:::info
Mocht je benieuwd zijn hoe deze logs er uit zien, ze staan allemaal op demo in de [support server.](https://discord.gg/clashking). Je kunt ook op de naam van het logtype klikken om naar een voorbeeld te worden doorverwezen.
:::

## De commando's

U moet de opdracht `/setup logs` gebruiken.

<figure><img src="/img/gitbook/image (38).png" alt="" width="526" /><figcaption><p>Output of the command</p></figcaption></figure>

## De parameters

### Vereist

`clan:` De clan waarvoor u logbestanden wilt instellen.

`mode`: Voeg/Edit toe, afhankelijk van of u een nieuw logboek wilt instellen of een logboek wilt verwijderen dat u eerder hebt ingesteld.

### Optioneel

`/channel:` Het kanaal waarnaar u de logs wilt verzenden. Als u logboeken op verschillende kanalen wilt instellen, kunt u de opdracht meerdere keren uitvoeren. Als u geen kanaal instelt, worden de logs verzonden naar het kanaal waarin de opdracht werd uitgevoerd.

## Logboektype

In deze sectie leggen we de verschillende logtypes uit, met links naar een voorbeeld.
:::warning
De logboeken worden ongeveer elke 5-10 minuten bijgewerkt. Deze waarde kan in de toekomst dalen, maar is nooit significant hoger.
:::

### Clanlogboeken

<figure><img src="/img/gitbook/image (37).png" alt="" /><figcaption></figcaption></figure>

* [**Member Join**](https://discord.com/channels/923764211845312533/1128182552121839648)**:** Stuur een bericht wanneer een lid zich bij je clan voegt.
* [**Member Leave**](https://discord.com/channels/923764211845312533/1128182846218055722)**:** Stuur een bericht wanneer een lid je clan verlaat. Een uniek kenmerk van dit Join/Leave-logboek is dat het laat zien _waar_ de speler naartoe gaat nadat hij/zij is vertrokken. Handig als je wilt zien of een lid naar een andere familieclan is verhuisd of misschien naar een rivaal is gegaan?!&#x20;
* [**Member donation**](https://discord.com/channels/923764211845312533/1128185494497398834)**:** Stuur een bericht telkens wanneer iemand /give-troepen ontvangt
* **Clanprestaties:** Stuur een bericht wanneer de clan omhoog gaat.
* **Clanvereisten:** Stuur een bericht wanneer de claninstellingen zijn gewijzigd.
* **Clanbeschrijving**: Stuur een bericht wanneer de clanbeschrijving is gewijzigd

:::info
Als je ban/strike/profile-knoppen wilt toevoegen aan de logboeken van spelers die deelnemen aan de /leaving, zie dan [setup-a-clan.md](setup-a-clan.md "mention").
:::

### War/CWL-logboeken {#war-cwl-logs}

<figure><img src="/img/gitbook/image (39).png" alt="" /><figcaption></figcaption></figure>

* [**War Log**](https://discord.com/channels/923764211845312533/1128186867825774672)**:** Een continu logboek van oorlogsveranderingen gepost in een kanaal: aanvallen, verdedigingen, begin, einde van oorlog, enz.
* [**War Panel**](https://discord.com/channels/923764211845312533/1128884598609285121)**:** Stuur een insluitpaneel wanneer een nieuwe oorlog begint en update het in realtime.
* **CWL line-upwijziging**

Het instellen van zowel het oorlogslogboek als het oorlogspaneel resulteert in dubbele beelden van het resultaat van de oorlog. &#x20;
:::warning
Als je het logboek tijdens een oorlog hebt aangemaakt, worden de logboeken pas bij de volgende oorlog verzonden. Je oorlogslogboek moet ook "openbaar" zijn.
:::

### Kapitaallogboeken

<figure><img src="/img/gitbook/image (40).png" alt="" /><figcaption></figcaption></figure>

* [**Capital Donations**](https://discord.com/channels/923764211845312533/1128186033918459905/1283537311958827122)**:** Stuur een bericht elke keer dat een speler kapitaalgoud doneert met het gedoneerde bedrag.
* [**Capital Attacks**](https://discord.com/channels/923764211845312533/1128186033918459905/1282595848181514302)**:** Stuur elke keer dat een speler aanvalt een bericht met de hoeveelheid ontvangen kapitaalgoud.
* [**Capital Panel**](https://discord.com/channels/923764211845312533/1129404852385087498)**:** Automatisch bijgewerkt paneel van raid-weekendinformatie
* **Capital Weekly Summary:** Stuur het resultaat van de raids aan het einde van het weekend zoals weergegeven in het spel.

### Spelerslogboeken

<figure><img src="/img/gitbook/image (41).png" alt="" /><figcaption></figcaption></figure>

* [**Role Change**](https://discord.com/channels/923764211845312533/1128185014773874770/1283202622450565171)**:** Stuur een bericht elke keer dat de speler van rol verandert (geef de vorige rol en de nieuwe aan)
* [**Troop Upgrade**](https://discord.com/channels/923764211845312533/1128185014773874770/1283787642386911333)**:** Stuur een bericht elke keer dat de speler een troepen upgradet (welke en een nieuw niveau)
* [**Super Troop Boosts**](https://discord.com/channels/923764211845312533/1128185014773874770/1283545307875115010)**:** Stuur een bericht elke keer dat de speler een troepenmacht versterkt (welke)
* [**TrownHall Upgrade**](https://discord.com/channels/923764211845312533/1128185014773874770/1283708036535291914)**:** Stuur een bericht elke keer dat de speler zijn stadhuis upgradet (met een nieuw niveau)
* [**League Change**](https://discord.com/channels/923764211845312533/1128185014773874770/1283508937324236954)**:** Stuur een bericht elke keer dat de speler van competitie verandert (geef de vorige competitie en de nieuwe aan)
* Spelling-upgrade
* Held-upgrade
* Upgrade van heldenuitrusting
* Naamswijziging
* Legenda-aanvallen
* Legende verdedigingen