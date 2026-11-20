---
description: Configurez les logs depuis le tableau de bord.
---

# 📄 Configurer les logs

Les logs publient l'activité des clans, des joueurs et du serveur dans Discord. Le tableau de bord permet de choisir les activités à suivre et leur destination.

## Configurer un log

1. Ouvrez le tableau de bord ClashKing, sélectionnez votre serveur Discord et ouvrez **Logs**.
2. Dans **Server or clan**, sélectionnez un clan pour ses logs de clan, guerre, capitale et joueurs, ou le serveur pour les logs communs. Ajoutez d'abord le clan s'il ne figure pas dans la liste.
3. Ouvrez l'onglet voulu et activez le log avec son interrupteur.
4. Choisissez un salon et éventuellement un fil. Un salon de forum nécessite une publication. Certains logs ont des options supplémentaires, comme un rôle et un filtre d'hôtel de ville pour le flux Reddit.
5. Cliquez sur **Save destination**. Répétez pour les autres logs et clans.

## Gérer les logs et résoudre les problèmes

Sélectionnez à nouveau le même serveur ou clan pour modifier la destination ou désactiver un log. La section **Issues** signale les logs actifs dont le salon, le fil ou la publication de forum est indisponible ; **Review** permet de retrouver le log concerné. Si une publication est archivée, rouvrez-la dans Discord et actualisez le tableau de bord avant de la sélectionner. ClashKing doit pouvoir créer des webhooks et publier dans la destination choisie.

## Types de logs

:::info
Des exemples sont disponibles sur le [serveur de support](https://discord.gg/clashking).
:::

Les logs sont actualisés périodiquement ; l'activité peut ne pas apparaître immédiatement.

### Logs de clan

- **Member Join / Member Leave** : arrivées et départs des joueurs.
- **Member Donation** : dons de troupes et de sorts.
- **Clan Achievements, Clan Requirements et Clan Description** : réussites du clan et modifications des conditions ou de la description.
- **Ban Alerts** : alerte lorsqu'un joueur banni rejoint le clan.

### Logs de guerre/CWL

- **War Log** : attaques et résultats de guerre.
- **War Panel** : panneau mis à jour pendant la guerre.
- **CWL Lineup Change** : changements de composition CWL.

:::warning
Le journal de guerre du clan doit être public dans Clash of Clans pour que les données de guerre soient disponibles.
:::

### Logs de capitale

**Capital Donations**, **Capital Attacks**, **Capital Panel** et **Capital Weekly Summary** suivent les dons, attaques et résultats du week-end de raids.

### Logs de joueurs

**Role Change**, **Troop Upgrade**, **Super Troop Boosts**, **Town Hall Upgrade**, **League Change**, **Spell Upgrade**, **Hero Upgrade**, **Hero Equipment Upgrade**, **Name Change**, **Legend Attacks** et **Legend Defenses** suivent les changements et l'activité des joueurs.

### Logs du serveur

Sélectionnez votre serveur dans **Server or clan** pour **Clash of Clans maintenance**, le [Reddit Recruitment Feed](../server-setups/reddit-recruit-feed.md) et le **Reddit User Feed**. Ce dernier suit les publications de deux utilisateurs Reddit au maximum, avec éventuellement leurs commentaires.
