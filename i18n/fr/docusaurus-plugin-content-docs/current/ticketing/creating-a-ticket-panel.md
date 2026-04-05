# 🔨 Création d'un panneau Ticket

Pour commencer, qu’est-ce qu’un panneau ? Un panneau de tickets est une intégration qui contient des détails ainsi que des boutons permettant d'ouvrir les tickets. Ci-dessous un exemple.

<figure><img src="/img/docs-media/image (109).png" alt="" width="313" /><figcaption><p>An Example ticket panel</p></figcaption></figure>

Un panneau se compose donc de 2 parties : intégrations et boutons. Dans cette section, nous allons créer la ou les intégrations.

Alors, trouvez un canal dans lequel vous pouvez exécuter des commandes ClashKing et ouvrez `{/ticket panel-create}`. Il y a 2 options :

* `{panel_name}` : il s'agit d'un nom unique pour identifier votre panneau ultérieurement
* `{embed}` : il s'agit d'une intégration stockée dans le bot&#x20;
:::warning
Pour le champ d'intégration, si vous n'en avez pas créé, vous devrez vous rendre sur [Embeds](../utility/embeds.md), vous y trouverez un guide sur la façon de créer une intégration que vous pouvez utiliser et modifier.
:::

Une fois que vous avez effectué une intégration, vous pouvez remplir les deux champs et vous aurez votre tout premier panneau de ticket : votre intégration plus un bouton par défaut "Ouvrir le ticket".
:::tip
Vous pouvez maintenant exécuter `/ticket panel-post` et voir votre nouveau panneau !
:::

La section suivante couvre l'ajout de boutons et d'actions