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

# Basic Refresh (Clan Roles)

There is one main command to manually refresh roles -> `/refresh` with two main options for a basic experience:

* **role\_or\_user-** allows you to choose a role or user in the server to perform an eval on (a refresh on a role works by primarily by looking at the members in that role and performing a refresh on those members)
* **test-** yes or no option, default is no, but yes allows you to see what the bot will do without it actually doing it

{% hint style="info" %}
Clan Member Roles that are set up, when refreshed, will also add the members in the clan to the list of members being refreshed in addition to the members in the role
{% endhint %}

### But what does it do?

As mentioned, role management. Whenever you add a clan, you have to add \*_at minimum_\* a member role. So in that case when you run eval, those who are in the clan & on discord will receive that member role (provided their clash account is linked to their discord). \
\
\- member role: given to every member in the clan\
\- leadership role: give to coleaders & leader of the clan\


{% hint style="warning" %}
What about elder? Unfortunately I have no plans to support an elder role on a clan level at the moment, it provides little benefit as a discord role.
{% endhint %}

{% hint style="info" %}
* Member & Leadership Roles can be changed via the `/setup clan` command
* Leadership roles are refreshed by default, want them to not? Changeable via `/setup server [leadership_refresh]`
{% endhint %}
