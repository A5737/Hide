const API_URL = "https://bookish-chainsaw-6pj5jp6vr6j25vx4-8000.app.github.dev";

const button = document.getElementById("sendBtn");

button.addEventListener("click", async () => {
    button.disabled = true;

    try {
        const response = await fetch(${API_URL}/health, {
            method: "GET",
            mode: "cors"
        });

        if (!response.ok) throw new Error("Connection failed");

        const data = await response.json();

        if (data.status !== "online") throw new Error("Server offline");

        button.style.backgroundColor = "#16a34a";
    } catch (error) {
        console.error("HiDE connection error:", error);
        button.style.backgroundColor = "#dc2626";
    } finally {
        button.disabled = false;
    }
});
