# 📋 Rosters

Met rosters organiseer je spelers voor CWL, oorlogen en andere evenementen. Maak en beheer ze via **Management → Rosters** in het dashboard. Spelers kunnen zich aanmelden via een rosterbericht in Discord.

Dit voorbeeld toont een oudere rosterindeling; de huidige knoppen en vormgeving kunnen verschillen.

![Voorbeeld van een roster](</img/docs-media/image (32).png>)

## ⚔️ Een roster aanmaken

1. Open het dashboard, selecteer je server en kies **Rosters** onder **Management**.
2. Klik op **Create Roster** en vul een naam in, bijvoorbeeld `Clan 1 CWL`.
3. Kies **Clan** of **Family** als rostertype. Selecteer bij een clanroster de clan.
4. Kies wie zich mag aanmelden bij **Signup Scope**: **Clan Only**, **Family Only** of **Anyone**. Voeg eventueel een beschrijving toe.
5. Klik op **Create Roster**. Open het roster om de instellingen aan te passen of spelers toe te voegen.

Voeg de betreffende clan eerst toe aan je server als die niet in de lijst staat.

## ⚙️ Een roster instellen

Open een roster onder **Management → Rosters** en kies **Settings**. Klik na je wijzigingen op **Save Settings**.

- **Identity & Configuration**: naam, beschrijving, type, clan, aanmeldbereik, begintijd, herhaling en rostergroep.
- **Restrictions & Limits**: Town Hall-grenzen, roster- en aanmeldlimieten, accounts per gebruiker en verplichte accountverificatie.
- **Signup categories**: kies beschikbare categorieën en een standaardcategorie. Bij een gegroepeerd roster stel je de categorieën in bij de groep.
- **Signup questions**: voeg vragen toe die spelers bij hun aanmelding beantwoorden.
- **Appearance**: kies een afbeelding en embedkleur. Met de kolominstellingen kies je welke spelerinformatie wordt getoond.

:::warning
Als je aanmeldvragen wijzigt, worden bestaande antwoorden van het roster gewist; aangemelde spelers blijven staan. Lees de bevestiging voordat je opslaat.
:::

Een categorie beschrijft een aanmelding, bijvoorbeeld **Available** of **Only if needed**. Een rostergroep verzamelt meerdere rosters, bijvoorbeeld alle CWL-rosters, en kan instellingen en automations delen. Zie Rosters beheren.

## 📝 Een roster plaatsen

Open het roster in het dashboard en klik op **Post Roster**. Kies een Discord-kanaal en publicatietype en klik opnieuw op **Post Roster**.

- **Open Signups**: plaatst een roster met knoppen om aan te melden of een aanmelding te verwijderen.
- **View**: plaatst het roster zonder aanmeldknoppen.
- **Post Roster**: plaatst een momentopname.

Je kunt ook `/roster post` in Discord gebruiken en een roster en **Signup**, **Post** of **Static** kiezen. Het bericht komt in het huidige kanaal; hiervoor heb je serverbeheerrechten nodig.

De afbeeldingen tonen oudere voorbeelden; de huidige bediening kan verschillen.

<figure><img src="/img/docs-media/image (34).png" alt="Ouder voorbeeld van een aanmeldroster" /><figcaption>Voorbeeld van aanmelden</figcaption></figure>

<figure><img src="/img/docs-media/image (36).png" alt="Voorbeeld van een rostermomentopname" /><figcaption>Voorbeeld van een momentopname</figcaption></figure>

## 🙋‍♀️ Aanmelden voor een roster

[Koppel eerst je Clash of Clans-account](../../clan-setups/link-players/) aan Discord. Het aanmeldbereik en de regels voor accountverificatie, Town Hall en capaciteit bepalen of je account mag deelnemen.

### Aanmelden

1. Klik op **Join** of **Sign up** bij het rosterbericht in Discord.
2. Selecteer je account of accounts en beantwoord eventuele vragen. Als er vragen zijn ingesteld, meld je één account tegelijk aan.
3. Verstuur het formulier en controleer de bevestiging. Vraag je clanleiding om hulp als aanmelden niet lukt of je account ontbreekt.

### Aanmelding verwijderen

Klik op **Remove** of **Remove signup**, selecteer het account dat je wilt afmelden en bevestig. Vraag je clanleiding om hulp als dat nodig is.

## ↔️ Spelers beheren

Open een roster onder **Management → Rosters** om de **Members** te beheren.

- Klik op **Add Members** om beschikbare clanleden te selecteren, serverleden te zoeken of meerdere spelertags in te voeren.
- Gebruik de acties bij een speler om die te verwijderen. Je kunt spelers ook op aanmeldcategorie indelen.
- Gebruik **Refresh** om spelergegevens te verversen.
- Kies **Compare** op de rosterpagina, selecteer twee tot vier rosters en sleep spelers ertussen om ze te vergelijken of te verplaatsen.

Verplaats bijvoorbeeld een speler van het hoofdroster voor CWL naar een tweede roster via de vergelijkingsweergave. Zie ook Ontbrekende spelers.

## ❓ Ontbrekende spelers

Open een **clanroster** en kies **Missing Members**. Het dashboard vergelijkt clanleden met aanmeldingen en toont de dekking en ontbrekende spelers. Selecteer spelers en kies **Add Selected**, of gebruik **Add All**.

Bij een gegroepeerd roster kun je vergelijken met dit roster of de hele groep. Deze weergave is beschikbaar voor clanrosters.

Een herinnering kun je plannen via het tabblad **Automations** van het roster of via de daarvoor ingestelde reminderfuncties in het dashboard.

## ⚒️ Rosters beheren

Onder **Management → Rosters** vind je de rosters. Open er een om leden, instellingen en automations te beheren.

### Kopiëren, leegmaken of verwijderen

Met **Clone** maak je een kopie, eventueel inclusief leden. In de roosterdetails verwijdert **Clear members** de leden maar blijft het roster bestaan. Een verwijderd roster verdwijnt definitief; lees de bevestiging voordat je doorgaat.

### Groepen en aanmeldcategorieën

**Groups** verzamelen meerdere rosters, bijvoorbeeld CWL-opstellingen. Groepsregels kunnen limieten en beschikbare aanmeldcategorieën voor de groep instellen. **Categories** beschrijven aanmeldingen, bijvoorbeeld **Available** of **Tentative**, en zijn gedeeld op de server. Bij het verwijderen van een groep blijven de rosters zonder groep bestaan.

### Automations

Plan via **Automations → Create Automation** in een roster acties zoals herinneringen, een roster plaatsen, aanmeldingen openen of sluiten, leden verwijderen, archiveren of verwijderen. Kies het tijdstip en de bestemming waar nodig. Groepsautomations beheer je via de groepsinstellingen. Controleer de actie goed, zeker bij leegmaken of verwijderen.

### Zoeken en vergelijken

Zoek in de dashboardlijst op naam of clan. Met **Compare** selecteer je twee tot vier rosters en verplaats je spelers ertussen. In Discord vind je met `/roster search` de rosters van een speler of Discord-gebruiker op deze server; met `/roster post` plaats je een bestaand roster.
