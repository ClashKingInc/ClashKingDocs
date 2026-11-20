---
description: Stel tickets in via het dashboard en beheer ze in Discord.
---

# 🎫 Tickets

Met tickets kunnen serverleden via een apart Discord-kanaal contact opnemen met de staff. Stel ticketpanels in via het dashboard en gebruik de onderstaande commando’s in een bestaand ticket. Voor ticketacties zijn de juiste ticketstaffrechten nodig.

## Een ticketpanel instellen

1. Open het dashboard, selecteer je server en kies **Tickets** onder **Management**.
2. Klik onder **Panels** op **New panel** en geef het een naam. Open daarna **Configure** bij het nieuwe panel.
3. Stel de ticketcategorieën en logkanalen van het panel in. Voeg onder **Ticket actions** acties toe en stel bijvoorbeeld staffrollen, accountvereisten, openingsberichten en vragen in.
4. Maak het panelbericht en koppel de knoppen of menuopties aan de ticketacties. Sla het concept op en kies daarna **Publish saved changes**; selecteer bij de eerste publicatie een Discord-kanaal.

Onder **Shared messages** kun je ook herbruikbare berichten voorbereiden. Als je wijzigingen in een panelconcept opslaat, wordt het bestaande Discord-bericht niet automatisch bijgewerkt; publiceer de opgeslagen wijzigingen wanneer ze klaar zijn.

## De status van een ticket wijzigen

Gebruik `/ticket status` in het ticket en selecteer een **status**:

- **open**: open het ticket.
- **sleep**: zet het ticket op slaapstand en verberg het ticketchannel voor de aanvrager.
- **close**: sluit het ticket na bevestiging. Het Discord-ticketchannel wordt definitief verwijderd; als transcripten aanstaan, wordt eerst een transcript opgeslagen.

## Een lid toevoegen

Gebruik `/ticket add` in het ticket en selecteer een Discord-**member** om dat lid toegang te geven tot het ticket.

## Een gedeeld bericht versturen

Maak eerst een bericht aan onder **Tickets → Shared messages** in het dashboard. Gebruik daarna `/ticket messages` in een ticket om het bericht te selecteren en te versturen. Vul eventuele aangepaste vragen van de template in wanneer daarom wordt gevraagd.
