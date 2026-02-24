from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session
from groq import Groq
from dotenv import load_dotenv
import os

from database import get_db
from models import ChatHistory

load_dotenv()

router = APIRouter()

# Load Groq API key safely
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

if not GROQ_API_KEY:
    print("❌ GROQ_API_KEY not found in environment")

client = Groq(api_key=GROQ_API_KEY)


# -------- Resume Context -------- #

RESUME_CONTEXT = """
Yash Munshi
B.Tech Electronics & Computer Science, KIIT
CGPA: 9.15

Experience:
Software Development Intern @ Suvidha Foundation
Campus Ambassador @ Internshala

Projects:
DealDrop - Price tracking platform
PioneerAI - AI Learning Assistant
PreVuCam - AI video trimming tool

Skills:
Java, Python, C++, JavaScript, TypeScript
React, Next.js, Node.js, Express
PostgreSQL, Supabase

Achievements:
Top 20 CyberPeace Hackathon
Samsung Fellowship Shortlisted
"""


# -------- Request Model -------- #

class ChatRequest(BaseModel):
    message: str


# -------- Chat Endpoint -------- #

@router.post("/chat")
async def chat(request: ChatRequest, db: Session = Depends(get_db)):

    try:
        print("Received message:", request.message)

        completion = client.chat.completions.create(
            model="llama3-8b-8192",  # Free Groq model
            messages=[
                {
                    "role": "system",
                    "content": f"""
You are Yash Munshi's professional AI portfolio assistant.

Respond confidently and clearly.
Keep answers concise but informative.
Maintain a professional tone.
Only answer using the resume information below.

Resume Info:
{RESUME_CONTEXT}
"""
                },
                {
                    "role": "user",
                    "content": request.message
                }
            ],
            temperature=0.3
        )

        reply = completion.choices[0].message.content

        print("AI Reply:", reply)

        # Save to SQLite
        chat_entry = ChatHistory(
            user_message=request.message,
            ai_reply=reply
        )

        db.add(chat_entry)
        db.commit()

        print("✅ Saved to DB")

        return {"reply": reply}

    except Exception as e:
        print("❌ ERROR:", str(e))
        return {"reply": f"Error: {str(e)}"}