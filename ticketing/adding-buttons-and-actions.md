---
description: Adding more functionality to your tickets!
---

# ✅ Adding Buttons & Actions

If you are in this section, you should have at minimum - 1 embed created (`/embed create`) and 1 ticket panel created (`/ticket panel-create`). \
\
Assuming you do, you can now add some more functionality to your tickets. This guide will be broken down into 3 main pieces:

* adding & editing buttons
* account applications
* questions

## Adding & Editing Buttons

For this, use `/ticket button-add,` which has 4 options:

* `{panel_name}`: the panel you want to add the button to
* `{button_text}`: the text you want on the button
* `{button_color}`: what color you want the button (only blue, green, grey, or red)
* `{button_emoji}`: an emoji for the button (you can use custom emojis as long as they are on the server)

Once ran, you will have a brand new button for your panel.&#x20;

{% hint style="info" %}
You will need to rerun `/ticket panel-post` when new buttons are added
{% endhint %}

Editing buttons works very similarly, `/ticket button-edit`, same options, except it will ask for which button on the panel to edit.

And lastly, you can delete a button with `/ticket button-remove`

## Clash Account Applications

Now we are getting into the stuff this ticketing can do that others can't. By now you can edit & create embeds, edit & create panels, and even add & edit buttons, but it is still a pertty basic ticketing system. Let's change that!

Run /ticket apply. Here you will be presented with 4 options:

* &#x20;\# of accounts allowed to apply (how many accounts can people apply with in a ticket)
* Minimum Townhall Allowed
* On/Off (this turns the entire setting on/off, if green (on), will ask people to apply with an account)
*   Send Player Info (if green (on), will send a breakdown of the player's info when the ticket opens)\


    <figure><img src="../.gitbook/assets/image (1) (1) (1) (1).png" alt=""><figcaption><p>/ticket apply</p></figcaption></figure>

{% hint style="warning" %}
One caveat to the entire ticket apply process is that it does require people's accounts to be linked to them. The bot does inform users of this if they end up trying to apply with no accounts, but it is on the server's side to set up a robust linking system using things like link buttons or the such. Not as a big a deal these days however, as a surprising amount of people are discord linked :smile:&#x20;
{% endhint %}

We can go further though, /ticket apply-rules allows us to filter out applicants on more than just townhall level. You can filter out by individual hero levels or war stars. This command explains how it works pretty well when ran, but here is what it looks like. Copy past the requirements, keeping the same format, edit them, just upload back (the one given is just a sample and not actually the default everyone is set to)

<figure><img src="../.gitbook/assets/image (2) (1) (1) (1).png" alt="" width="479"><figcaption></figcaption></figure>

## Questions

You may have more questions for an applicant than just what is their clash account. And this is where modal questions comes in. Using /ticket settings & picking the relevant panel & button, with the choice "Questions", run the command. A modal will open & you can set what questions you would like the bot to ask when they apply.&#x20;
