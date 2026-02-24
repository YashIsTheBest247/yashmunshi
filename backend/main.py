from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.orm import Session
from groq import Groq
from dotenv import load_dotenv
import os

from database import engine, get_db
from models import Base, ChatHistory

# Load environment variables
load_dotenv()

app = FastAPI()

# Create SQLite tables
Base.metadata.create_all(bind=engine)

# ✅ FIXED CORS (VERY IMPORTANT)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load Groq API key
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

if not GROQ_API_KEY:
    print("❌ GROQ_API_KEY not found. Check your .env file")

client = Groq(api_key=GROQ_API_KEY)

# Resume Context
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

# Request model
class ChatRequest(BaseModel):
    message: str


# Health check route
@app.get("/")
def root():
    return {"status": "Backend running successfully"}


@app.post("/chat")
async def chat(request: ChatRequest, db: Session = Depends(get_db)):

    try:
        print("📩 User:", request.message)

        completion = client.chat.completions.create(
            model="llama-3.1-8b-instant",  # ✅ Updated working model
            messages=[
                {
                    "role": "system",
                    "content": f"""
You are Yash Munshi's professional AI portfolio assistant.

Respond confidently and clearly.
Keep answers concise but informative.
Maintain a professional tone.
Only use the resume information provided.

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

        print("🤖 AI:", reply)

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
        return {"reply": f"Internal error: {str(e)}"}