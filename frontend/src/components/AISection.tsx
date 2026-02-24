import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function AISection() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    const res = await axios.post("http://127.0.0.1:8000/chat", {
      message: input,
    });

    const aiMessage = { role: "assistant", content: res.data.reply };

    setMessages((prev) => [...prev, aiMessage]);
    setLoading(false);
  };

  return (
    <section className="px-10 py-32 bg-[#0f172a]">
      <h2 className="text-4xl font-bold mb-10 text-green-400">
        Ask My AI
      </h2>

      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 max-w-3xl mx-auto">

        <div className="h-80 overflow-y-auto space-y-4 mb-4 pr-2">

          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-3 rounded-xl max-w-[80%] ${
                msg.role === "user"
                  ? "bg-green-500 text-black ml-auto"
                  : "bg-gray-800 text-gray-200"
              }`}
            >
              {msg.content}
            </motion.div>
          ))}

          {loading && (
            <div className="text-gray-400 animate-pulse">
              AI is thinking...
            </div>
          )}

        </div>

        <div className="flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about experience, projects, skills..."
            className="flex-1 bg-gray-900 border border-gray-700 rounded-xl px-4 py-2 focus:outline-none focus:border-green-500"
          />
          <button
            onClick={sendMessage}
            className="bg-green-500 px-6 rounded-xl font-semibold hover:scale-105 transition"
          >
            Send
          </button>
        </div>

      </div>
    </section>
  );
}