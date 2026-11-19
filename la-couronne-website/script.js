// La Couronne website interactions.
// Add your official contact email and social/shop URLs below when they are ready.
const SITE_CONFIG = {
  contactEmail: "", // Example: "hello@yourdomain.com"
  links: {
    ecommerce: "",
    facebook: "",
    instagram: "",
    tiktok: ""
  }
};

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("open", !isOpen);
});
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Directional slide-in animations as content enters the viewport.
// The layout determines the direction, while grouped cards enter with a soft stagger.
document.querySelectorAll(".purpose-card").forEach((el, index) => {
  el.dataset.reveal = index % 2 === 0 ? "left" : "right";
});
document.querySelectorAll(".value-item").forEach((el, index) => {
  el.dataset.reveal = index % 2 === 0 ? "up" : "right";
  el.style.transitionDelay = `${(index % 5) * 90}ms`;
});
document.querySelector(".product-image")?.setAttribute("data-reveal", "left");
document.querySelector(".product-copy")?.setAttribute("data-reveal", "right");
document.querySelector(".contact-copy")?.setAttribute("data-reveal", "left");
document.querySelector(".contact-form")?.setAttribute("data-reveal", "right");
document.querySelector(".hero-visual")?.setAttribute("data-reveal", "right");

// Stagger nearby reveal elements slightly for a more polished sequence.
document.querySelectorAll(".purpose-grid .reveal").forEach((el, index) => {
  el.style.transitionDelay = `${index * 130}ms`;
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14, rootMargin: "0px 0px -45px 0px" });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Highlight the current section in the navigation.
const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-link")];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach(section => sectionObserver.observe(section));

// Lightweight selection interaction for the product showcase.
const toast = document.querySelector(".cart-toast");
let toastTimer;
document.querySelector(".add-to-bag").addEventListener("click", () => {
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 4200);
});
document.querySelector(".toast-close").addEventListener("click", () => toast.classList.remove("show"));

// Contact form prepares an email in the visitor's email app.
// Configure SITE_CONFIG.contactEmail above before publishing.
document.querySelector("#contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const feedback = document.querySelector(".form-feedback");
  if (!SITE_CONFIG.contactEmail) {
    feedback.textContent = "Please add your official contact email in script.js before publishing this form.";
    feedback.classList.add("needs-setup");
    return;
  }
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`La Couronne website inquiry — ${data.get("name")}`);
  const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
  window.location.href = `mailto:${SITE_CONFIG.contactEmail}?subject=${subject}&body=${body}`;
});

// Update platform links only when real business URLs have been provided.
const platformMap = [
  ["ecommerce", "E-commerce"],
  ["facebook", "Facebook"],
  ["instagram", "Instagram"],
  ["tiktok", "TikTok"]
];
document.querySelectorAll(".platform-link").forEach((link, index) => {
  const key = platformMap[index][0];
  if (SITE_CONFIG.links[key]) {
    link.href = SITE_CONFIG.links[key];
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});
const emailDisplay = document.querySelector('[data-contact="email"]');
if (SITE_CONFIG.contactEmail) emailDisplay.textContent = SITE_CONFIG.contactEmail;
document.querySelector("#year").textContent = new Date().getFullYear();
