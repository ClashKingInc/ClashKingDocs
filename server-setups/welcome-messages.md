# Welcome Messages

## Welcome Link

One of the main pains of managing a clash discord server, is linking people. Linking comes with many benefits like seeing who in-game is who on discord or role management, but there is often cumbersome commands or confused people. That is where `/setup welcome-link set` comes in.\
On every new join to your server, it will send this message (customizable) & button pictured ->&#x20;

![](<../.gitbook/assets/image (1) (1).png>)\
No more commands, no more doing it manually, & no more needing to type out instructions. They press the button & it opens a form asking for their tag & api token (optionally, this can be turned off with the `api_token` field in the command)\
\
On the reverse to remove, it's simple - `/welcome-link remove.` And if you want a one time version of this - [Button](../utility/buttons.md) has you covered!

{% hint style="info" %}
If you want a custom embed just set the `custom_embed` field to True. Additionally if you have created an embed elsewhere (like on another bot), you can "import" it with `embed_link` (a message link to the embed in question)&#x20;
{% endhint %}

