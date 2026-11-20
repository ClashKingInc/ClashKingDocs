# 🔄 Handmatig verversen (rollen en bijnamen)

Gebruik `/refresh` op een Discord-server om rollen en bijnamen bij te werken volgens de ingestelde regels. Dit is handig na het aanpassen van instellingen of wanneer je niet op de automatische evaluatie wilt wachten. Zie [Roles & Nicknames](roles-th-and-more/) voor het instellen.

## Een lid of rol verversen

Gebruik `/refresh` zonder opties om jezelf te verversen. Je kunt deze opties meegeven:

- **role_or_user**: kies een Discord-lid of een rol. Zonder keuze wordt je eigen account ververst.
- **test**: bekijk de voorgestelde wijzigingen zonder ze uit te voeren.
- **role_treatment**: kies **Both**, **Add only** of **Remove only**. Standaard is dit **Both**; bijnaamwijzigingen worden afzonderlijk geregeld.
- **advanced_mode**: open een menu om de te verversen rolcategorieën en eventueel de bijnaam te kiezen. Zonder deze optie worden alle ondersteunde categorieën geëvalueerd.

Kies bijvoorbeeld **Add only** als je verdiende rollen wilt toevoegen zonder ingestelde rollen te verwijderen waarvoor iemand niet meer in aanmerking komt. Gebruik eerst **test** om de voorgestelde wijzigingen te bekijken.

De bot toont de voortgang en een resultaat, inclusief wijzigingen die niet konden worden uitgevoerd. Alleen ingestelde rollen worden beheerd; andere Discord-rollen blijven ongemoeid. Bijnamen worden alleen aangepast als bijnaamwijzigingen zijn ingesteld en de bijnaamcategorie is geselecteerd.

## Rechten en accountgegevens

Leden kunnen zichzelf verversen. Om een ander lid of een rol te verversen heb je **Server beheren**, **Beheerder**, servereigenaarschap of de ingestelde rol **Role refresh delegate** nodig. Zie [Dashboardtoegang](../server-setups/whitelist.md) voor die instelling.

:::info
ClashKing heeft rechten nodig om rollen en bijnamen te beheren. De botrol moet boven de rollen en leden staan die de bot moet aanpassen. Alleen zichtbare gekoppelde accounts worden gebruikt; zie [Spelers koppelen](../bot-commands/link-players.md).
:::
