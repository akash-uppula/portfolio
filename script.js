// Custom cursor
const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + "px";
  cursor.style.top = my + "px";
});

function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + "px";
  ring.style.top = ry + "px";
  requestAnimationFrame(animRing);
}
animRing();

document
  .querySelectorAll(
    "a, button, .skill-group, .project-card, .edu-card, .cert-item",
  )
  .forEach((el) => {
    el.addEventListener("mouseenter", () => ring.classList.add("hover"));
    el.addEventListener("mouseleave", () => ring.classList.remove("hover"));
  });

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        if (e.target.classList.contains("exp-item"))
          e.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll(".reveal, .exp-item")
  .forEach((el) => observer.observe(el));

// Nav scroll style
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  nav.style.background =
    window.scrollY > 60
      ? "rgba(10,10,12,0.97)"
      : "linear-gradient(to bottom, rgba(10,10,12,0.95) 0%, transparent 100%)";
  nav.style.backdropFilter = window.scrollY > 60 ? "blur(12px)" : "blur(2px)";
  nav.style.borderBottom =
    window.scrollY > 60 ? "1px solid rgba(201,168,76,0.1)" : "none";
});

// Smooth active nav highlight
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach((a) => {
    a.style.color =
      a.getAttribute("href") === "#" + current ? "var(--gold)" : "";
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinksMenu = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinksMenu.classList.toggle("active");
});

// Close mobile menu on link click
navLinksMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinksMenu.classList.remove("active");
  });
});
