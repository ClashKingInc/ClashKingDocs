# 🤓 Automatisch vernieuwen

## Het doel

Ververs automatisch rollen en bijnaam wanneer de status van een gebruiker in het spel verandert.

## De commando's

Met `/autorefresh triggers` kunt u kiezen in welk scenario de vernieuwing zal plaatsvinden

<figure><img src="/img/docs-media/image (94).png" alt="" /><figcaption></figcaption></figure>

Met `/autorefresh option` kunt u kiezen wat er wordt vernieuwd wanneer een trigger wordt geactiveerd.

<figure><img src="/img/docs-media/image (116).png" alt="" /><figcaption></figcaption></figure>

:::info
Als u handmatig wilt vernieuwen, gebruik dan `/refresh`
:::

## Autorefresh-trigger&#x20;

### Parameters

Geen parameters nodig.

### Triggertypen

* Lid worden
* Ledenverlof
* Stadhuiswijziging
* Ligawijziging
* Rolverandering

## Opties voor automatisch vernieuwen

* `state`: stel automatisch vernieuwen in op ON/OFF
* `role_treatment`: Er wordt een rol toegevoegd en /or verwijderd, afhankelijk van de rol die u hebt ingesteld in [Roles (TH & More)](roles-th-and-more/README.md).
* `nickname_change`: de bijnaam verandert afhankelijk van de bijnamen die u instelt in [Set up a server](../server-setups/setup-a-server.md).
* `blacklist_role_add`: een persoon met een rol op de zwarte lijst heeft geen last van automatisch vernieuwen (ze behouden hun rollen en bijnamen)
* `blacklist_role_remove`: u kunt een rol verwijderen die is ingesteld in `blacklist_role_add`.
* `change_log`: Als u de wijzigingen wilt zien die de bot aanbrengt, kunt u een kanaal instellen waarnaar de bot logs van zijn activiteiten verzendt.