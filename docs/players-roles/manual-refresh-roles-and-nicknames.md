---
slug: /bot-commands/manual-refresh-roles-and-nicknames
---

# 🔄 Manual Refresh (Roles & Nicknames)

Use `/refresh` in a Discord server to update roles and nicknames using the server's configured rules. This is useful after changing settings or when you want to refresh without waiting for automatic evaluation. See [Roles & Nicknames](roles-th-and-more/README.md) for setup.

## Refresh a member or role

Run `/refresh` without options to refresh yourself. The following options are available:

- **role_or_user**: choose a Discord member or role. When omitted, the command refreshes you.
- **test**: preview the proposed changes without applying them.
- **role_treatment**: choose **Both**, **Add only**, or **Remove only**. The default is **Both**; nickname changes are controlled separately.
- **advanced_mode**: open a menu to select which role categories and whether the nickname should be refreshed. Without it, the command evaluates all supported categories.

For example, select **Add only** when you want to add currently earned roles without removing configured roles the member no longer qualifies for. Use **test** first to review the proposed changes.

The bot shows progress and a result report, including changes it could not apply. Only configured roles are managed; unrelated Discord roles are left alone. Nicknames are updated only when nickname changes are configured and the nickname category is included.

## Permissions and account data

Members can refresh themselves. To refresh another member or a role, you need **Manage Server**, **Administrator**, server ownership, or the configured **Role refresh delegate** role. See [Dashboard access](../server-setups/whitelist.md) for the delegate setting.

:::info
ClashKing needs permission to manage roles and nicknames, and its bot role must be above the roles and members it needs to change. Only visible linked accounts are used; see [Link players](../bot-commands/link-players.md).
:::
