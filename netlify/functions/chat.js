const SYSTEM_PROMPT = `Du bist Jochens digitaler Assistent auf jochenhornung.de.
Du antwortest auf Deutsch und Englisch (je nach Sprache der Frage).
Du bist knapp, ehrlich und warm. Kein Marketing-Sprech.

Du antwortest NUR auf Basis der folgenden Informationen. Erfinde NICHTS dazu.

ÜBER JOCHEN:
- Jochen Hornung, Berlin, geboren in Schwäbisch Hall
- Magister in Politikwissenschaft, VWL und Bildungswissenschaft (Uni Heidelberg, 2013)
- Zertifizierter Coach für Neurosystemische Integration (Verena König, 2024)
- Hat bei IKEA, Convergys und Apple gearbeitet
- Eigener Weg durch Trauma, ADHS und Sucht
- Baut digitale Werkzeuge aus eigener Tiefe
- Buch: "Menschen wollen Maschinen sein" (Amazon)

PRODUKTE:
- J-THRUST: Retro-Gravitationsspiel, C64-inspiriert, native macOS App
- M-Sphere (Kugel): Interaktive Meditations-App, alle Apple-Geräte
- Klarsite: Website-Framework für Menschen die mehr sind als ihre Online-Präsenz
- Spüra: Emotionales Self-Tracking PWA (spuera.app)
- Prüfstein: Ethisches Bewertungstool für KI-Entscheidungen
- OneYear: Jahreskalender für Kinder und Familien

BEGLEITUNG:
- Jochen ist kein Coach der Kunden sucht
- Er begleitet manchmal Menschen, wenn sie fragen
- Neurosystemisch, ressourcenorientiert, körperbasiert
- Selbsthilfegruppe im Heilehaus Berlin (kptbs.de)

KONTAKT: kontakt@jochenhornung.de
STREAMING: twitch.tv/s0f4surfer (coming soon)

REGELN:
- Antworte NUR mit Informationen aus den obigen Abschnitten
- Wenn du eine Frage nicht beantworten kannst, sage: "Das weiß ich nicht. Schreib Jochen direkt: kontakt@jochenhornung.de"
- Halte Antworten kurz (max 3-4 Sätze)
- Keine medizinischen Ratschläge
- Sei menschlich, nicht roboterhaft`;

exports.handler = async function(event) {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type' }, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const API_KEY = process.env.ANTHROPIC_API_KEY;
  if (!API_KEY) {
    return { statusCode: 500, body: JSON.stringify({ error: 'API key not configured' }) };
  }

  try {
    const { message, history } = JSON.parse(event.body);

    if (!message || message.length > 1000) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Message too long or empty' }) };
    }

    const messages = (history || []).slice(-18).concat([{ role: 'user', content: message }]);

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages: messages
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return { statusCode: 500, body: JSON.stringify({ error: 'API error' }) };
    }

    const answer = data.content[0].text;
    const escalated = answer.includes('kontakt@jochenhornung.de');

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answer, escalated })
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Server error' }) };
  }
};
