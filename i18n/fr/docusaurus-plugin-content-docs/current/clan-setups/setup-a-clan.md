# ⚙️ Créer un clan

:::danger
Avant de créer un clan, assurez-vous d'avoir [added it first](add-a-clan.md).
:::

## Le but

Cette commande vous permettra de modifier les paramètres que vous avez indiqués sur la commande /addclan, mais également d'ajouter de nouveaux paramètres tels que les messages d'accueil, l'abréviation du nom, les boutons à afficher sur les journaux, etc.

## La commande

`/setup clan`
:::info
Avant d'exécuter cette commande, vous devez créer un rôle de leadership à partir de votre serveur Discord si vous n'en avez pas déjà un. Par exemple : @/coleader
:::

## Les paramètres

### Requis

`clan` : Vous devez bien entendu indiquer quel cln vous souhaitez créer.

### Facultatif

* `member_role` : Le rôle que devraient recevoir les membres de ce clan. Donc sur votre discord, si le bot gérait les rôles, chaque personne de ce clan obtiendrait ce rôle. Utile si vous créez des chaînes spécifiques à un clan.
* `leadership_role` : Le rôle que recevront tous les co-leaders et leaders de ce clan. Dans une discorde typique, vous pouvez avoir une discussion principale pour un clan ou une discussion de chef cumulative pour tous les clans - ce rôle peut être utile ici.
* `clan_channel` : Le canal que vous définirez sera le canal par défaut dans lequel le bot écrira. Par exemple, c'est ici qu'il accueillera de nouveaux utilisateurs si vous activez l'option.
* `greeting` : Vous pouvez choisir une intégration que le bot enverra lorsqu'un nouveau membre rejoindra votre clan (s'il a été lié à Discord).
:::info
**Conventions de salutation des clans**

* `{user_mention}`
* `{user_display_name}`
* `{clan_name}`
* `{clan_link}`
* `{clan_leader_name}`
* `{clan_leader_mention}` (dans une future mise à jour)
* `{player_name}`
* `{player_link}`
* `{player_townhall}`
* `{player_townhall_emoji}`
* `{player_league}`
* `{player_league_emoji}`
* `{player_trophies}`
:::

* `auto_greet` : Si vous l'activez, chaque fois qu'un nouveau membre rejoint le clan, le bot le saluera s'il est sur le serveur. Vous pouvez choisir entre **Jamais, Premier joint, Chaque jointure** pour indiquer au bot s'il doit les saluer, et s'il doit les saluer la première fois qu'ils sont vus dans le clan ou à chaque fois qu'ils rejoignent.
* `category` : C'est une façon d'organiser vos clans. De nombreuses familles claniques comptent 5 clans ou plus. Parfois, certains sont uniquement destinés aux clans CWL ou Event. Vous pouvez utiliser l'une des options prédéfinies (**Général, Feeder, War, Esport**) ou saisir la vôtre.
* `ban_alert_channel` : Vous pouvez choisir sur quel canal le bot vous avertira si quelqu'un qui a été banni (voir [bans.md](../clans-management/bans.md "mention")) rejoint votre clan.
* `clan_abbreviation` : Vous pouvez donner un pseudo à votre clan pour que les membres puissent l'avoir à leur nom si vous choisissez d'activer le renommage (voir [setup-a-server.md](../server-setups/setup-a-server.md "mention"))
* `strike_button` : affiche un bouton d'attaque lorsque quelqu'un quitte votre clan.
* `ban_button` : Affiche un bouton de bannissement lorsque quelqu'un quitte votre clan, afin que vous puissiez le bannir facilement après l'avoir expulsé.
* `profile_button` : affiche un bouton de profil lorsque quelqu'un rejoint votre clan afin que vous puissiez accéder facilement à son profil en jeu.

