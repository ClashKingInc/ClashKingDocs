---
description: Creating, Editing, Copying, Posting, & Deleting an Embed
---

# 🔢 Embeds

To put an embed onto the bot, there is 2 options. Option 1 is from scratch and Option 2 is if you have an embed already, but want the bot to use it (like if you have a ticket panel on another bot and want to use it on ClashKing)

## Creating: Option 1  (creating a new embed)

Head to [discohook](https://discohook.app) and you will see something like this:

<figure><img src="../.gitbook/assets/image (130).png" alt=""><figcaption><p>Default Discohook Page</p></figcaption></figure>

Create your embed with whatever options you would like: message content, embed colors, multiple embeds, etc. The right will show a preview as you edit.\
\
When done, click "Share Message", then "Copy Link" in the next popup

<figure><img src="../.gitbook/assets/image (2) (1) (1).png" alt=""><figcaption><p>Getting the url</p></figcaption></figure>

It is now saved to your clipboard. Now head back to discord.\
\
Now just run `/embed create`, choose a name to identify the embed later and for the `discordhook_url` field, paste in that link you copied. Now your embed is created!

## Creating: Option 2 (copying an existing embed)

Step 1 is to locate the embed you are copying on discord. Then, right click the embed and click Copy Message Link\


<figure><img src="../.gitbook/assets/image (24) (1) (1).png" alt=""><figcaption><p>Copying Message Link</p></figcaption></figure>

That will save the message link to your clipboard. Now head to a channel you can run ClashKing commands in and open up`/embed clone`, fill in the name field with a unique identifier so you can use it later and in the message\_link field paste in the link you copied earlier. Run the command & now you have cloned that embed!

## Editing an Embed

Use the command `/embed edit`. If you specify only the `name` field, then the bot will return a link that you can directly edit your embed from. When done editing, follow the steps in [Creating: Option 1](embeds.md#creating-option-1-creating-a-new-embed), and copy the data link to your clipboard. Then run `/embed edit` again with the new `discohook_url` and now your embed is updated with whatever changes you made.

## Using your embed

Multiple commands on the bot, like ticketing, use embeds you create here and those are pretty straightforward. If you want to just plainly post the new embed(s) you have made, use `/embed post`
