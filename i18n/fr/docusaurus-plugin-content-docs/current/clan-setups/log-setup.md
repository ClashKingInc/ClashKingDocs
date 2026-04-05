# 📄 Configuration du journal

## Le but

Sachez exactement ce qui se passe dans votre clan en temps réel. Vous pouvez configurer différents types de journaux :&#x20;

[#clan-logs](log-setup.md#clan-logs "mention")

[#war-cwl-logs](log-setup.md#war-cwl-logs "mention")

[#capital-logs](log-setup.md#capital-logs "mention")

[#players-logs](log-setup.md#players-logs "mention")
:::info
Si vous êtes curieux de savoir à quoi ressemblent ces logs, ils sont tous en démo dans le [support server.](https://discord.gg/clashking). Vous pouvez également cliquer sur le nom du type de log pour être redirigé vers un exemple.
:::

## Les commandes

Vous devez utiliser la commande `/setup logs`.

<figure><img src="/img/docs-media/image (38).png" alt="" width="526" /><figcaption><p>Output of the command</p></figcaption></figure>

## Les paramètres

### Requis

`clan:` Le clan pour lequel vous souhaitez configurer les journaux.

`mode` : Ajoutez/Edit selon si vous souhaitez créer un nouveau journal ou supprimer un journal que vous avez précédemment configuré.

### Facultatif

`/channel:` Le canal auquel vous souhaitez que les journaux soient envoyés. Si vous souhaitez configurer des journaux sur un canal différent, vous pouvez exécuter la commande plusieurs fois. Si vous ne définissez pas de canal, les journaux seront envoyés dans le canal dans lequel la commande a été exécutée.

## Type de journaux

Dans cette section, nous expliquerons les différents types de journaux, avec des liens vers un exemple.
:::warning
Les journaux sont mis à jour environ toutes les 5 à 10 minutes. Cette valeur peut diminuer à l’avenir mais n’est jamais significativement plus élevée.
:::

### Journaux du clan {#clan-logs}

<figure><img src="/img/docs-media/image (37).png" alt="" /><figcaption></figcaption></figure>

* [**Member Join**](https://discord.com/channels/923764211845312533/1128182552121839648)** :** Envoyez un message lorsqu'un membre rejoint votre clan.
* [**Member Leave**](https://discord.com/channels/923764211845312533/1128182846218055722)** :** Envoyez un message lorsqu'un membre quitte votre clan. Une caractéristique unique de ce journal Join/Leave est qu'il indique _où_ le joueur va après son départ. Utile si vous avez besoin de voir si un membre a déménagé dans un autre clan familial ou peut-être chez un rival ?!&#x20;
* [**Member donation**](https://discord.com/channels/923764211845312533/1128185494497398834)** :** Envoyez un message à chaque fois que quelqu'un reçoit des troupes /give.
* **Réalisations du clan :** Envoyez un message lorsque le clan progresse.
* **Exigences du clan :** Envoyez un message lorsque les paramètres du clan ont été modifiés.
* **Desciption du clan** : envoyer un message lorsque la description du clan a été modifiée
:::info
Si vous souhaitez ajouter des boutons ban/strike/profile aux joueurs rejoignant les journaux /leaving, voir [setup-a-clan.md](setup-a-clan.md "mention").
:::

### Journaux War/CWL {#war-cwl-logs}

<figure><img src="/img/docs-media/image (39).png" alt="" /><figcaption></figcaption></figure>

* [**War Log**](https://discord.com/channels/923764211845312533/1128186867825774672)** :** Un journal continu des changements de guerre publiés dans une chaîne : attaques, défenses, début, fin de guerre, etc.
* [**War Panel**](https://discord.com/channels/923764211845312533/1128884598609285121)** :** Envoyez un panneau intégré lorsqu'une nouvelle guerre commence et mettez-le à jour en temps réel.
* **Changement de gamme CWL**

La définition du journal de guerre et du panneau de guerre entraînera des images doubles du résultat de la guerre. &#x20;
:::warning
Si vous configurez le journal pendant une guerre, les journaux ne seront envoyés qu'à la prochaine guerre. Votre journal de guerre doit également être "public".
:::

### Journaux du capital {#capital-logs}

<figure><img src="/img/docs-media/image (40).png" alt="" /><figcaption></figcaption></figure>

* [**Capital Donations**](https://discord.com/channels/923764211845312533/1128186033918459905/1283537311958827122)** :** Envoyez un message chaque fois qu'un joueur fait un don d'or capital avec le montant donné.
* [**Capital Attacks**](https://discord.com/channels/923764211845312533/1128186033918459905/1282595848181514302)** :** Envoyez un message à chaque fois qu'un joueur attaque avec la quantité d'or capital reçu.
* [**Capital Panel**](https://discord.com/channels/923764211845312533/1129404852385087498)** :** Panneau de mise à jour automatique des informations du week-end de raid
* **Résumé hebdomadaire de la capitale :** Envoyez le résultat des raids à la fin du week-end tel qu'affiché dans le jeu.

### Journaux des joueurs {#players-logs}

<figure><img src="/img/docs-media/image (41).png" alt="" /><figcaption></figcaption></figure>

* [**Role Change**](https://discord.com/channels/923764211845312533/1128185014773874770/1283202622450565171)** :** Envoyer un message à chaque fois que le joueur change de rôle (indiquer l'ancien rôle et le nouveau)
* [**Troop Upgrade**](https://discord.com/channels/923764211845312533/1128185014773874770/1283787642386911333)** :** Envoie un message à chaque fois que le joueur améliore une troupe (lequel et le nouveau niveau)
* [**Super Troop Boosts**](https://discord.com/channels/923764211845312533/1128185014773874770/1283545307875115010)** :** Envoie un message à chaque fois que le joueur renforce une troupe (laquelle)
* [**TrownHall Upgrade**](https://discord.com/channels/923764211845312533/1128185014773874770/1283708036535291914)** :** Envoyez un message à chaque fois que le joueur améliore sa mairie (avec un nouveau niveau)
* [**League Change**](https://discord.com/channels/923764211845312533/1128185014773874770/1283508937324236954)** :** Envoyer un message à chaque fois que le joueur change de ligue (indiquer l'ancienne ligue et la nouvelle)
* Mise à niveau des sorts
* Mise à niveau du héros
* Mise à niveau de l'équipement du héros
* Changement de nom
* Attaques de légende
* Défenses de légende
