const AGENT_PHONE_NUMBER = "+918490943582";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contactForm");
  const menuToggle = document.querySelector(".menu-toggle");
  const primaryNav = document.querySelector("#primaryNav");

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("is-open");

      menuToggle.classList.toggle("is-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        primaryNav.classList.remove("is-open");
        menuToggle.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  if (form) {
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
  }
});
