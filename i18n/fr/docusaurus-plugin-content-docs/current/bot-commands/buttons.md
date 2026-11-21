# 🔘 Boutons pour les membres

Utilisez `/buttons` dans un serveur Discord pour créer un panneau permettant aux membres de lier leurs comptes, actualiser leurs rôles, consulter leurs tâches ou voir leurs rosters.

## Créer un panneau

Vous devez disposer de l'accès **Panels → Manage** au tableau de bord ou des permissions de gestion du serveur. Lancez `/buttons` dans le salon où publier le panneau. Toutes les options sont facultatives :

- **embed** : sélectionnez un embed classique enregistré. Sans sélection, ClashKing crée un message par défaut.
- **button_color** : choisissez Blue, Green, Grey ou Red. Grey est la couleur par défaut.
- **on_welcome_channel** : sélectionnez un salon pour envoyer le panneau à l'arrivée d'un membre. Sans cette option, le panneau est publié dans le salon actuel.

Choisissez un à quatre boutons dans le menu pour terminer. Par exemple, choisissez **Link Button** et **Link Help Button** pour aider les nouveaux membres à lier leurs comptes. La sélection expire après dix minutes ; relancez la commande si nécessaire.

## Boutons disponibles

- **Link Button** : ouvre le formulaire de liaison de compte.
- **Link Help Button** : affiche l'aide à la liaison.
- **Refresh Button** : actualise les rôles et le surnom du membre selon les paramètres du serveur.
- **To-Do Button** : affiche en privé les tâches des comptes du membre.
- **Roster Button** : affiche en privé les inscriptions du membre aux rosters.

Chaque bouton agit pour le membre qui clique dessus. Consultez [Link players](link-players.md), [Manual refresh](../players-roles/manual-refresh-roles-and-nicknames.md) et [Rosters](../clans-management/rosters/README.md) pour plus d'informations.
