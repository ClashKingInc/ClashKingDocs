---
description: Frequently Asked Questions
---

# ❓ FAQ



<details>

<summary>Why do some stats not show up accurately (or at all) in their commands?</summary>

The bot can only get this info if the clan is tracked, which can be done by linking it to a server with /addclan. This is because this info is not given by the API and it's not feasible or possible to track millions of clans arbitrarily (for more detailed things at least).

</details>

<details>

<summary>What does last online &#x26; activity check?</summary>

check for changes in the following to detect when a player was last online:

* name change
* attack win
* raid attack
* clan capital donation
* war attack
* cc donation
* war star gain
* war preference change
* obstacle removed
* builder base trophy change
* gold pass points earned
* clan games points earned
* gold, elixir, or DE looted

Each tracking period (approx 3 mins), that one of these is found, +1 is added to activity score

</details>

<details>

<summary>The bot's emoji's aren't working?</summary>

The server @everyone role has to have the “use external emojis” permission.

</details>

<details>

<summary>The bot isn’t sending anything for my feed or log?</summary>

* Use /setup list and confirm it is (still) set up
* Give it some time, up to 10 minutes after an event has happened in game - due to looping & api cache times (especially on the first time a clan has been set up)
* Check your channel/bot permissions, especially if you didn’t give the bot admin. If you didn't give it admin, I don't provide support to fix your permissions.

</details>

<details>

<summary>The legend stats are wrong?</summary>

Well it depends. One, it helps to understand how this bot works, as mentioned above, there can be errors because the api doesn’t directly give legends stats. This bot works by checking player's trophies non-stop. If the trophies go up, it’s an attack. If they go down, it’s a defense. Sounds good, except, the api doesn’t update immediately, it can take up to 5 minutes. In those few minutes, the trophies (how we’re checking hits/defenses) could change in a few ways that can trip up the bot. 1. 2 attacks in a short time frame, in this case you will see stats like +68, that’s just 2 hits, & it’s 100% accurate for all intents & purposes. 2. 2 defenses happen at same time, same as above but something like -68. And Lastly, 3, where we can get some inaccuracy, a defense & attack happen at same time, u may get something like +4 if a +30 attack & -26 defense happen at same time. Always, the net gain/loss for the day will be accurate.

</details>

<details>

<summary>Can the bot show where capital gold was donated?</summary>

No, the API does not give this information

</details>

