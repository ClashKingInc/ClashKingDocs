---
description: Frequently Asked Questions
---

# ❓ FAQ

<details>

<summary>How do I set up the bot?</summary>

You can set up the bot easily by following those steps : [quick-start.md](quick-start.md "mention")

</details>

<details>

<summary>Why do some stats not show up accurately (or at all) in their commands?</summary>

ClashKing can only get this info if the clan is tracked, which can be done by linking a clan to a  server with `/addclan`. This is because this info is not given by the API and it's not feasible or possible to track millions of clans arbitrarily (for more detailed things at least).

</details>

<details>

<summary>What does last online &#x26; activity check do?</summary>

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

Each tracking period (approx 3 mins) that one of these is found, +1 is added to activity score

</details>

<details>

<summary>The bot's emoji's aren't working?</summary>

The server _@/everyone_ role has to have the “use external emojis” permission.

</details>

<details>

<summary>The bot isn’t sending anything for my feed or log?</summary>

* Use `/setup list` and confirm it is (still) set up
* Give it some time, up to 10 minutes after an event has happened in game - due to looping and api cache times (especially on the first time a clan has been set up)
* Check your channel/bot permissions, especially if you did not give ClashKing admin. _If you did not give the bot admin privileges, we do not provide support to fix your permissions._

</details>

<details>

<summary>The legend stats are wrong?</summary>

Well it depends - It helps to understand deeper how this bot works. As mentioned above, there can be errors because the api doesn’t directly give legends stats. \
\
This bot works by checking player's trophies non-stop. If the trophies go up, it’s an attack. If they go down, it’s a defense. Sounds good, except, the api doesn’t update _immediately_ - it can take up to 5 minutes. In those few minutes, the trophies (how we’re checking hits/defenses) could change in a few ways that can trip up the bot. \
\
1\. Two attacks in a short time frame - in this case you will see stats like +68. That’s 2 hits, and it’s 100% accurate for all intents & purposes. \
2\. Two defenses happen at same time, same as above but something like -68. \
3\. Where we can get some inaccuracy, a defense & attack happen at same time. You may get something like +4, if a +30 attack and -26 defense happen at same time. \
\
Always- the net gain/loss for the day will be accurate.

</details>

<details>

<summary>Can the bot show where Capital Gold was donated?</summary>

No, the API does not provide this information for ClashKing to be able to share

</details>

