# ⚙️ Zet een clan op
:::danger
Voordat je een clan opzet, zorg ervoor dat je [added it first](add-a-clan.md).
:::

## Het doel

Met dit commando kunt u de instellingen wijzigen die u bij het /addclan-commando hebt aangegeven, maar ook nieuwe instellingen toevoegen, zoals begroetingsberichten, afkortingen van namen, knoppen die in logs moeten worden weergegeven, enz.

## Het commando

`/setup clan`

:::info
Voordat u dat commando uitvoert, moet u een leiderschapsrol creëren vanaf uw onenigheidsserver als u er nog geen heeft. Bijvoorbeeld: @/coleader
:::

## De parameters

### Vereist

`clan`: Uiteraard dient u aan te geven welke cln u wilt instellen.

### Optioneel

* `member_role`: De rol die de leden van deze clan moeten krijgen. Dus als je het oneens bent, als de bot de rollen beheert, zou elke persoon in deze clan deze rol krijgen. Handig als je clanspecifieke kanalen maakt.
* `leadership_role`: de rol die eventuele medeleiders en leiders in deze clan zullen krijgen. Bij een typische onenigheid heb je misschien een leadchat voor een clan of een cumulatieve leiderchat voor alle clans. Deze rol kan hier nuttig zijn.
* `clan_channel`: het kanaal dat u definieert, zal het standaardkanaal zijn waar de bot in zal schrijven. Dit is bijvoorbeeld waar nieuwe gebruikers geweldig zullen zijn als u de optie activeert.
* `greeting`: je kunt een embed kiezen die de bot verzendt wanneer een nieuw lid lid wordt van je clan (als deze aan onenigheid is gekoppeld).

:::info
**Clanbegroetingsconventies**

*`{user_mention}`
*`{user_display_name}`
*`{clan_name}`
*`{clan_link}`
*`{clan_leader_name}`
* `{clan_leader_mention}` (in een toekomstige update)
*`{player_name}`
*`{player_link}`
*`{player_townhall}`
*`{player_townhall_emoji}`
*`{player_league}`
*`{player_league_emoji}`
*`{player_trophies}`
:::

* `auto_greet`: als je het activeert, zal de bot elke keer dat een nieuw lid lid wordt van de clan, hem begroeten als hij of zij op de server staat. Je kunt kiezen tussen **Nooit, Eerste deelname, Elke deelname** om aan de bot aan te geven of hij ze moet begroeten, en of hij ze moet begroeten de eerste keer dat ze in de clan worden gezien of elke keer dat ze lid worden.
* `category`: dit is een manier om je clans te organiseren. Veel clanfamilies hebben 5 of meer clans. Soms zijn sommige alleen voor CWL- of Event-clans. Je kunt een van de vooraf ingestelde opties gebruiken (**Algemeen, Feeder, Oorlog, Esport**) of je eigen opties typen.
* `ban_alert_channel`: Je kunt kiezen in welk kanaal de bot je waarschuwt als iemand die is verbannen (zie [bans.md](../clans-management/bans.md "mention")) zich bij je clan aansluit.
* `clan_abbreviation`: Je kunt een bijnaam aan je clan geven, zodat de leden deze in hun naam kunnen hebben als je ervoor kiest om de hernaaming te activeren (zie [setup-a-server.md](../server-setups/setup-a-server.md "mention"))
* `strike_button`: toont een slagknop wanneer iemand je clan verlaat.
* `ban_button`: Toont een ban-knop wanneer iemand je clan verlaat, zodat je hem of haar gemakkelijk kunt verbannen nadat je hem hebt geschopt.
* `profile_button`: toont een profielknop wanneer iemand lid wordt van je clan, zodat je gemakkelijk toegang hebt tot zijn of haar in-game profiel.

