# 🎳 Ajouter un avertissement

## Le but

Lorsqu'un joueur ne respecte pas l'une des règles de votre clan, vous pouvez ajouter un avertissement pour l'en avertir et garder une trace de cet avertissement.

## La commande

Pour ajouter un avertissement, utilisez `/strike add` (cela prend en charge la "recherche intelligente" afin qu'un nom d'utilisateur puisse fonctionner).
:::info
Les grèves peuvent être supprimées avec `/strike remove {strike ID}`. Il ne s'agit pas d'un utilisateur mais de la combinaison de lettres /numbers pour chaque frappe, que vous pouvez retrouver en utilisant la commande [view-strikes.md](view-strikes.md "mention").
:::

## Les paramètres

### Requis

* `player` : nom d'utilisateur ou tag du joueur. Si vous ne trouvez pas le nom du joueur dans la liste, vous pouvez utiliser son tag de joueur, même s'il ne figure pas dans la liste.
* `reason` : pour que vous puissiez vous rappeler pourquoi vous les interdisez

### Facultatif

* `rollover_days` : La durée pendant laquelle la grève est "active". Les frappes qui atteignent la période de roulement ne seront pas supprimées mais désactivées lors de l'affichage du total des frappes des joueurs.
* `strike_weight` : Il peut être réglé sur n'importe quelle valeur en fonction de la gravité de l'avertissement (valeur par défaut de 1)
* `dm_player` : Si vous ajoutez un texte, le bot enverra un DM au joueur avec ce texte

Les deux champs facultatifs sont `{rollover_days}` et `{strike_weight}`.&#x20;

Strike\_weight a une valeur par défaut de 1 mais peut être défini sur n'importe quelle valeur en fonction de la gravité de l'avertissement.

Rollover\_days est la durée pendant laquelle l'avertissement est « actif ». Les frappes qui atteignent la période de roulement ne seront pas supprimées mais désactivées lors de l'affichage du total des frappes des joueurs.