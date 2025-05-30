// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");

  // Form submission
  const consultationForm = document.getElementById("consultationForm");

  // Smooth scrolling for CTA buttons
  const ctaButtons = document.querySelectorAll(".cta-btn");

  // Marquee functionality
  const marquee = document.querySelector(".marquee");

  // Mobile menu functionality (basic toggle)
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      // Simple alert for demo - in real app, this would toggle a mobile menu
      alert("Mobile menu would open here");
    });
  }

  // Form submission handling
  if (consultationForm) {
    consultationForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const name = consultationForm.querySelector(
        'input[placeholder="Name"]'
      ).value;
      const mobile = consultationForm.querySelector(
        'input[placeholder="Mobile Number"]'
      ).value;
      const captcha = consultationForm.querySelector(
        'input[placeholder="Captcha"]'
      ).value;

      // Basic validation
      if (!name || !mobile || !captcha) {
        alert("Please fill in all fields");
        return;
      }

      if (captcha !== "1514") {
        alert("Incorrect captcha. Please enter 1514");
        return;
      }

      if (mobile.length < 10) {
        alert("Please enter a valid mobile number");
        return;
      }

      // Success message
      alert(
        "Thank you! Your consultation request has been submitted. We will contact you soon."
      );

      // Reset form
      consultationForm.reset();
    });
  }

  // Smooth scroll to form for CTA buttons
  ctaButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // If the button is in the hero section, scroll to form
      if (this.closest(".hero-text")) {
        e.preventDefault();
        const form = document.querySelector(".form-card");
        if (form) {
          form.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }
    });
  });

  // Duplicate marquee content for seamless loop
  if (marquee) {
    const marqueeContent = marquee.innerHTML;
    marquee.innerHTML = marqueeContent + marqueeContent;
  }

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, observerOptions);

  // Observe sections for animation
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Phone number click to call functionality
  const phoneBtn = document.querySelector(".phone-btn");
  if (phoneBtn) {
    phoneBtn.addEventListener("click", function () {
      window.location.href = "tel:+919856589510";
    });
  }

  // Add hover effects to treatment cards
  const treatmentCards = document.querySelectorAll(".treatment-card");
  treatmentCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
      this.style.transition = "transform 0.3s ease";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Add hover effects to safety items
  const safetyItems = document.querySelectorAll(".safety-item");
  safetyItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
      this.style.transition = "transform 0.3s ease";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Add click tracking for analytics (demo)
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("cta-btn")) {
      console.log("CTA button clicked:", e.target.textContent);
    }
  });

  // Header scroll effect
  let lastScrollTop = 0;
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      header.style.transform = "translateY(-100%)";
    } else {
      // Scrolling up
      header.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
  });

  // Add loading effect
  window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });
});

// Simple analytics tracking function
function trackEvent(eventName, eventData) {
  console.log("Event tracked:", eventName, eventData);
  // In a real application, this would send data to analytics service
}

// Error handling for images
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    img.addEventListener("error", function () {
      // Fallback if image fails to load
      this.style.backgroundColor = "#f3f4f6";
      this.style.display = "flex";
      this.style.alignItems = "center";
      this.style.justifyContent = "center";
      this.innerHTML =
        '<span style="color: #6b7280;">Image not available</span>';
    });
  });
});
