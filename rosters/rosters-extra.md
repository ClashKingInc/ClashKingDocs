# 😍 Rosters Extra

These are just a few uses of rosters that don't fit else where.

<details>

<summary>Roster Roles</summary>

Roster roles are a great utility and do exactly as you expect, give a role to all people in a roster. You can asign a role to a roster by doing `/roster role {roster} {role}`. Note the role must be created before hand\
\
If the roles haven't updated then you can force update them using `/roster role-refresh {roster}`



</details>

<details>

<summary>Exporting/Importing</summary>

Do not fear, you do not have to remake rosters settings for every roster. The command `/roster copy` is your friend with the two optional flags::

* `{export_roster}` gives an import code that can be inputted into the `{import_code}` flag in order to copy over the roster settings
* `{import_code}` gives a field to enter an import code retrieved from `{export_roster}`

</details>

<details>

<summary>Player search</summary>

You are able to search for a list of rosters that a discord user or specific account is on by doing `/roster search` followed by:

* `{user}` displays all of a discord users rosters they are currently in\
  ![](<../.gitbook/assets/Screenshot 2023-09-09 at 22.27.13.png>)
* `{player}` displays a single accounts rosters they are currently in\
  ![](<../.gitbook/assets/Screenshot 2023-09-09 at 22.31.01.png>)

</details>

<details>

<summary>Set a timer</summary>

With `/roster time {roster} {timezone} {remove}`, you can set a deadline to the roster. You can use it with `/reminders create` (see [reminders.md](../server-setups/reminders.md "mention")).

</details>
