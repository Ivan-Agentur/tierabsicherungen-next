const ACCESS_KEY = "0ba6edc4-8dde-4b29-8753-0415ba03402f";

type ContactData = {
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  haustiername: string;
  tierart: string;
  gechipt: string;
  alter: string;
  rasse: string;
  wannAnrufen: string;
  fragen: string;
  datenschutz: boolean;
};

export async function submitContact(data: ContactData) {
  const message = [
    `Haustier: ${data.haustiername} (${data.tierart})`,
    `Alter: ${data.alter}`,
    data.rasse ? `Rasse: ${data.rasse}` : null,
    `Gechipt: ${data.gechipt}`,
    data.wannAnrufen ? `Wann anrufen: ${data.wannAnrufen}` : null,
    data.fragen ? `\nFragen: ${data.fragen}` : null,
  ].filter(Boolean).join("\n");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: `Rückruf-Anfrage: ${data.vorname} ${data.nachname} – ${data.haustiername}`,
        name: `${data.vorname} ${data.nachname}`,
        email: data.email,
        phone: data.telefon,
        message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return { success: true };
    } else {
      console.error("Web3Forms error:", result);
      return { success: false, error: "Übertragung fehlgeschlagen. Bitte versuche es erneut." };
    }
  } catch (error) {
    console.error("Fehler beim Senden:", error);
    return { success: false, error: "Netzwerkfehler. Bitte prüfe deine Verbindung." };
  }
}
