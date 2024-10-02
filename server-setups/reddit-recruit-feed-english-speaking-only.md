---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# 🤝 Reddit Recruit Feed (English speaking only)

## The goal

Reddit is one of the main 2-3 external recruiting sources for Clash of Clans. For anyone unfamiliar, there is a subreddit - [r/clashofclansrecruit](https://www.reddit.com/r/ClashOfClansRecruit/) - where people post when they are looking for a clan. This feed will post and optionally ping a role when activated. This let's you get a leg up and be one of the first to message or comment on a user's post which can significantly boost your recruiting chances, all things considered.



## The command

To add this feed -> `/setup reddit-recruit-feed` & to remove - use the `remove` flag in the same command. Below is an example of a feed post.

{% hint style="info" %}
The Player Profile Button pops up when a "recruit" has shared their player tag, and the bot provides a quick way to view their account details
{% endhint %}

&#x20;![](<../.gitbook/assets/image (14) (1) (1).png>)



## The parameters

### Required

* `channel` : set the channel where you want the posts to be sent to

### Optional

* `role_to_ping`  : role you want to ping when there's a new post&#x20;
* `remove`  : to remove the feed.
