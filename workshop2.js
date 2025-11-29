// Mobile menu
const menuBtn = document.getElementById("menu-button");
const nav = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.textContent = isOpen ? "✕" : "☰";
  menuBtn.setAttribute("aria-expanded", isOpen);
});

nav?.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
      menuBtn.textContent = "☰";
      menuBtn.setAttribute("aria-expanded", "false");
    }
  })
);

// Scroll progress bar
const bar = document.getElementById("scroll-bar");
window.addEventListener("scroll", () => {
  const h =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (window.scrollY / h) * 100;
  if (bar) bar.style.width = scrolled + "%";
});

// Contact form
const form = document.getElementById("contact-form-id");
const msg = document.getElementById("form-message");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    msg.textContent = "Please fill in Name and Email.";
    msg.style.color = "red";
  } else {
    msg.textContent = "Thank you! I will contact you soon.";
    msg.style.color = "lightgreen";
    form.reset();
  }
});

// Hero button scroll to projects
document.getElementById("hero-button")?.addEventListener("click", () => {
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
});

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
