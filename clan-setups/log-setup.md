# 📄 Log Setup

## The goal

Know exactly what's happening in you clan in real time.You can set up different type of logs :&#x20;

[#clan-logs](log-setup.md#clan-logs "mention")

[#war-cwl-logs](log-setup.md#war-cwl-logs "mention")

[#capital-logs](log-setup.md#capital-logs "mention")

[#players-logs](log-setup.md#players-logs "mention")

{% hint style="info" %}
If you are curious what these logs look like, they are all on demo in the [support server.](https://discord.gg/clashking) You can also click on the name of the log type to be redirected to an example.
{% endhint %}

## The commands

You must use the `/setup logs` command.

<figure><img src="../.gitbook/assets/image (38).png" alt="" width="526"><figcaption><p>Output of the command</p></figcaption></figure>

## The parameters

### Required

`clan:` The clan you want to set up logs for.

`mode` : Add/Edit depending on if you want to set a new log or to remove a log that you previously set up.

### Optional

`/channel:` The channel you want the logs to be sent to. If you want to set up logs on different channel, you can run the command several time. If you don't set a channel, the logs will be send in the channel the command was run in.

## Logs type

On this section we will explain the different logs type, with links  to an example.

{% hint style="warning" %}
The logs update approximately every 5-10 minutes. This value may go down in the future but is never significantly higher.
{% endhint %}

### Clan logs

<figure><img src="../.gitbook/assets/image (37).png" alt=""><figcaption></figcaption></figure>

* [**Member Join**](https://discord.com/channels/923764211845312533/1128182552121839648)**:** Send a message when a member join your clan.
* [**Member Leave**](https://discord.com/channels/923764211845312533/1128182846218055722)**:**  Send a message when a member leave your clan. A unique feature of this Join/Leave log is that it shows _where_ the player goes after they leave. Helpful if you need to see if a member moved to another family clan or maybe went to a rival?!&#x20;
* [**Member donation**](https://discord.com/channels/923764211845312533/1128185494497398834)**:** Send a message every time someone receive/give troops
* **Clan achievements:** Send a message when the clan move up.
* **Clan Requirements:** Send a message when clan settings has been modified.

{% hint style="info" %}
If you want to add ban/strike/profile buttons to player joining/leaving logs, see [setup-a-clan.md](setup-a-clan.md "mention").
{% endhint %}

### War/CWL Logs

<figure><img src="../.gitbook/assets/image (39).png" alt=""><figcaption></figcaption></figure>

* [**War Log**](https://discord.com/channels/923764211845312533/1128186867825774672)**:** A continuous log of war changes posted in a channel - attacks, defenses, war start, end, etc.
* [**War Panel**](https://discord.com/channels/923764211845312533/1128884598609285121)**:** Send an embed pannel when a new war starts and update it in real time.
* **CWL Lineup Change**

{% hint style="warning" %}
If you set up the log during a war, the logs won't be send until the next war.
{% endhint %}

### Capital Logs

<figure><img src="../.gitbook/assets/image (40).png" alt=""><figcaption></figcaption></figure>

* [**Capital Donations**](https://discord.com/channels/923764211845312533/1128186033918459905/1283537311958827122)**:** Send a message each time a player donate capital gold with the amount donated.
* [**Capital Attacks**](https://discord.com/channels/923764211845312533/1128186033918459905/1282595848181514302)**:** Send a message each time a player attacks with the amount of capital gold received.
* [**Capital Panel**](https://discord.com/channels/923764211845312533/1129404852385087498)**:** Auto updating panel of raid weekend info
* **Capital Weekly Summary:** Send the result of the raids at the end of the weekend as displayed in the game.

### Players Logs

<figure><img src="../.gitbook/assets/image (41).png" alt=""><figcaption></figcaption></figure>

* [**Role Change**](https://discord.com/channels/923764211845312533/1128185014773874770/1283202622450565171)**:** Send a message every time the player change role (indicate former role and new one)
* [**Troop Upgrade**](https://discord.com/channels/923764211845312533/1128185014773874770/1283787642386911333)**:** Send a message every time the player upgrade a troop (which one and new level)
* [**Super Troop Boosts**](https://discord.com/channels/923764211845312533/1128185014773874770/1283545307875115010)**:** Send a message every time the player boost a troop (which one)
* [**TrownHall Upgrade**](https://discord.com/channels/923764211845312533/1128185014773874770/1283708036535291914)**:** Send a message every time the player upgrade their townHall (with new level)
* [**League Change**](https://discord.com/channels/923764211845312533/1128185014773874770/1283508937324236954)**:** Send a message every time the player change league (indicate former league and new one)
