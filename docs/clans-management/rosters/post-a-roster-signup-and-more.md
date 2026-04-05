# 📝 Post a roster (signup & more)

## The goal

This is the most interesting part of the roster feature! Once you created a roster and set it up (see [create-a-roster.md](create-a-roster.md "mention") & [set-up-a-roster.md](set-up-a-roster.md "mention")), you can display a pannel where the players can sign in the roster by themselves, or post static pannel to display the final roster.

## The command

To create this pannel, use the `/roster post` command.&#x20;

Once you did, the pannel will be automatically sent to the channel you run the command (the command you used won't be displayed).

## The parameters

* `roster`: name of the roster you want to post (if no roster is available, see [create-a-roster.md](create-a-roster.md "mention"))
* `type`: you can choose between Static, Post and Signup. See below the use case for each type.

## Roster post type

### Signup

This will show a pannel with buttons allowing your clan mate to register their accounts. The informations you set in [setup-a-server.md](../../server-setups/setup-a-server.md "mention")will also be displayed.

<figure><img src="../../.gitbook/assets/image (34).png" alt=""><figcaption></figcaption></figure>

You can then tell your clan mate to sign up. You can share the [signing-up-on-a-roster.md](signing-up-on-a-roster.md "mention")page that will explain to them how to interact with the pannel.

### Post

This will show a pannel with no buttons to join or leave the roster. You can use that to show the roster :&#x20;

* Once sign up are over,&#x20;
* While the staff is creating it without using the sign up (see [manage-players.md](manage-players.md "mention")),
* While moving players between clan or remove unselected players after you closed the sign up (see [manage-players.md](manage-players.md "mention"))&#x20;

The embed can be refreshed using the 🔄 button.

<figure><img src="../../.gitbook/assets/image (35).png" alt=""><figcaption></figcaption></figure>

### Static

This will show the state of the roster at the moment you sent the command. The embed shown can't be refreshed. It can be useful if you want to keep track of the roster registering, or if you want to keep the roster members list before emptying it to reuse it.

<figure><img src="../../.gitbook/assets/image (36).png" alt=""><figcaption></figcaption></figure>

