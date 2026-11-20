# ⚙️Stel een server in
:::warning
U moet `/autorefresh options {state}` inschakelen om de bot correct te laten werken.

Als de bot de inhoud niet correct bijwerkt, controleer dan of de status is ingeschakeld.
:::

## Het doel

Met deze opdracht kunt u de basis instellen voor hoe de bot zich op uw server zal gedragen.

## Het commando

`/setup server`

<figure><img src="/img/docs-media/image (128).png" alt="" /><figcaption></figcaption></figure>

## De parameters

### Vereist

Geen vereiste parameters.

### Optioneel

* `ban_log_channel`: Wanneer je iemand bant met het `/ban`-commando (zie [bans.md](../clans-management/bans.md "mention")), wordt er automatisch een bericht verzonden in het kanaal dat je kiest.
* `strike_log_channel`: Wat betreft het ban-commando: als je een waarschuwing wilt toevoegen aan iemand met het `/strike`-commando (zie [strikes](../clans-management/strikes/ "mention")), wordt er automatisch een bericht verzonden in het kanaal dat je kiest.
* `change_nicknames`: door ja of nee te kiezen, sta je toe dat de bot de bijnamen van je clanleden beheert of niet. U kunt de bijnamen instellen met `family_nickname_convention` en `non family_nickname_convention.`
* `family_nickname_convention`: Als je de bot hebt toegestaan de bijnaam van de leden van je server te wijzigen, kun je kiezen hoe de leden van je clanfamilie worden hernoemd.
* `non_family_nickname_convention`: Dit is hetzelfde als `family_nickname_convetion`, maar dan voor leden van je server die niet in een van je clans zitten.

:::info
**Bijnaamconventies**

*`{discord_name}`
*`{discord_display_name}`
*`{player_name}`
*`{player_tag}`
*`{player_townhall}`
* `{player_townhall_small}` (dit is een superscript zoals ¹⁶)
*`{player_warstars}`
*`{player_role}`
*`{player_clan}`
*`{player_league}`
*`{player_clan_abbreviation}`
:::

* `flair_non_family`: Je kunt kiezen of je wel of niet “flair”-rollen (stadhuis, competitie, enz.) wilt geven aan niet-familieleden.
* `api_token`: kies of de speler een api\_token moet geven wanneer hij de `/link command` ([link-players](../clan-setups/link-players/ "mention")) gebruikt.
* `leadership_eval`: u kunt kiezen of leider en co-leider moeten worden uitgesloten van evaluatie-instellingen (zie [manual-refresh-roles-and-nicknames.md](../players-roles/manual-refresh-roles-and-nicknames.md "mention"))
* `full_whitelist_role`: Geef de gebruikers met deze speciale rol het recht om alle botopdrachten uit te voeren. Wees voorzichtig: "Met grote macht komt grote verantwoordelijkheid".
* `embed_color`: Kies de kleuren van de insluiting die door de bot is verzonden.
* `followed_reddit_accounts`: u kunt logposts ontvangen voor opmerkingen van bepaalde gebruikers op de rekruteringssubreddit. Je hebt gewoon een reddit-feed ingesteld (zie [reddit-recruit-feed.md](reddit-recruit-feed.md "mention")) en je kunt een komma gebruiken om verschillende accounts toe te voegen om te volgen.