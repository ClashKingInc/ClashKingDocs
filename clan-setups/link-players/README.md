# 🔗 Link Players

The goal

To run correctly, the bot needs to know which discord users own each CoC account of your clan. This will for example allow it to give the member access to specific channel or ping them automatically with [reminders.md](../../server-setups/reminders.md "mention")you set.

## The command

For this, you need to run the `/link` command

{% hint style="info" %}
If you link someone by mistake, you can use the [unlink-players.md](unlink-players.md "mention") command.
{% endhint %}

## The parameters

### Required

`player` : This corresponds to the tag of the player you want to linked. You can find this tag in their profile in game. It should look like that : #PVJ98GL.



### Optional

`user`: This is the discord user you want to link the CoC account with. If you run the command for yourself, you do not need to use this option. It is useful only if you want to link an account to someone else.

`api_token` : This is to prove that the account is yours. You can find this in the parameters of Clash Of Clans.&#x20;

{% hint style="warning" %}
The API token is required only if set by the clan staff (see [setup-a-server.md](../../server-setups/setup-a-server.md "mention")), or if the account is already linked to someone else.
{% endhint %}

`greet`: This is to send a greeting message to the user once linked.

<figure><img src="../../.gitbook/assets/image (129).png" alt=""><figcaption></figcaption></figure>
