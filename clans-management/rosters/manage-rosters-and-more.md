# ⚒️ Manage rosters & more

Here is what you'll find on this page:

[#clear-or-delete-a-roster](manage-rosters-and-more.md#clear-or-delete-a-roster "mention")

[#list-the-rosters](manage-rosters-and-more.md#list-the-rosters "mention")

[#roster-refresh](manage-rosters-and-more.md#roster-refresh "mention")

[#roster-roles](manage-rosters-and-more.md#roster-roles "mention")

[#export-import-rosters](manage-rosters-and-more.md#export-import-rosters "mention")

[#player-search](manage-rosters-and-more.md#player-search "mention")



## Clear or delete a roster

### The command

&#x20;`/roster delete`&#x20;

### The parameters

* roster: name of the roster&#x20;
* type : Choose between Clear Members so you can reuse the roster or Delete roster to delete completely the roster

{% hint style="danger" %}
A roster that have been deleted can't be recover so be careful
{% endhint %}



## Roster refresh

### The command

`/roster refresh` refresh data displayed in the roster



## List the rosters

Show a list of every rosters active on the server.

<figure><img src="../../.gitbook/assets/image (111).png" alt=""><figcaption></figcaption></figure>

### The command

Use `/roster list`



## Roster roles

Roster roles are a great utility and do exactly as you expect, give a role to all people in a roster. You can asign a role to a roster by doing `/roster role {roster} {role}`. Note the role must be created before hand\


{% hint style="info" %}
If the roles haven't updated then you can force update them using `/roster role-refresh`
{% endhint %}

### The command

Use `/roster role`

### The parameters

#### Required

* `roster`: name of the roster
* `role`: role you want to set to the players in the roster

#### Optional

* `group`: only set the role to the players in a specific role
* `remove_role`: If you want to remove the role instead of adding it



## Export/Import rosters

Do not fear, you do not have to remake rosters settings for every roster.&#x20;

### The command

`/roster copy`

### The parameters

The command  is your friend with the two optional flags::

* `export_roster` : Gives an import code that can be inputted into the `{import_code}` flag in order to copy over the roster settings
* `import_code` : gives a field to enter an import code retrieved from `{export_roster}`



## Player search

You are able to search for a list of rosters that a discord user or specific account.

### The command

Use `/roster search`&#x20;

### The parameters

* `user` : Discord username. Displays all the rosters the user is currently in.

<figure><img src="../../.gitbook/assets/Screenshot 2023-09-09 at 22.27.13.png" alt="" width="365"><figcaption></figcaption></figure>

* `player`:Player tag or name. Displays all the rosters the player is currently in.

<figure><img src="../../.gitbook/assets/Screenshot 2023-09-09 at 22.31.01.png" alt=""><figcaption></figcaption></figure>

