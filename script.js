// ==============================
// MOBILE NAVIGATION
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");

  menuToggle.innerHTML = isOpen ? "✕" : "☰";
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close mobile menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.innerHTML = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// ==============================
// MENU CATEGORY FILTER
// ==============================

const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active state from all buttons
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Activate clicked button
    button.classList.add("active");

    // Get selected category
    const selectedCategory = button.dataset.category;

    // Filter menu cards
    menuCards.forEach((card) => {
      const cardCategory = card.dataset.category;

      if (selectedCategory === "all" || selectedCategory === cardCategory) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// ==============================
// CONTACT BUTTON
// ==============================

const contactButton = document.getElementById("contactButton");

contactButton.addEventListener("click", (event) => {
  event.preventDefault();

  alert(
    "Welcome to Sukoon Café! Add your real phone number, email or WhatsApp link here.",
  );
});

// ==============================
// CURRENT YEAR
// ==============================

const footerCopyright = document.querySelector(".footer-bottom p");

if (footerCopyright) {
  footerCopyright.innerHTML = `© ${new Date().getFullYear()} SukoonCafé. All rights reserved.`;
}
