document.getElementById("contact-form").addEventListener("submit", function (e) {
  const email = document.getElementById("email").value;
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    e.preventDefault();
  } else {
    alert("Thank you! Your message has been sent.");
  }
});