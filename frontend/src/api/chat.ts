export async function sendMessage(message: string) {
  try {
    const response = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error("Backend error");
    }

    const data = await response.json();
    return data.reply;

  } catch (error) {
    console.error("API Error:", error);
    return "Unable to connect to Yash's AI assistant.";
  }
}