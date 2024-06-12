# 🔗 Link/Unlink Players

### Link Command

To run correctly, the bot needs to know which discord users own each CoC account of your clan. For this, you need to run the `/link` command

**Inside this slash command there are 4 fields:**

<details>

<summary>player</summary>

This corresponds to the tag of the player you want to linked. You can find this tag in their profile in game. It should look like that : #PVJ98GL.

![](<../.gitbook/assets/image (101).png>)

</details>

<details>

<summary>user</summary>

This is the discord user you want to link the CoC account with. If you run the command for yourself, you do not need to use this option. It is useful only if you want to link an account to someone else.

</details>

<details>

<summary>api_token</summary>

This is to prove that the account is yours. You can find this in the parameters of Clash Of Clans.&#x20;

![](<../.gitbook/assets/image (100).png>)

</details>

{% hint style="warning" %}
The API token is required only if set by the clan staff (see [setup-a-server.md](../server-setups/setup-a-server.md "mention")).
{% endhint %}

<details>

<summary>greet</summary>

This si to send a [welcome-messages.md](../server-setups/welcome-messages.md "mention")to the user once linked.

</details>

<figure><img src="../.gitbook/assets/image (2) (1).png" alt=""><figcaption><p>Example of how to use the link command for someone else. Do not really use @ClashKing it's just an example</p></figcaption></figure>

{% hint style="info" %}
Using the /link command might be not easy for everyone. I suggest you to use a panel with a link button so your server members can link themselves more easily. Please take a look at [buttons.md](../utility/buttons.md "mention")
{% endhint %}

## Unlink Command

To unlink a player, you just need to run the `/unlink` command with the player tag of the user you want to unlink.

<figure><img src="../.gitbook/assets/image (1) (1).png" alt=""><figcaption><p>Example of the use of /unlink command</p></figcaption></figure>



## Show linked player

Use `/discord-links {clan}` to display a list of members of a clan with their discord username.

<figure><img src="../.gitbook/assets/image (91).png" alt=""><figcaption><p>Shows which Coc player corrspond to which Discord user</p></figcaption></figure>

