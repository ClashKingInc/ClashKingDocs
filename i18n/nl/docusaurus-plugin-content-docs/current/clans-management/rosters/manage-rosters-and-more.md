# ⚒️ Beheer roosters en meer

Dit is wat je op deze pagina kunt vinden:

[#clear-or-delete-a-roster](manage-rosters-and-more.md#clear-or-delete-a-roster "mention")

[#list-the-rosters](manage-rosters-and-more.md#list-the-rosters "mention")

[#roster-refresh](manage-rosters-and-more.md#roster-refresh "mention")

[#roster-roles](manage-rosters-and-more.md#roster-roles "mention")

[#export-import-rosters](manage-rosters-and-more.md#export-import-rosters "mention")

[#player-search](manage-rosters-and-more.md#player-search "mention")



## Een rooster wissen of verwijderen

### Het commando

&#x20;`/roster delete`&#x20;

### De parameters

* roster: naam van het roster&#x20;
* type: Kies tussen Leden wissen zodat u het rooster opnieuw kunt gebruiken of Rooster verwijderen om het rooster volledig te verwijderen
:::danger
Een rooster dat is verwijderd, kan niet worden hersteld, dus wees voorzichtig
:::



## Rooster vernieuwen

### Het commando

`/roster refresh` vernieuwen gegevens weergegeven in het rooster



## Maak een lijst van de roosters

Toon een lijst met alle roosters die actief zijn op de server.

<figure><img src="/img/gitbook/image (111).png" alt="" /><figcaption></figcaption></figure>

### Het commando

Gebruik `/roster list`



## Roosterrollen

Roosterrollen zijn een geweldig hulpmiddel en doen precies wat u verwacht: geef een rol aan alle mensen in een rooster. U kunt een rol aan een rooster toekennen door `/roster role {roster} {role}` uit te voeren. Let op: de rol moet vooraf worden aangemaakt.


:::info
Als de rollen niet zijn bijgewerkt, kunt u ze geforceerd bijwerken met `/roster role-refresh`
:::

### Het commando

Gebruik `/roster role`

### De parameters

#### Vereist

* `roster`: naam van het roster
* `role`: rol die je wilt toekennen aan de spelers in het roster

#### Optioneel

* `group`: stel de rol alleen in voor de spelers in een specifieke rol
* `remove_role`: als u de rol wilt verwijderen in plaats van toevoegen



## Export/Import-roosters {#export-import-rosters}

Wees niet bang, je hoeft niet voor elk rooster de roosterinstellingen opnieuw te maken.&#x20;

### Het commando

`/roster copy`

### De parameters

Het commando is je vriend met de twee optionele vlaggen::

* `export_roster`: Geeft een importcode die kan worden ingevoerd in de `{import_code}`-vlag om de roosterinstellingen te kopiëren
* `import_code`: geeft een veld om een importcode in te voeren die is opgehaald uit `{export_roster}`



## Speler zoeken

U kunt zoeken naar een lijst met roosters van een onenigheidsgebruiker of een specifiek account.

### Het commando

Gebruik `/roster search`&#x20;

### De parameters

* `user`: Discord-gebruikersnaam. Toont alle roosters waarin de gebruiker zich momenteel bevindt.

<figure><img src="/img/gitbook/Screenshot 2023-09-09 at 22.27.13.png" alt="" width="365" /><figcaption></figcaption></figure>

* `player`: Spelertag of naam. Toont alle roosters waarin de speler zich momenteel bevindt.

<figure><img src="/img/gitbook/Screenshot 2023-09-09 at 22.31.01.png" alt="" /><figcaption></figcaption></figure>
