# ↔️ Manage players

If you want to modify the content of a roster without using a [signup.md](signup.md "mention"), then you can use commands to move players.

<details>

<summary>Add a player</summary>

`/roster add-player {roster} {player}`

This is an easy way to add a single person onto a roster. The optional flag `{sub}` will just display them as a sub upon viewing.

</details>

<details>

<summary>Move or remove a player</summary>

`/roster move-player {roster}`

Allows you to move a player between two roster or to remove them.

![](<../.gitbook/assets/image (9).png>)

</details>

<details>

<summary>Ping missing members</summary>

`/roster missing {roster} {message} {reverse}`

Show the list of members that are in a roster but are not currently in the clan.

![](<../.gitbook/assets/image (10).png>)

* `{message}` allows you to set a message that will be displayif you click on the "Ping Missing" button
* `{reverse}`, if set to true, will make a list of people who are in the clan but not in the roster.

</details>
