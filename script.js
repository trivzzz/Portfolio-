document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const response = await fetch("/contact", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: { "Content-Type": "application/json" }
  });
  if (response.ok) {
    alert("Message sent successfully!");
    e.target.reset();
  } else {
    alert("Error sending message.");
  }
});
