import { useState } from "react";
import axios from "axios";
import { MessageCircle } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    const res = await axios.post("http://127.0.0.1:8000/chat", {
      message,
    });
    setReply(res.data.reply);
  };

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
      >
        <MessageCircle />
      </div>

      {open && (
        <div className="fixed bottom-24 right-6 bg-[#111827] p-5 rounded-2xl w-96 border border-white/10 shadow-xl">
          <textarea
            className="w-full p-2 text-black rounded"
            placeholder="Ask about Yash..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={sendMessage}
            className="bg-green-500 px-4 py-2 mt-3 rounded w-full"
          >
            Send
          </button>
          <p className="mt-3 text-gray-300 text-sm">{reply}</p>
        </div>
      )}
    </>
  );
}