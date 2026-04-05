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
# 🔄 Handmatig vernieuwen (rollen en bijnamen)

## Het doel

U kunt de rollen ([roles-th-and-more](roles-th-and-more/ "mention") & [setup-a-clan.md](../clan-setups/setup-a-clan.md "mention")) en bijnamen ([setup-a-server.md](../server-setups/setup-a-server.md "mention")) van een gebruiker handmatig vernieuwen als de [auto-refresh.md](auto-refresh.md "mention") is uitgeschakeld, of als u een wijziging heeft aangebracht in de gebruikersinstellingen en er nog niets de automatische vernieuwing heeft geactiveerd.&#x20;

:::info
* Leiderschapsrollen worden standaard vernieuwd. Wil je dat niet? Wijzigbaar via `/setup server [leadership_refresh]`
:::

## Het commando

Er is één hoofdopdracht om rollen handmatig te vernieuwen -> `/refresh` met twee hoofdopties voor een basiservaring:

## De parameters

### Optioneel

* `role_or_user`: kies de rol of gebruiker waarvan u de rollen wilt vernieuwen en de /or-bijnaam.
* `test`: of geen optie, standaard is nee, maar met ja kun je zien wat de bot gaat doen zonder dat hij het daadwerkelijk doet.
* `advanced_mode`: kies welke rol u wilt evalueren. Hierdoor worden alleen /remove de rollen toegevoegd die u hebt geselecteerd.
* `role_treatment`: geef aan of je rollen wilt toevoegen en /or wilt verwijderen voor de gebruiker, afhankelijk van (als een speler bijvoorbeeld een van je clan heeft verlaten om zich bij een andere clan uit je familie aan te sluiten, kun je hem nieuwe rollen geven zonder die van de vorige clan te verwijderen).