const AGENT_PHONE_NUMBER = "+919876543210";

const form = document.querySelector("#contactForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const service = document.querySelector("#service").value;
  const message = document.querySelector("#message").value.trim();

  const smsBody = [
    "Hello, I want to connect for LIC service.",
    "",
    `Name: ${name}`,
    `Mobile: ${phone}`,
    `Service: ${service}`,
    `Message: ${message}`,
  ].join("\n");

  const encodedMessage = encodeURIComponent(smsBody);
  const separator = /iPad|iPhone|iPod/.test(navigator.userAgent) ? "&" : "?";

  window.location.href = `sms:${AGENT_PHONE_NUMBER}${separator}body=${encodedMessage}`;
});
