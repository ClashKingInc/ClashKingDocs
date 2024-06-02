# 😠 Strikes

Strikes is a way of keeping track of warnings given to members. These can be given roll over periods just like bans however behave slightly differently which will be explained.

To add a strike use `/strike add {tag} {reason}`. The tag supports "smart search" so a username will work just like bans. The two optional fields are `{rollover_days}` and `{strike_weight}`.&#x20;

Strike\_weight has a default value of 1 but can be set to any value depending the the seriousness of the warning.&#x20;

Rollover\_days is the time that the strike is "active" for. Strikes that reach the rollover period wont delete but deactivate when viewing the players total strikes.

### Viewing strikes

There are lots of customisable ways to view strikes but all start with the base command `/strike list` .

`{view}` has 2 options, player and strike. Player will show a list of accounts with strikes and then a list of the strikes they have. Where as strike will show a detailed list of strikes individually. Images bellow display difference.

<div align="center">

<figure><img src="../.gitbook/assets/Screenshot 2023-09-05 at 17.07.59 (1).png" alt="" width="235"><figcaption><p>Player view</p></figcaption></figure>

 

<figure><img src="../.gitbook/assets/Screenshot 2023-09-05 at 17.08.41.png" alt="" width="235"><figcaption><p>Strike view</p></figcaption></figure>

</div>

There are then 3 optional flags for filtering the strike list:

* `{clan}` - Will show for a specific clan
* `{player}` - Will show only that player can be combined with `{clan}`
* `{strike_amount}` - Choose a number of minimum strikes to show

Strikes can be removed with `/strike remove {strike ID}`. This is not a user but the combination of letters/numbers for each strike.

