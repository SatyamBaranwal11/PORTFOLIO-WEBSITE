// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");
const keystep = document.querySelector("#keystep");

const themeToggleBtn = document.querySelector("#theme-toggler");

const words = [
  'developer',
  'designer',
  'content creator',
];
let i = 0;
animate(words[i]);
function animate(word) {
  keystep.textContent = "";
  for(let i = 0; i<word.length; i++){
    setTimeout(() => {
      keystep.textContent += word[i];
    }, 100 * i);
  }
  setTimeout(() => {
    keystep.textContent = "";
    animate(words[i++ % words.length]);
  }, 100 * word.length + 1000);
}

const hour = new Date().getHours();
if (hour >= 18 || hour <= 5) {
  document.body.classList.add("dark");
}

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Dynamic responsive adjustments
function handleResponsive() {
  const width = window.innerWidth;

  // Adjust header padding on scroll for mobile
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (width <= 768) {
      if (window.scrollY > 50) {
        header.style.padding = "10px 0";
      } else {
        header.style.padding = "20px 0";
      }
    }
  });

  // Adjust section padding based on screen size
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    if (width <= 480) {
      section.style.padding = "60px 0";
    } else if (width <= 768) {
      section.style.padding = "80px 0";
    } else {
      section.style.padding = "100px 0";
    }
  });

  // Adjust hero content layout
  const heroWrapper = document.querySelector(".hero-wrapper");
  const heroContent = document.querySelector(".hero-content");
  if (width <= 1024) {
    heroWrapper.classList.add("flex-column");
    heroContent.classList.add("text-center");
    heroContent.querySelector("p").classList.add("w-100");
  } else {
    heroWrapper.classList.remove("flex-column");
    heroContent.classList.remove("text-center");
    heroContent.querySelector("p").classList.remove("w-100");
  }
}

// Initial call and event listener for resize
handleResponsive();
window.addEventListener("resize", handleResponsive);

// Form submission
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert("Thank you for your message! I will get back to you soon.");
    contactForm.reset();
  });
}
