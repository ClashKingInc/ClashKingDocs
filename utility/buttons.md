# 🔘 Buttons

## The goal

This command provides a way to add one or more buttons under an embeds. It can also allows you to send a specific embed when people join one of your clan, so you don't have to do it yourself ! There is currently 5 buttons available and you can select up to 4 buttons.

{% hint style="info" %}
If you don't know what is an embed and how to create one with ClashKing, check [embeds.md](embeds.md "mention")
{% endhint %}

## The command

The command is `/buttons`

<figure><img src="../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Before running that command, you need to create an [embeds.md](embeds.md "mention")
{% endhint %}

## The parameters

### Required

No parameters is required.

### Optionnal

* **embed :** Choose the [embeds.md](embeds.md "mention") you want to add buttons to. If you don't select an embed, an embed will be created depending on what buttons you chose.

<figure><img src="../.gitbook/assets/image (1) (1).png" alt="" width="563"><figcaption><p>Embed by default for Link account buttons</p></figcaption></figure>

* **button\_color :** Choose between blue, green, grey and red. Default color is grey.
* **on\_welcome\_channel :** you can choose a channel on which the embed (with buttons or not) will be sent to every time someone join your Discord server. Only one embed can be set, so if you set a new one, it will replace the current one.&#x20;

<figure><img src="../.gitbook/assets/image (2) (1).png" alt="" width="563"><figcaption><p>Example of embeds sent every time a user join the discord server</p></figcaption></figure>

{% hint style="danger" %}
For now there is no way to de activate the welcom message. If you want to remove it, create a new channel, set a welcom message on it, and delete the channel.
{% endhint %}

## Buttons type

Once you sent the command, you will be able to choose up to 4 buttons between those 5.

<figure><img src="../.gitbook/assets/image (3) (1).png" alt=""><figcaption></figcaption></figure>

### Link Button

This button allows you to link a CoC account to your discord account (see [link-players](../clan-setups/link-players/ "mention"))

<figure><img src="../.gitbook/assets/image (83).png" alt="" width="416"><figcaption><p>Link account pop up</p></figcaption></figure>

### Link help button

This button displays a tutorial to show how to link a player and how to find the API token.

<figure><img src="../.gitbook/assets/image (84).png" alt="" width="322"><figcaption></figcaption></figure>

### Refresh roles

The title is pretty clear, it allows you to refresh your roles if the bot didn't gave you a new role (yet).&#x20;

### To-Do List

Shows what you have to do today on all your accounts. This includes Legends hits, Raids hits, Clan Games points, Season Pass points, Capital donations and Inactivity.

<figure><img src="../.gitbook/assets/image (86).png" alt=""><figcaption></figcaption></figure>

### Roster

Shows all the rosters your accounts are currently in.

<figure><img src="../.gitbook/assets/image (87).png" alt=""><figcaption></figcaption></figure>

## Once your done

Once you selected the buttons, if you didn't set `on_welcome_channel`, the embed will automatically be sent to the channel you run the command.

<figure><img src="../.gitbook/assets/image (4) (1).png" alt="" width="563"><figcaption></figcaption></figure>
