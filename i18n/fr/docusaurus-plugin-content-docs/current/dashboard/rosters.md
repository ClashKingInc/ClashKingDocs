---
slug: /dashboard/rosters
---

# 📋 Rosters

Les rosters permettent d'organiser les joueurs pour la CWL, les guerres et les événements. Créez-les et gérez-les sous **Management → Rosters** dans le tableau de bord. Les joueurs peuvent s'inscrire depuis une publication Discord.

Cet exemple montre une ancienne présentation ; les boutons et l'apparence actuels peuvent différer.

![Exemple de roster](</img/docs-media/image (32).png>)

## ⚔️ Créer un roster

1. Ouvrez le tableau de bord, sélectionnez votre serveur et choisissez **Rosters** sous **Management**.
2. Cliquez sur **Create Roster** et saisissez un nom, par exemple `Clan 1 CWL`.
3. Choisissez le type **Clan** ou **Family**. Pour un roster de clan, sélectionnez le clan.
4. Choisissez qui peut s'inscrire sous **Signup Scope** : **Clan Only**, **Family Only** ou **Anyone**. Ajoutez éventuellement une description.
5. Cliquez sur **Create Roster**, puis ouvrez le roster pour le configurer ou ajouter des joueurs.

Ajoutez d'abord le clan à votre serveur s'il ne figure pas dans la liste.

## ⚙️ Configurer un roster

Ouvrez un roster sous **Management → Rosters**, puis **Settings**. Cliquez sur **Save Settings** après vos modifications.

- **Identity & Configuration** : nom, description, type, clan, portée des inscriptions, début de l'événement, répétition et groupe.
- **Restrictions & Limits** : limites d'hôtel de ville, de roster, d'inscriptions et de comptes par utilisateur, et obligation de vérifier les comptes.
- **Signup categories** : catégories disponibles et catégorie par défaut. Pour un roster groupé, ces catégories se règlent dans les paramètres du groupe.
- **Signup questions** : questions auxquelles les joueurs répondent lors de l'inscription.
- **Appearance** : image et couleur de l'embed. Les commandes de colonnes permettent de choisir les informations affichées.

:::warning
Modifier les questions d'inscription efface les réponses existantes du roster ; les joueurs restent inscrits. Lisez la confirmation avant d'enregistrer.
:::

Une catégorie décrit l'inscription, par exemple **Available** ou **Only if needed**. Un groupe réunit plusieurs rosters, par exemple tous ceux de la CWL, et peut partager des paramètres et automatisations. Voir Gérer les rosters.

## 📝 Publier un roster

Ouvrez le roster dans le tableau de bord et cliquez sur **Post Roster**. Choisissez un salon Discord et un type de publication, puis cliquez à nouveau sur **Post Roster**.

- **Open Signups** : publie le roster avec des boutons d'inscription et de retrait.
- **View** : publie le roster sans boutons d'inscription.
- **Post Roster** : publie un instantané.

Vous pouvez aussi utiliser `/roster post` dans Discord et choisir un roster et **Signup**, **Post** ou **Static**. Le message est publié dans le salon actuel ; la gestion du serveur est nécessaire.

Ces images illustrent d'anciennes présentations ; les commandes actuelles peuvent différer.

<figure><img src="/img/docs-media/image (34).png" alt="Ancien exemple de roster avec inscriptions" /><figcaption>Exemple d'inscription</figcaption></figure>

<figure><img src="/img/docs-media/image (36).png" alt="Exemple d'instantané de roster" /><figcaption>Exemple d'instantané</figcaption></figure>

## 🙋‍♀️ S'inscrire à un roster

[Associez d'abord votre compte Clash of Clans](../bot-commands/link-and-unlink-players.md) à Discord. La portée des inscriptions et les règles de vérification, de niveau d'hôtel de ville et de capacité déterminent si votre compte est admissible.

### S'inscrire

1. Cliquez sur **Join** ou **Sign up** sur le message du roster dans Discord.
2. Sélectionnez votre ou vos comptes et répondez aux questions éventuelles. Si des questions sont configurées, inscrivez un compte à la fois.
3. Envoyez le formulaire et vérifiez la confirmation. Demandez de l'aide aux responsables si vous ne pouvez pas vous inscrire ou trouver votre compte.

### Retirer une inscription

Cliquez sur **Remove** ou **Remove signup**, sélectionnez le compte à retirer et confirmez. Demandez de l'aide aux responsables si nécessaire.

## ↔️ Gérer les joueurs

Ouvrez un roster sous **Management → Rosters** pour gérer ses **Members**.

- Cliquez sur **Add Members** pour sélectionner des membres disponibles, rechercher des membres du serveur ou saisir plusieurs tags de joueur.
- Utilisez les actions d'un joueur pour le retirer. Vous pouvez aussi organiser les joueurs par catégorie d'inscription.
- Utilisez **Refresh** pour actualiser les données.
- Pour comparer ou déplacer des joueurs, choisissez **Compare** sur la page des rosters, sélectionnez deux à quatre rosters et faites glisser les joueurs entre eux.

Par exemple, déplacez un joueur du roster principal CWL vers un second roster dans la vue de comparaison. Voir aussi Joueurs manquants.

## ❓ Joueurs manquants

Ouvrez un **roster de clan** et choisissez **Missing Members**. Le tableau de bord compare les membres du clan aux inscriptions et affiche la couverture et les joueurs manquants. Sélectionnez les joueurs puis **Add Selected**, ou utilisez **Add All**.

Pour un roster groupé, la comparaison peut porter sur ce roster ou sur tout le groupe. Cette vue est disponible pour les rosters de clan.

Vous pouvez programmer un rappel depuis l'onglet **Automations** du roster ou utiliser les fonctions de rappel configurées dans le tableau de bord.

## ⚒️ Gérer les rosters

Retrouvez vos rosters sous **Management → Rosters**. Ouvrez-en un pour gérer ses membres, ses paramètres et ses automatisations.

### Copier, vider ou supprimer

**Clone** crée une copie, avec ou sans les membres. Dans le détail du roster, **Clear members** retire les membres sans supprimer le roster. La suppression d'un roster est définitive ; lisez la confirmation avant de continuer.

### Groupes et catégories d'inscription

Les **Groups** réunissent plusieurs rosters, par exemple des compositions CWL. Leurs règles peuvent définir les limites et les catégories disponibles pour tout le groupe. Les **Categories** décrivent l'inscription, par exemple **Available** ou **Tentative**, et sont partagées sur le serveur. La suppression d'un groupe laisse ses rosters sans groupe.

### Automatisations

Depuis **Automations → Create Automation** dans un roster, programmez des rappels, la publication du roster, l'ouverture ou la fermeture des inscriptions, la suppression des membres, l'archivage ou la suppression. Choisissez l'horaire et la destination si nécessaire. Les automatisations de groupe se gèrent dans les paramètres du groupe. Vérifiez bien l'action, notamment pour vider ou supprimer.

### Rechercher et comparer

Recherchez un roster par nom ou clan dans le tableau de bord. **Compare** permet de sélectionner deux à quatre rosters et d'y déplacer des joueurs. Dans Discord, `/roster search` trouve les rosters du serveur pour un joueur ou utilisateur Discord ; `/roster post` publie un roster existant.

## 🤖 Assistant de roster

Depuis **Management → Rosters**, ouvrez l'assistant de roster. Sélectionnez les rosters concernés ou utilisez la vue famille, puis décrivez votre besoin. Par exemple, demandez une comparaison des joueurs disponibles ou une proposition de composition. Vous pouvez enregistrer et partager des vues. Examinez les modifications proposées et appliquez-les explicitement ; l'assistant ne les applique pas sans votre approbation.

## 🏅 Bonus de CWL

Ouvrez **CWL Bonuses** depuis la page des rosters et choisissez un clan et une saison enregistrée. Le tableau de bord affiche la ligue, le classement, les guerres gagnées, les places de bonus et les attaques et étoiles des joueurs. Une fois le classement complet et les récompenses disponibles, sélectionnez le nombre requis de bénéficiaires et enregistrez la sélection. Cela enregistre votre choix dans ClashKing ; attribuez les bonus séparément dans Clash of Clans.

## 📝 Consulter les réponses d'inscription

Ouvrez un roster et sélectionnez **Answers** pour voir les réponses aux questions configurées. Utilisez le bouton de modification à côté d'un joueur pour modifier et enregistrer ses réponses. Les modifications administratives sont enregistrées. Ajoutez d'abord des questions sous **Settings** ; leur modification peut effacer les réponses existantes, comme indiqué ci-dessus.
