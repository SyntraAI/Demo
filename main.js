// Mobile nav toggle + close on click
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

// Tagline rotator (only if element exists on page)
const taglineEl = document.getElementById("taglineText");
if (taglineEl) {
  const taglines = [
    "Applied AI that delivers measurable business value.",
    "Predictive intelligence for faster, better decisions.",
    "From complex operations to clear, data driven choices.",
    "Turning data into everyday decision support.",
    "Machine learning systems your teams actually use."
  ];

  let taglineIndex = 0;
  setInterval(() => {
    taglineIndex = (taglineIndex + 1) % taglines.length;
    taglineEl.textContent = taglines[taglineIndex];
    taglineEl.classList.remove("tagline-text");
    void taglineEl.offsetWidth; // restart animation
    taglineEl.classList.add("tagline-text");
  }, 4200);
}

// Scroll reveal (works on all pages with .reveal)
const revealElements = document.querySelectorAll(".reveal");
if (revealElements.length) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealElements.forEach(el => observer.observe(el));
}

// Dynamic year in footer (if present)
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
