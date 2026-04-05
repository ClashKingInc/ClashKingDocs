---
description: Frequently Asked Questions
---
# ❓ Veelgestelde vragen

<details>

<summary>Hoe stel ik de bot in?</summary>

U kunt de bot eenvoudig instellen door deze stappen te volgen: [quick-start.md](quick-start.md "mention")

</details>

<details>

<summary>Waarom worden sommige statistieken niet nauwkeurig (of helemaal niet) weergegeven in hun opdrachten?</summary>

ClashKing kan deze informatie alleen krijgen als de clan wordt gevolgd, wat kan worden gedaan door een clan te koppelen aan een server met `/addclan`. Dit komt omdat deze informatie niet door de API wordt gegeven en het niet haalbaar of mogelijk is om miljoenen clans willekeurig te volgen (tenminste voor meer gedetailleerde zaken).

</details>

<details>

<summary>Wat blijft online &#x26; activiteitscontrole doen?</summary>

controleer op wijzigingen in het volgende om te detecteren wanneer een speler voor het laatst online was:

*naamswijziging
* aanvalsoverwinning
* raid-aanval
* donatie van clankapitaal
* oorlogsaanval
*cc-donatie
* oorlogssterwinst
* verandering van oorlogsvoorkeur
* obstakel verwijderd
* Verandering van de basistrofee voor de bouwer
* gouden paspunten verdiend
* Clanspelpunten verdiend
* goud, elixer of DE geplunderd

Elke volgperiode (ongeveer 3 minuten) dat een van deze wordt gevonden, wordt +1 toegevoegd aan de activiteitsscore

</details>

<details>

<summary>De emoji's van de bot werken niet?</summary>

De server _@/everyone_-rol moet de machtiging "externe emoji's gebruiken" hebben.

</details>

<details>

<summary>De bot verzendt niets voor mijn feed of log?</summary>

* Gebruik `/setup list` en bevestig dat deze (nog) is ingesteld
* Geef het wat tijd, tot 10 minuten nadat een gebeurtenis in het spel heeft plaatsgevonden - vanwege looping- en API-cachetijden (vooral bij de eerste keer dat een clan is opgezet)
* Controleer de rechten van je kanaal/bot, vooral als je ClashKing geen beheerder hebt gegeven. _Als u de bot geen beheerdersrechten heeft gegeven, bieden wij geen ondersteuning om uw machtigingen te herstellen._

</details>

<details>

<summary>De legendastatistieken kloppen niet?</summary>

Nou, het hangt ervan af - het helpt om dieper te begrijpen hoe deze bot werkt. Zoals hierboven vermeld, kunnen er fouten optreden omdat de API niet rechtstreeks legendestatistieken geeft. \
\
Deze bot werkt door non-stop de trofeeën van spelers te controleren. Als de trofeeën omhoog gaan, is het een aanval. Als ze ten onder gaan, is het een verdediging. Klinkt goed, behalve dat de API niet _onmiddellijk_ wordt bijgewerkt - dit kan tot 5 minuten duren. In die paar minuten kunnen de trofeeën (hoe we hits/defenses controleren) op een paar manieren kunnen veranderen waardoor de bot kan struikelen. \
\
1\. Twee aanvallen in een kort tijdsbestek - in dit geval zie je statistieken als +68. Dat zijn twee treffers en het is 100% accuraat voor alle doeleinden. \
2\. Twee verdedigingen vinden tegelijkertijd plaats, hetzelfde als hierboven, maar zoiets als -68. \
3\. Waar we enige onnauwkeurigheid kunnen krijgen, vinden een verdediging en een aanval tegelijkertijd plaats. Je kunt zoiets als +4 krijgen als een +30 aanval en -26 verdediging tegelijkertijd plaatsvinden. \
\
Altijd: de nettowinst/loss voor de dag zal nauwkeurig zijn.

</details>

<details>

<summary>Kan de bot laten zien waar Capital Gold is gedoneerd?</summary>

Nee, de API verstrekt deze informatie niet aan ClashKing om te kunnen delen

</details>

