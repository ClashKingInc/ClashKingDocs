---
description: Creating, Editing, Copying, Posting, & Deleting an Embed
---
# 🔢 Insluitingen

Er zijn 2 opties om een ​​insluiting op de bot te plaatsen. Optie 1 is helemaal opnieuw en Optie 2 is als je al een insluiting hebt, maar wilt dat de bot deze gebruikt (bijvoorbeeld als je een ticketpaneel op een andere bot hebt en deze op ClashKing wilt gebruiken)

## Creëren: Optie 1 (een nieuwe insluiting maken) {#creating-option-1-creating-a-new-embed}

Ga naar [discohook](https://discohook.app) en je zult zoiets als dit zien:

<figure><img src="/img/docs-media/image (130).png" alt="" /><figcaption><p>Default Discohook Page</p></figcaption></figure>

Maak uw insluiting met de gewenste opties: berichtinhoud, insluitingskleuren, meerdere insluitingen, enz. Aan de rechterkant wordt een voorbeeld weergegeven terwijl u aan het bewerken bent.\
\
Als u klaar bent, klikt u op 'Bericht delen' en vervolgens op 'Kopieer link' in de volgende pop-up

<figure><img src="/img/docs-media/image (2) (1) (1).png" alt="" /><figcaption><p>Getting the url</p></figcaption></figure>

Het is nu opgeslagen op uw klembord. Ga nu terug naar onenigheid.\
\
Voer nu gewoon `/embed create` uit, kies een naam om de insluiting later te identificeren en plak voor het veld `discordhook_url` de link die u hebt gekopieerd. Nu is je insluiting gemaakt!

## Creëren: Optie 2 (een bestaande insluiting kopiëren)

Stap 1 is het lokaliseren van de insluiting die u kopieert op onenigheid. Klik vervolgens met de rechtermuisknop op de insluiting en klik op Berichtlink kopiëren\


<figure><img src="/img/docs-media/image (24) (1) (1).png" alt="" /><figcaption><p>Copying Message Link</p></figcaption></figure>

Hierdoor wordt de berichtlink op uw klembord opgeslagen. Ga nu naar een kanaal waarin je ClashKing-opdrachten kunt uitvoeren en open `/embed clone`, vul het naamveld in met een unieke identificatie zodat je deze later kunt gebruiken en plak in het bericht\_link-veld de link die je eerder hebt gekopieerd. Voer de opdracht uit en nu heb je die insluiting gekloond!

## Een insluiting bewerken

Gebruik het commando `/embed edit`. Als u alleen het veld `name` opgeeft, retourneert de bot een link waarmee u uw insluiting rechtstreeks kunt bewerken. Wanneer u klaar bent met bewerken, volgt u de stappen in [Creating: Option 1](embeds.md#creating-option-1-creating-a-new-embed) en kopieert u de datalink naar uw klembord. Voer vervolgens `/embed edit` opnieuw uit met de nieuwe `discohook_url` en nu wordt uw insluiting bijgewerkt met de wijzigingen die u heeft aangebracht.

## Je insluiting gebruiken

Meerdere opdrachten op de bot, zoals ticketing, maken gebruik van insluitingen die je hier maakt en die zijn vrij eenvoudig. Als je de nieuwe insluiting(en) die je hebt gemaakt gewoon duidelijk wilt posten, gebruik dan `/embed post`