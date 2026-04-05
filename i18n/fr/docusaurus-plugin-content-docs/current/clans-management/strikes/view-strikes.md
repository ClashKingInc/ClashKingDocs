# 👀 Afficher les avertissements

## Le but

Vous pourriez être contrarié par un membre qui semble ne pas suivre à plusieurs reprises les règles du clan. En visualisant les grèves, vous pouvez avoir une synthèse de tout ce qui leur a été reproché.

## La commande

Il existe de nombreuses façons personnalisables d'afficher les frappes, mais toutes commencent par la commande de base `/strike list` .

## Les paramètres

### Requis

* `view` : Il a 2 options, joueur et frappe. Le joueur affichera une liste de comptes avec des avertissements, puis une liste des avertissements dont ils disposent. Où comme grève affichera une liste détaillée des grèves individuellement. Les images ci-dessous affichent la différence.



<div align="centre">

<figure><img src="/img/docs-media/Screenshot 2023-09-05 at 17.07.59 (1).png" alt="" width="235" /><figcaption><p>Player view</p></figcaption></figure>

 

<figure><img src="/img/docs-media/Screenshot 2023-09-05 at 17.08.41.png" alt="" width="235" /><figcaption><p>Strike view</p></figcaption></figure>

</div>

### Facultatif

* `clan` : Il affichera les frappes pour un clan spécifique
* `player` : Il affichera uniquement les frappes d'un joueur spécifique. Il peut être combiné avec `clan`.
* `strike_amount` : Afficher uniquement les joueurs avec plus de frappes que ce montant. Il doit être combiné avec la vue joueur.
* `view_expired_strikes` : `view strike that have rolled over.`
* `view_non_family` : voyez les frappes que vous avez définies pour un joueur qui ne fait plus partie de votre clan.

