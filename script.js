document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  try {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json"
      }
    });
    
    if (response.ok) {
      alert("Message sent successfully!");
      e.target.reset();
    } else {
      alert("Error sending message. Please try again.");
    }
  } catch (error) {
    alert("Network error. Please try again.");
  }
});
