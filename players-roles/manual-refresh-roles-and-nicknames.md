---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# 🔄 Manual Refresh (Roles & Nicknames)

## The goal

You can manually refresh the roles ([roles-th-and-more](roles-th-and-more/ "mention") & [setup-a-clan.md](../clan-setups/setup-a-clan.md "mention")) and nicknames ( [setup-a-server.md](../server-setups/setup-a-server.md "mention")) of a user if the [auto-refresh.md](auto-refresh.md "mention")is turned off, or if you did some modification on a user settings, and nothing triggered the auto refresh yet.&#x20;

{% hint style="info" %}
* Leadership roles are refreshed by default, want them to not? Changeable via `/setup server [leadership_refresh]`
{% endhint %}

## The command

There is one main command to manually refresh roles -> `/refresh` with two main options for a basic experience:

## The parameters

### Optional

* `role_or_user`: choose the role or user you want to refresh roles and/or nickname.
* `test`:  or no option, default is no, but yes allows you to see what the bot will do without it actually doing it.
* `advanced_mode`: choose what role to evaluate. This will only add/remove the roles you selected.
* `role_treatment`: indicate if you want to add and/or remove roles to the user depending (for example if a player left one of your clan to join another clan from your family, you can give them new roles without removing the one from the irformer clan).
