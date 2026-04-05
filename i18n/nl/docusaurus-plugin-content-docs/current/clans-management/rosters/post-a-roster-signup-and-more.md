# 📝 Plaats een rooster (aanmelding en meer)

## Het doel

Dit is het meest interessante deel van de roosterfunctie! Nadat u een selectie heeft gemaakt en ingesteld (zie [create-a-roster.md](create-a-roster.md "mention") & [set-up-a-roster.md](set-up-a-roster.md "mention")), kunt u een paneel weergeven waar de spelers de selectie zelf kunnen aanmelden, of een statisch paneel plaatsen om de definitieve selectie weer te geven.

## Het commando

Om dit paneel te maken, gebruikt u de opdracht `/roster post`.&#x20;

Zodra u dat gedaan heeft, wordt het paneel automatisch verzonden naar het kanaal waarop u de opdracht uitvoert (de opdracht die u gebruikte wordt niet weergegeven).

## De parameters

* `roster`: naam van het rooster dat je wilt plaatsen (als er geen rooster beschikbaar is, zie [create-a-roster.md](create-a-roster.md "mention"))
* `type`: u kunt kiezen tussen Statisch, Post en Aanmelden. Zie hieronder de use case voor elk type.

## Type roosterbericht

### Aanmelden

Dit toont een paneel met knoppen waarmee je clangenoot zijn accounts kan registreren. De informatie die u in [setup-a-server.md](../../server-setups/setup-a-server.md "mention") instelt, wordt ook weergegeven.

<figure><img src="/img/gitbook/image (34).png" alt="" /><figcaption></figcaption></figure>

Je kunt dan tegen je clangenoot zeggen dat hij zich moet aanmelden. U kunt de [signing-up-on-a-roster.md](signing-up-on-a-roster.md "mention")-pagina delen, waarop wordt uitgelegd hoe ze met het paneel kunnen communiceren.

### Na

Er wordt een paneel weergegeven zonder knoppen om aan de selectie deel te nemen of deze te verlaten. Daarmee kun je het rooster tonen:&#x20;

* Zodra de aanmelding voorbij is,&#x20;
* Terwijl het personeel het aanmaakt zonder gebruik te maken van de aanmelding (zie [manage-players.md](manage-players.md "mention")),
* Terwijl je spelers tussen clans verplaatst of niet-geselecteerde spelers verwijdert nadat je de aanmelding hebt gesloten (zie [manage-players.md](manage-players.md "mention"))&#x20;

De insluiting kan worden vernieuwd met de knop 🔄.

<figure><img src="/img/gitbook/image (35).png" alt="" /><figcaption></figcaption></figure>

### Statisch

Hiermee wordt de status van het rooster weergegeven op het moment dat u de opdracht verzendt. De getoonde insluiting kan niet worden vernieuwd. Het kan handig zijn als u de roosterregistratie wilt bijhouden, of als u de roosterledenlijst wilt bewaren voordat u deze leegmaakt om deze opnieuw te gebruiken.

<figure><img src="/img/gitbook/image (36).png" alt="" /><figcaption></figcaption></figure>

