---
description: Parse army and base links into readable embeds.
---

# 🔗 Link parsing

## Army links

### The goal

Sometimes you would like to share an army with your clanmates, and you maybe even have a specific channel to store them. But reading a link does not provide any info on what's the content of it. We provide a way to show more info on this content!

:::info
You can also turn on [Link parsing](../server-setups/link-parse.md) so messages containing an army link are automatically replaced by the embed (without nicknames and clan castle).
:::

### The commands

`/army links`

### The parameters

#### Required

- `link`: the army link you want to parse

#### Optional

- `nickname`: how would you name your army?
- `clan_castle`: what should people put in their clan castle?

## Base links

### The goal

Sometimes you would like to share a base with your clanmates, and you maybe even have a specific channel to store them. But reading a link does not provide any info on what's the content of it. We provide a way to show more info on this content!

People can then download the base and give feedback. Keep track of how many people downloaded your base!

:::info
You can also turn on [Link parsing](../server-setups/link-parse.md) so messages containing a base link are automatically replaced by the embed.
:::

### The commands

`/base`

### The parameters

#### Required

- `base_link`: the base link you want to parse
- `description`: give some details on this base, like which TH it is for or why you share it
- `picture`: add a picture of the base to show how it looks

## Link parsing

For automatic parsing of links in messages, see [Link parsing](../server-setups/link-parse.md).
