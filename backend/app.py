from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="HiDE API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Restrict to your website domain after deployment.
    allow_methods=["GET"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"project": "HiDE", "status": "online"}

@app.get("/health")
def health():
    return {"ok": True}
