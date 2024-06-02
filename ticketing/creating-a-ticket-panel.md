# 🔨 Creating a Ticket panel

To start, what is a panel? A ticket panel is an embed that contains details along with buttons that open tickets. Below is an example.

<figure><img src="../.gitbook/assets/image (109).png" alt="" width="313"><figcaption><p>An Example ticket panel</p></figcaption></figure>

So a panel consists of 2 parts - embeds & buttons. In this section, we are going to create the embed(s).

So, find a channel you can run ClashKing commands in and open up `{/ticket panel-create}`. There is 2 options:

* `{panel_name}`: this is a unique name to identify your panel later
* `{embed}`: this is an embed stored in the bot&#x20;

{% hint style="warning" %}
For the embed field, if you have none created, you will need to go to [Embeds](../utility/embeds.md), there you can find a guide on how to create an embed you can use & edit.
{% endhint %}

Once you have an embed made, you can fill in both fields and you will have your very first ticket panel - your embed plus a default "Open Ticket" button.

{% hint style="success" %}
You can now run `/ticket panel-post` and see your new panel!
{% endhint %}

The next section covers Adding Buttons & Actions
