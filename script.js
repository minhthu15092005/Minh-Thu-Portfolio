// --- CASE STUDIES DATA ---
const projectData = {
  fuwa3e: {
    title: "Fuwa3e Circular Economy Solution",
    category: "CE Hackathon 2024",
    role: "Core Competitor & Product Strategist",
    timeline: "June 2024",
    location: "Foreign Trade University, Hanoi",
    challenge: "Develop a scalable circular economy business strategy and product alignment for Fuwa3e, a pioneering Vietnamese eco-cleaning brand utilizing enzyme technology from biological waste.",
    contribution: "Led customer discovery and market research efforts. Conducted qualitative interviews to identify consumer hesitations regarding eco-friendly cleaning agents. Translated these insights into a refined product positioning framework and designed a phased, multi-channel marketing execution plan targeting eco-conscious households.",
    keyPoints: [
      "Conducted research and analyzed qualitative feedback from over 150 potential customers.",
      "Formulated a new product-market positioning, bridging the gap between scientific efficacy and consumer lifestyle benefits.",
      "Designed a circular subscription-and-refill program concept that reduces plastic packaging waste by 40%.",
      "Won the Third Prize among dozens of competitive university teams."
    ]
  },
  shrimp: {
    title: "Netherlands Market Entry for Whiteleg Shrimp",
    category: "Economist Up 2025",
    role: "Lead Data Analyst & Presenter",
    timeline: "June 2025",
    location: "Diplomatic Academy of Vietnam",
    challenge: "Identify high-potential export destinations for Vietnamese seafood under EVFTA tariff schemes and construct a data-backed market entry strategy.",
    contribution: "Analyzed import/export, tariff (EVFTA), and regulatory databases using statistical tools. Identified the Netherlands as the primary gateway due to import volume trends and favorable logistics. Crafted a comprehensive SWOT analysis, an evidence-based market entry roadmap, and a robust pricing model.",
    keyPoints: [
      "Processed and cross-examined international trade datasets to justify market selection.",
      "Created an actionable roadmap outlining cold-chain compliance, tariff navigation, and local distribution partnerships.",
      "Developed a predictive financial pricing model factoring in shipping inflation and tariff step-downs.",
      "Awarded Second Prize by a panel of trade experts and economists."
    ]
  },
  agriup: {
    title: "Sustainable Agriculture Startup Model",
    category: "AgriUp 2025",
    role: "Product Owner & Pitch Lead",
    timeline: "December 2025",
    location: "Foreign Trade University, Hanoi",
    challenge: "Create a viable agricultural startup concept addressing contemporary farming inefficiency and supply chain trust issues.",
    contribution: "Served as the primary driver for product conception. Mapped out the user journey for both farmers and consumers. Identified a key consumer niche characterized by 'greenwashing fatigue' and designed a supply-chain verification feature. Led the presentation pitch and Q&A sessions with venture capital judges.",
    keyPoints: [
      "Engineered a digital platform model connecting organic farms directly to retail outlets, complete with a transparent pricing algorithm.",
      "Conducted extensive niche segment research to establish brand messaging and combat consumer skepticism.",
      "Created high-fidelity wireframes for the farmer onboarding and consumer transparency dashboards.",
      "Earned Third Prize and received praise for realistic unit economics and customer validation."
    ]
  },
  research: {
    title: "Multi-Domain Scientific Research",
    category: "Student-Level Scientific Research",
    role: "Lead Researcher",
    timeline: "2025 - 2026",
    location: "Foreign Trade University, Hanoi",
    challenge: "Conduct rigorous academic research across three complex domains (Law, Finance, and Customer Behavior) to derive insights with practical policy and business implications.",
    contribution: "Formulated research questions, performed extensive literature reviews, gathered data, and conducted statistical modeling. Applied bankruptcy prediction formulas for the finance paper and analyzed survey data using statistical tools (Stata/Python) for the customer behavior project.",
    keyPoints: [
      "Law (2025): Awarded Second Prize for investigation into university-level intellectual property rights regulations.",
      "Finance (2025): Developed statistical and predictive models to forecast corporate bankruptcy risk in emerging markets.",
      "Customer Behavior (2026): Designed and analyzed behavioral surveys to dissect Vietnamese consumer purchasing decisions regarding green goods.",
      "Strengthened advanced data modeling, data visualization, and academic writing competencies."
    ]
  }
};

// --- APPLICATION INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initThemeToggle();
  initGpaMeter();
  initSkillBars();
  initProjectModals();
  initContactForm();
  initScrollReveal();
});

// --- NAVIGATION LOGIC ---
function initNavigation() {
  const header = document.querySelector(".main-header");
  const menuToggle = document.getElementById("mobileMenuToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  // Sticky Header on Scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    highlightActiveLink();
  });

  // Mobile Menu Toggle
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close Mobile Menu on Link Click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Active Link Tracking
  function highlightActiveLink() {
    let scrollPos = window.scrollY + 150; // offset for header

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }
}

// --- THEME TOGGLE (DARK / LIGHT) ---
function initThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  
  // Check for saved preference, default to dark
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.body.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector("svg");
    if (theme === "light") {
      // Light Mode Icon (Sun)
      icon.innerHTML = '<path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 5a7 7 0 1 0 0 14 7 7 0 1 0 0-14z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>';
    } else {
      // Dark Mode Icon (Moon)
      icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>';
    }
  }
}

// --- GPA METER ANIMATION ---
function initGpaMeter() {
  const gpaSection = document.getElementById("about");
  const fillCircle = document.getElementById("gpaFillCircle");
  
  if (!fillCircle) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // GPA is 3.95 / 4.0. Ratio is 0.9875.
        // Full stroke-dasharray is 251.2
        const offset = 251.2 * (1 - 3.95 / 4.0);
        fillCircle.style.strokeDashoffset = offset;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(gpaSection);
}

// --- SKILL BARS ANIMATION ---
function initSkillBars() {
  const skillsSection = document.getElementById("skills");
  const skillFills = document.querySelectorAll(".skill-fill");
  
  if (skillFills.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillFills.forEach(fill => {
          const width = fill.getAttribute("data-width") || "0%";
          fill.style.width = width;
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  observer.observe(skillsSection);
}

// --- CASE STUDIES MODAL ---
function initProjectModals() {
  const modal = document.getElementById("projectModal");
  const modalContent = modal.querySelector(".modal-content");
  const closeBtn = modal.querySelector(".modal-close-btn");
  const triggerBtns = document.querySelectorAll("[data-project]");

  // Open modal
  triggerBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const projectId = btn.getAttribute("data-project");
      const data = projectData[projectId];

      if (data) {
        // Populate modal data
        modal.querySelector(".modal-category").textContent = data.category;
        modal.querySelector(".modal-title").textContent = data.title;
        modal.querySelector(".meta-role").textContent = data.role;
        modal.querySelector(".meta-timeline").textContent = data.timeline;
        modal.querySelector(".meta-location").textContent = data.location;
        modal.querySelector(".challenge-text").textContent = data.challenge;
        modal.querySelector(".contribution-text").textContent = data.contribution;

        // Set banner image (can match category or be dynamic)
        const bannerImg = modal.querySelector(".modal-header-img");
        bannerImg.src = btn.closest(".project-card").querySelector(".project-banner").src;
        bannerImg.alt = data.title;

        // Populate list items
        const pointsList = modal.querySelector(".achievements-list");
        pointsList.innerHTML = "";
        data.keyPoints.forEach(point => {
          const li = document.createElement("li");
          li.textContent = point;
          pointsList.appendChild(li);
        });

        // Show Modal
        modal.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent background scroll
      }
    });
  });

  // Close modal
  const closeModal = () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  };

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

// --- CONTACT FORM HANDLING ---
function initContactForm() {
  const form = document.getElementById("contactForm");
  const feedbackOverlay = document.getElementById("formFeedbackOverlay");
  const closeFeedbackBtn = document.getElementById("closeFeedbackBtn");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Client-side validations
    const name = document.getElementById("formName").value.trim();
    const email = document.getElementById("formEmail").value.trim();
    const message = document.getElementById("formMessage").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Success simulation
    feedbackOverlay.classList.add("active");
    form.reset();
  });

  if (closeFeedbackBtn) {
    closeFeedbackBtn.addEventListener("click", () => {
      feedbackOverlay.classList.remove("active");
    });
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
}

// --- SCROLL REVEAL ANIMATIONS ---
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  
  if (revealElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // Keep active, so no need to unobserve if we want it to stay
        // or unobserve if we only want it to animate once
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  revealElements.forEach(el => observer.observe(el));
}
