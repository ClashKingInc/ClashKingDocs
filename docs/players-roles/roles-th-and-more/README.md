# ⏫ Roles & Nicknames

ClashKing can keep Discord roles in sync with members’ visible linked Clash of Clans accounts. Configure most role types under **Roles & Nicknames** in the dashboard. [Link players](../../clan-setups/link-players/) and [add your clans](../../use-the-dashboard/add-a-clan.md) first.

:::info
Create the Discord roles first. ClashKing needs **Manage Roles**, and its bot role must be above the roles it manages in the Discord role list.
:::

## Automatic evaluation

Open the dashboard, select your server, and choose **Roles & Nicknames**. Under **Auto-Evaluation Settings**, enable automatic evaluation to update roles when player data changes. You can also enable nickname updates, set a clan-leave delay, and allow eligible accounts outside the family to earn player roles.

Only visible linked accounts count; roles earned by multiple visible accounts are combined. A manual [role refresh](../manual-refresh-roles-and-nicknames.md) can also be used.

## Family and leadership roles

Under **Family & Leadership**, add Discord roles to these groups:

- **Family**: members with an account in a family clan.
- **Non-Family**: members without an account in a family clan.
- **Elder**, **Co-Leader**, and **Leader**: members with that rank in a family clan.

For example, add a Family role to give family members access to a shared Discord channel. Use the controls next to a configured role to change its add/remove mode or remove the rule.

## Player and category roles

Under **Player Roles**, click **Add Role Type**, choose a type, its criterion, and an existing Discord role, then click **Add Role**. Configured rules appear below and can be removed there.

- **Town Hall** and **Builder Hall**: assign roles for a selected level, such as TH16 or BH10.
- **League** and **Builder League**: assign roles for a selected league.
- **Clan Category**: assign a role to members of clans in a selected category. Set the clan's category under **Clans** first; see [Add / Setup a clan](../../use-the-dashboard/add-a-clan.md).

## Roles for one clan

Under **Management → Clans → Configure**, choose a **Member Role** for that clan's members and a **Leader Role** for its leader and co-leaders. These are separate from family-wide roles. See [Add / Setup a clan](../../use-the-dashboard/add-a-clan.md).

## Discord tenure roles

Tenure roles are an experimental feature based on how long a member has been in the Discord server. Enable **Discord Tenure Roles** in **Lab**, then open **General settings → Discord Tenure Roles**. Click **Add Tenure Role**, enter the number of months, and choose a Discord role. For example, assign a role after six months. The highest qualifying tenure role is used. Disabling the experiment keeps saved rules and already assigned roles.

## Nicknames

The **Nicknames** section of **Roles & Nicknames** lets you configure nickname formats for family and non-family members. Automatic nickname updates have their own switch under **Auto-Evaluation Settings**.
