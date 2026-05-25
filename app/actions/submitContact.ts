"use server";

type ContactData = {
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  tierart: string;
  gechipt: string;
  alter: string;
  rasse: string;
  termin: string;
  fragen: string;
};

export async function submitContactToHubSpot(data: ContactData) {
  const apiKey = process.env.HUBSPOT_API_KEY;
  const portalId = process.env.HUBSPOT_PORTAL_ID;

  if (!apiKey || !portalId) {
    console.error("HubSpot credentials missing");
    return { success: false, error: "Server configuration error" };
  }

  try {
    // Kontakt-Daten für HubSpot formatieren
    const properties = [
      { objectTypeId: "0-1", name: "firstname", value: data.vorname },
      { objectTypeId: "0-1", name: "lastname", value: data.nachname },
      { objectTypeId: "0-1", name: "email", value: data.email },
      { objectTypeId: "0-1", name: "phone", value: data.telefon },
      { objectTypeId: "0-1", name: "tierart", value: data.tierart },
      { objectTypeId: "0-1", name: "gechipt", value: data.gechipt },
      { objectTypeId: "0-1", name: "alter", value: data.alter },
      { objectTypeId: "0-1", name: "rasse", value: data.rasse },
      { objectTypeId: "0-1", name: "termin", value: data.termin },
      { objectTypeId: "0-1", name: "fragen", value: data.fragen },
    ];

    // HubSpot API aufrufen
    const response = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ properties }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("HubSpot API error:", errorData);
      return { success: false, error: "Failed to create contact in HubSpot" };
    }

    const contact = await response.json();
    console.log("Contact created in HubSpot:", contact.id);

    return { success: true, contactId: contact.id };
  } catch (error) {
    console.error("Error submitting contact:", error);
    return { success: false, error: "An error occurred" };
  }
}
