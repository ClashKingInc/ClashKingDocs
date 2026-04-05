---
description: Frequently Asked Questions
---
# ❓FAQ

<details>

<summary>Comment configurer le bot ?</summary>

Vous pouvez configurer le bot facilement en suivant ces étapes : [quick-start.md](quick-start.md "mention")

</details>

<details>

<summary>Pourquoi certaines statistiques ne s'affichent-elles pas correctement (ou pas du tout) dans leurs commandes ?</summary>

ClashKing ne peut obtenir ces informations que si le clan est suivi, ce qui peut être fait en reliant un clan à un serveur avec `/addclan`. En effet, ces informations ne sont pas fournies par l'API et il n'est pas possible de suivre des millions de clans de manière arbitraire (au moins pour des choses plus détaillées).

</details>

<details>

<summary>Qu'est-ce qui dure en ligne &#x26; vérification d'activité à faire ?</summary>

vérifiez les changements dans les éléments suivants pour détecter la dernière fois qu'un joueur était en ligne :

* changement de nom
* victoire d'attaque
* attaque de raid
* don de capital de clan
* attaque de guerre
* don cc
* gain d'étoile de guerre
* changement de préférence de guerre
*obstacle supprimé
* Changement du trophée de base du constructeur
* points de passe or gagnés
* points de jeux de clan gagnés
* or, élixir ou DE pillés

Chaque période de suivi (environ 3 minutes) pendant laquelle l'un d'entre eux est trouvé, +1 est ajouté au score d'activité

</details>

<details>

<summary>Les emoji du robot ne fonctionnent pas ?</summary>

Le rôle de serveur _@/everyone_ doit avoir l'autorisation « utiliser des emojis externes ».

</details>

<details>

<summary>Le bot n'envoie rien pour mon flux ou mon journal ?</summary>

* Utilisez `/setup list` et confirmez qu'il est (toujours) configuré
* Donnez-lui un peu de temps, jusqu'à 10 minutes après qu'un événement s'est produit dans le jeu - en raison des temps de boucle et de cache de l'API (surtout la première fois qu'un clan a été créé)
* Vérifiez les autorisations de votre chaîne /bot, surtout si vous n'avez pas donné l'administrateur de ClashKing. _Si vous n'avez pas accordé les privilèges d'administrateur du bot, nous ne fournissons pas d'assistance pour corriger vos autorisations._

</details>

<details>

<summary>Les statistiques de la légende sont fausses ?</summary>

Eh bien, cela dépend – Cela aide à mieux comprendre le fonctionnement de ce bot. Comme mentionné ci-dessus, il peut y avoir des erreurs car l’API ne donne pas directement les statistiques des légendes. \
\
Ce bot fonctionne en vérifiant sans arrêt les trophées des joueurs. Si les trophées montent, c’est une attaque. S’ils tombent, c’est une défense. Cela semble bien, sauf que l'API ne se met pas à jour _immédiatement_ - cela peut prendre jusqu'à 5 minutes. Au cours de ces quelques minutes, les trophées (la manière dont nous vérifions hits/defenses) pourraient changer de plusieurs manières, ce qui pourrait faire trébucher le bot. \
\
1\. Deux attaques dans un court laps de temps – dans ce cas, vous verrez des statistiques telles que +68. Cela fait 2 résultats, et c’est précis à 100 % à toutes fins utiles. \
2\. Deux défenses se produisent en même temps, comme ci-dessus mais quelque chose comme -68. \
3\. Là où nous pouvons avoir une certaine imprécision, une défense et une attaque se produisent en même temps. Vous pouvez obtenir quelque chose comme +4 si une attaque de +30 et une défense de -26 se produisent en même temps. \
\
Toujours - le gain net/loss pour la journée sera précis.

</details>

<details>

<summary>Le robot peut-il indiquer où Capital Gold a été donné ?</summary>

Non, l'API ne fournit pas ces informations pour que ClashKing puisse les partager

</details>

