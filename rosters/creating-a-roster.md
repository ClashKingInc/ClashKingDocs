# Creating a roster

Roster a super useful tool to use for tournament events, regular wars and CWL. They can feel a bit overwhelming but take your time and it will be worth it.

To begin simply use `/roster create {clan} {roster_alias}`

* `{clan}` will choose what clan the roster is linked to (effects commands later)
* `{roster_alias}` will pick the display name when viewing the roster such as 'Clan1 CWL'
* The optional flag `{add_members_to_roster}` will simply add all clan members automatically

<details>

<summary>Adding players to roster</summary>

1. The first way is by using `/roster add-player {roster} {player}.`\
   This is an easy way to add a single person onto a roster. The optional flag `{sub}` will just display them as a sub upon viewing.
2. The second way is by using a nifty command called `/roster signup {roster}`.\
   This allows members to simply press a button to sign themselves onto the roster, and remove themselves. This also gives a couple buttons to edit the rosters as an admin which can be done with commands also. (bellow shows how this looks on discord)

![](<../.gitbook/assets/Screenshot 2023-09-09 at 19.30.54.png>)![](<../.gitbook/assets/Screenshot 2023-09-09 at 19.31.15.png>)

</details>

<details>

<summary>Basic roster upkeep</summary>

#### All use the `{roster}` flag for the name

* `/roster post` displays the roster in an embed
* `/roster clear` removes all members that have been added useful for reusing roster setups
* `/roster refresh` refresh data displayed in the roster
* `/roster remove` to remove a player (done via an interactive drop down menu)
* `/roster move` can move a player from one roster to another without having to use the remove and add (done via an interactive drop down menu)
* `/roster missing` will ping all players who aren't currently in the clan if they need to move to participate&#x20;

</details>
