alert("HiDE JavaScript is working!");

const button = document.getElementById("sendBtn");

if (button) {
    button.addEventListener("click", () => {
        button.style.backgroundColor = "green";
        button.textContent = "Connected";
    });
} else {
    alert("Sent button not found!");
}
