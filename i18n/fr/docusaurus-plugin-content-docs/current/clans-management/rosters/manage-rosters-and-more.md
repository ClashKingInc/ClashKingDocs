# ⚒️ Gérer les listes et plus

Voici ce que vous trouverez sur cette page :

[#clear-or-delete-a-roster](manage-rosters-and-more.md#clear-or-delete-a-roster "mention")

[#list-the-rosters](manage-rosters-and-more.md#list-the-rosters "mention")

[#roster-refresh](manage-rosters-and-more.md#roster-refresh "mention")

[#roster-roles](manage-rosters-and-more.md#roster-roles "mention")

[#export-import-rosters](manage-rosters-and-more.md#export-import-rosters "mention")

[#player-search](manage-rosters-and-more.md#player-search "mention")



## Effacer ou supprimer une liste {#clear-or-delete-a-roster}

### La commande

&#x20;`/roster delete`&#x20;

### Les paramètres

* roster : nom du roster&#x20;
* tapez : Choisissez entre Effacer les membres pour pouvoir réutiliser la liste ou Supprimer la liste pour supprimer complètement la liste

:::danger
Une liste qui a été supprimée ne peut pas être récupérée alors soyez prudent
:::



## Actualisation de la liste {#roster-refresh}

### La commande

`/roster refresh` actualise les données affichées dans la liste



## Lister les listes {#list-the-rosters}

Afficher une liste de toutes les listes actives sur le serveur.

<figure><img src="/img/gitbook/image (111).png" alt="" /><figcaption></figcaption></figure>

### La commande

Utiliser `/roster list`



## Rôles de la liste {#roster-roles}

Les rôles de liste sont d'une grande utilité et font exactement ce que vous attendez, attribuer un rôle à toutes les personnes d'une liste. Vous pouvez attribuer un rôle à une liste en effectuant `/roster role {roster} {role}`. Notez que le rôle doit être créé au préalable.
:::info
Si les rôles n'ont pas été mis à jour, vous pouvez forcer leur mise à jour à l'aide de `/roster role-refresh`.
:::

### La commande

Utiliser `/roster role`

### Les paramètres

#### Requis

* `roster` : nom du roster
* `role` : rôle que vous souhaitez attribuer aux joueurs du roster

#### Facultatif

* `group` : définissez uniquement le rôle des joueurs dans un rôle spécifique
* `remove_role` : Si vous souhaitez supprimer le rôle au lieu de l'ajouter



## Listes Export/Import {#export-import-rosters}

N'ayez crainte, vous n'êtes pas obligé de refaire les paramètres des listes pour chaque liste.

### La commande

`/roster copy`

### Les paramètres

La commande est votre amie avec les deux drapeaux facultatifs : :

* `export_roster` : Donne un code d'importation qui peut être saisi dans le drapeau `{import_code}` afin de copier les paramètres de la liste
* `import_code` : donne un champ pour saisir un code d'importation récupéré de `{export_roster}`



## Recherche de joueurs {#player-search}

Vous pouvez rechercher une liste de listes appartenant à un utilisateur Discord ou à un compte spécifique.

### La commande

Utilisez `/roster search`&#x20;

### Les paramètres

* `user` : nom d'utilisateur Discord. Affiche toutes les listes dans lesquelles l'utilisateur se trouve actuellement.

<figure><img src="/img/gitbook/Screenshot 2023-09-09 at 22.27.13.png" alt="" width="365" /><figcaption></figcaption></figure>

* `player` : étiquette ou nom du joueur. Affiche toutes les listes dans lesquelles le joueur se trouve actuellement.

<figure><img src="/img/gitbook/Screenshot 2023-09-09 at 22.31.01.png" alt="" /><figcaption></figcaption></figure>
