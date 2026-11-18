// Interface preview only: no Session ID is sent or stored.
const sendButton = document.getElementById("send");
const statusText = document.getElementById("status");

sendButton.addEventListener("click", () => {
  sendButton.classList.remove("success");
  sendButton.classList.add("error");
  statusText.textContent = "Service is not connected — nothing was sent.";
});
