const WHATSAPP_NUMBER = "5538998833730";

// Botão principal do WhatsApp
const whatsappLink = document.getElementById("whatsapp-link");

if (whatsappLink) {
  whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}`;
}

// Menu para celular
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

// Fechar menu após clicar em um link
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");

    if (menuToggle) {
      menuToggle.textContent = "☰";
    }
  });
});

// Atualizar ano automaticamente
document.getElementById("year").textContent =
  new Date().getFullYear();

// Formulário integrado ao WhatsApp
document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = new FormData(event.currentTarget);

  const name = form.get("name");
  const contact = form.get("email");
  const area = form.get("area");
  const message = form.get("message") ||
    "Gostaria de informações sobre atendimento.";

  const text =
    `Olá! Meu nome é ${name}. ` +
    `Meu contato: ${contact}. ` +
    `Assunto: ${area}. ` +
    `Mensagem: ${message}`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
    "_blank"
  );
});
