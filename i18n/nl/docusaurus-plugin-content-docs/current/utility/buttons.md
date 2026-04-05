# 🔘 Knoppen

## Het doel

Deze opdracht biedt een manier om een ​​of meer knoppen onder een insluiting toe te voegen. Je kunt er ook een specifieke embed mee sturen als mensen lid worden van een van je clans, zodat je dat niet zelf hoeft te doen! Er zijn momenteel 5 knoppen beschikbaar en u kunt maximaal 4 knoppen selecteren.

:::info
Als je niet weet wat een embed is en hoe je er een kunt maken met ClashKing, controleer dan [embeds.md](embeds.md "mention")
:::

## Het commando

Het commando is `/buttons`

<figure><img src="/img/docs-media/image (5).png" alt="" /><figcaption></figcaption></figure>

:::info
Voordat u die opdracht uitvoert, moet u een [embeds.md](embeds.md "mention") maken
:::

## De parameters

### Vereist

Er zijn geen parameters vereist.

### Optioneel

* **embed :** Kies de [embeds.md](embeds.md "mention") waaraan je knoppen wilt toevoegen. Als u geen insluiting selecteert, wordt er een insluiting gemaakt, afhankelijk van de knoppen die u kiest.

<figure><img src="/img/docs-media/image (1) (1).png" alt="" width="563" /><figcaption><p>Embed by default for Link account buttons</p></figcaption></figure>

* **button\_color :** Kies tussen blauw, groen, grijs en rood. Standaardkleur is grijs.
* **op\_welcome\_channel :** je kunt een kanaal kiezen waarnaar de embed (met of zonder knoppen) wordt verzonden elke keer dat iemand zich bij je Discord-server aansluit. Er kan slechts één insluiting worden ingesteld, dus als u een nieuwe invoegt, wordt de huidige vervangen.&#x20;

<figure><img src="/img/docs-media/image (2) (1).png" alt="" width="563" /><figcaption><p>Example of embeds sent every time a user join the discord server</p></figcaption></figure>
:::danger
Voorlopig is er geen manier om het welkomstbericht te deactiveren. Als je het wilt verwijderen, maak dan een nieuw kanaal aan, stel er een welkomstbericht in en verwijder het kanaal.
:::

## Knoppentype

Nadat u de opdracht heeft verzonden, kunt u tussen deze vijf maximaal vier knoppen kiezen.

<figure><img src="/img/docs-media/image (3) (1).png" alt="" /><figcaption></figcaption></figure>

### Link-knop

Met deze knop kunt u een CoC-account koppelen aan uw discord-account (zie [link-players](../clan-setups/link-players/ "mention"))

<figure><img src="/img/docs-media/image (83).png" alt="" width="416" /><figcaption><p>Link account pop up</p></figcaption></figure>

### Help-knop koppelen

Deze knop geeft een tutorial weer waarin wordt getoond hoe u een speler kunt koppelen en hoe u het API-token kunt vinden.

<figure><img src="/img/docs-media/image (84).png" alt="" width="322" /><figcaption></figcaption></figure>

### Rollen vernieuwen

De titel is vrij duidelijk, je kunt hiermee je rollen vernieuwen als de bot je (nog) geen nieuwe rol heeft gegeven.&#x20;

### Takenlijst

Toont wat u vandaag moet doen op al uw rekeningen. Dit omvat Legends-hits, Raids-hits, Clan Games-punten, Season Pass-punten, Kapitaaldonaties en Inactiviteit.

<figure><img src="/img/docs-media/image (86).png" alt="" /><figcaption></figcaption></figure>

### Rooster

Toont alle roosters waarin uw accounts zich momenteel bevinden.

<figure><img src="/img/docs-media/image (87).png" alt="" /><figcaption></figcaption></figure>

## Zodra je klaar bent

Nadat u de knoppen heeft geselecteerd en u `on_welcome_channel` niet hebt ingesteld, wordt de insluiting automatisch verzonden naar het kanaal waarop u de opdracht uitvoert.

<figure><img src="/img/docs-media/image (4) (1).png" alt="" width="563" /><figcaption></figcaption></figure>
