---
description: Adding more functionality to your tickets!
---
# ✅ Knoppen en acties toevoegen

Als u zich in deze sectie bevindt, moet u minimaal - 1 insluiting hebben gemaakt (`/embed create`) en 1 ticketpaneel hebben gemaakt (`/ticket panel-create`). \
\
Ervan uitgaande dat u dat doet, kunt u nu wat meer functionaliteit aan uw tickets toevoegen. Deze gids zal worden opgesplitst in 3 hoofdonderdelen:

* knoppen toevoegen en bewerken
* accountaanvragen
* vragen

## Knoppen toevoegen en bewerken

Gebruik hiervoor `/ticket button-add,`, dat 4 opties heeft:

* `{panel_name}`: het paneel waaraan u de knop wilt toevoegen
* `{button_text}`: de tekst die je op de knop wilt hebben
* `{button_color}`: welke kleur u de knop wilt hebben (alleen blauw, groen, grijs of rood)
* `{button_emoji}`: een emoji voor de knop (je kunt aangepaste emoji's gebruiken zolang ze op de server staan)

Eenmaal uitgevoerd, beschikt u over een gloednieuwe knop voor uw paneel.&#x20;

:::info
U moet `/ticket panel-post` opnieuw uitvoeren wanneer er nieuwe knoppen worden toegevoegd
:::

Het bewerken van knoppen werkt vrijwel hetzelfde, `/ticket button-edit`, dezelfde opties, behalve dat er wordt gevraagd welke knop op het paneel moet worden bewerkt.

En ten slotte kun je een knop verwijderen met `/ticket button-remove`

## Clash-accountaanvragen

Nu gaan we dieper in op de dingen die deze ticketverkoop kan doen, wat anderen niet kunnen. Inmiddels kun je insluitingen bewerken en maken, panelen bewerken en maken, en zelfs knoppen toevoegen en bewerken, maar het is nog steeds een eigenzinnig basisticketsysteem. Laten we dat veranderen!

Voer /ticket uit. Hier krijgt u 4 opties te zien:

* &#x20;\# van accounts die mogen solliciteren (met hoeveel accounts kunnen mensen zich aanmelden in een ticket)
* Minimaal gemeentehuis toegestaan
* On/Off (hiermee wordt de hele instelling ingeschakeld/off, indien groen (aan), wordt mensen gevraagd zich aan te melden met een account)
* Spelersinformatie verzenden (indien groen (aan), wordt een overzicht van de spelersinformatie verzonden wanneer het ticket wordt geopend)\


    <figure><img src="/img/docs-media/image (1) (1) (1) (1) (1).png" alt="" /><figcaption><p>/ticket apply</p></figcaption></figure>
:::warning
Een kanttekening bij het hele ticketaanvraagproces is dat de accounts van mensen eraan moeten worden gekoppeld. De bot informeert gebruikers hierover als ze uiteindelijk proberen zich aan te melden zonder account, maar het is aan de kant van de server om een ​​robuust koppelingssysteem op te zetten met behulp van zaken als linkknoppen en dergelijke. Tegenwoordig is dat echter niet zo'n groot probleem meer, aangezien een verrassend aantal mensen met onenigheid te maken hebben :smile:&#x20;
:::

We kunnen echter nog verder gaan: de toepassingsregels van /ticket stellen ons in staat aanvragers op meer dan alleen gemeentehuisniveau uit te filteren. Je kunt filteren op individuele heldenniveaus of oorlogssterren. Deze opdracht legt uit hoe het redelijk goed werkt als het wordt uitgevoerd, maar zo ziet het eruit. Kopieer voorbij de vereisten, behoud hetzelfde formaat, bewerk ze, upload ze gewoon terug (de opgegeven versie is slechts een voorbeeld en niet de standaard waar iedereen op is ingesteld)

<figure><img src="/img/docs-media/image (2) (1) (1) (1) (1).png" alt="" width="479" /><figcaption></figcaption></figure>

## Vragen

Het kan zijn dat u meer vragen heeft voor een sollicitant dan alleen wat zijn clash-account is. En dit is waar modale vragen om de hoek komen kijken. Gebruik de /ticket-instellingen en kies het relevante paneel en de knop, met de keuze "Vragen", voer de opdracht uit. Er wordt een modaal geopend en u kunt instellen welke vragen de bot moet stellen wanneer deze van toepassing zijn.&#x20;