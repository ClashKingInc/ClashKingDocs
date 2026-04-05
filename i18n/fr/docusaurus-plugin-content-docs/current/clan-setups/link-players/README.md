# 🔗 Lier les joueurs

Le but

Pour fonctionner correctement, le bot doit savoir quels utilisateurs Discord possèdent chaque compte CoC de votre clan. Cela lui permettra par exemple de donner au membre l'accès à un canal spécifique ou de lui envoyer un ping automatiquement avec [reminders.md](../../server-setups/reminders.md "mention") que vous avez défini.

## La commande

Pour cela, vous devez exécuter la commande `/link`
:::info
Si vous associez quelqu'un par erreur, vous pouvez utiliser la commande [unlink-players.md](unlink-players.md "mention").
:::

## Les paramètres

### Requis

`player` : Cela correspond au tag du joueur que vous souhaitez lier. Vous pouvez trouver ce tag dans leur profil en jeu. Cela devrait ressembler à ça : #PVJ98GL.



### Facultatif

`user` : Il s'agit de l'utilisateur Discord avec lequel vous souhaitez associer le compte CoC. Si vous exécutez la commande vous-même, vous n'avez pas besoin d'utiliser cette option. Ceci n'est utile que si vous souhaitez lier un compte à quelqu'un d'autre.

`api_token` : Ceci sert à prouver que le compte vous appartient. Vous pouvez le trouver dans les paramètres de Clash Of Clans.&#x20;
:::warning
Le jeton API n'est requis que s'il est défini par le personnel du clan (voir [setup-a-server.md](../../server-setups/setup-a-server.md "mention")) ou si le compte est déjà lié à quelqu'un d'autre.
:::

`greet` : Il s'agit d'envoyer un message de bienvenue à l'utilisateur une fois lié.

<figure><img src="/img/gitbook/image (129).png" alt="" /><figcaption></figcaption></figure>
