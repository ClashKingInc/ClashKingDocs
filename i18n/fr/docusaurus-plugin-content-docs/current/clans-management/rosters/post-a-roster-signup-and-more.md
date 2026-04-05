# 📝 Publier une liste (inscription et plus)

## Le but

C’est la partie la plus intéressante de la fonctionnalité de liste ! Une fois que vous avez créé une liste et l'avez configurée (voir [create-a-roster.md](create-a-roster.md "mention") et [set-up-a-roster.md](set-up-a-roster.md "mention")), vous pouvez afficher un panneau dans lequel les joueurs peuvent se connecter eux-mêmes à la liste, ou publier un panneau statique pour afficher la liste finale.

## La commande

Pour créer ce panneau, utilisez la commande `/roster post`.&#x20;

Une fois que vous l'avez fait, le panneau sera automatiquement envoyé au canal sur lequel vous exécutez la commande (la commande que vous avez utilisée ne sera pas affichée).

## Les paramètres

* `roster` : nom du roster que vous souhaitez publier (si aucun roster n'est disponible, voir [create-a-roster.md](create-a-roster.md "mention"))
* `type` : vous pouvez choisir entre Statique, Publication et Inscription. Voir ci-dessous le cas d'utilisation pour chaque type.

## Type de publication de la liste

### S'inscrire

Cela affichera un panneau avec des boutons permettant à votre membre de clan d'enregistrer ses comptes. Les informations que vous avez définies dans [setup-a-server.md](../../server-setups/setup-a-server.md "mention") seront également affichées.

<figure><img src="/img/gitbook/image (34).png" alt="" /><figcaption></figcaption></figure>

Vous pouvez ensuite demander à votre membre du clan de s'inscrire. Vous pouvez partager la page [signing-up-on-a-roster.md](signing-up-on-a-roster.md "mention") qui leur expliquera comment interagir avec le panneau.

### Poste

Cela affichera un panneau sans boutons pour rejoindre ou quitter la liste. Vous pouvez l'utiliser pour afficher la liste :&#x20;

* Une fois l'inscription terminée,&#x20;
* Pendant que le personnel le crée sans utiliser l'inscription (voir [manage-players.md](manage-players.md "mention")),
* Lors du déplacement de joueurs entre clans ou lors de la suppression de joueurs non sélectionnés après avoir clôturé l'inscription (voir [manage-players.md](manage-players.md "mention"))&#x20;

L'intégration peut être actualisée à l'aide du bouton 🔄.

<figure><img src="/img/gitbook/image (35).png" alt="" /><figcaption></figcaption></figure>

### Statique

Cela affichera l’état de la liste au moment où vous envoyez la commande. L'intégration affichée ne peut pas être actualisée. Cela peut être utile si vous souhaitez suivre l'enregistrement de la liste, ou si vous souhaitez conserver la liste des membres de la liste avant de la vider pour la réutiliser.

<figure><img src="/img/gitbook/image (36).png" alt="" /><figcaption></figcaption></figure>

