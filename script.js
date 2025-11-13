// Hide loader when page fully loads
  const MIN_LOADER_TIME = 800;
  const preloader = document.getElementById("preloader");

  document.body.classList.add("loading");

  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.style.display = "none";
      document.body.classList.remove("loading");
      document.body.classList.add("loaded");
    }, MIN_LOADER_TIME);
  });

// ================= Scroll animation (fade-in sections) =================
const sections = document.querySelectorAll(".fade-in");

if (sections.length > 0) {
  const appearOnScroll = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => {
    appearOnScroll.observe(section);
  });
}

// ================= 3D hover parallax effect =================

const heading = document.querySelector(".main-heading");

if (heading) {
  window.addEventListener("mousemove", function (e) {
    let x = (window.innerWidth / 2 - e.clientX) / 20;
    let y = (window.innerHeight / 2 - e.clientY) / 20;
    heading.style.transform = `translate(${x}px, ${y}px)`;
  });
}

// ================= Hamburger on navbar =================
const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector("#navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ================= Animation on text =================
const texts = document.querySelectorAll(".text");

if (texts.length > 0) {
  window.addEventListener("load", () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) navbar.classList.add("show");
  });

  const textObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.3 }
  );

  texts.forEach((text) => textObserver.observe(text));
}

// ================= Smooth scroll for navbar links =================
document.querySelectorAll(".navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// ================= Services section =================

const scrollContainer = document.querySelector(".services-scroll");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

let autoScroll;

if (scrollContainer && leftBtn && rightBtn) {
  // Manual Scroll
  leftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -320, behavior: "smooth" });
  });
  rightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 320, behavior: "smooth" });
  });

  // Auto Scroll Function
  function startAutoScroll() {
    stopAutoScroll();

    autoScroll = setInterval(() => {
      const maxScroll =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (scrollContainer.scrollLeft >= maxScroll - 10) {
        // Agar last tak pahunch gaye, direct reset karo bina delay
        scrollContainer.scrollTo({ left: 0, behavior: "auto" });
      } else {
        // Normal scroll
        scrollContainer.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 3000);
  }

  function stopAutoScroll() {
    clearInterval(autoScroll);
  }

  // Start initially
  startAutoScroll();

  // Stop on hover, resume on leave
  scrollContainer.addEventListener("mouseenter", stopAutoScroll);
  scrollContainer.addEventListener("mouseleave", startAutoScroll);
}

// ================= Read More Toggle =================
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".read-more");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".service-card");
      const moreText = card.querySelector(".more-text");

      if (moreText.style.display === "block") {
        moreText.style.display = "none";
        btn.textContent = "Read More";
      } else {
        moreText.style.display = "block";
        btn.textContent = "Read Less";
      }
    });
  });
});

// ================= WhatsApp Logo =================
const whatsappBtn = document.getElementById("whatsapp-btn");
const homeSection = document.getElementById("home");

if (whatsappBtn && homeSection) {
  window.addEventListener("scroll", () => {
    const homeHalf = homeSection.offsetTop + homeSection.offsetHeight / 2;

    if (window.scrollY >= homeHalf) {
      whatsappBtn.classList.add("show");
    } else {
      whatsappBtn.classList.remove("show");
    }
  });
}


// ================= Contact Form =================

const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");
const clearBtn = document.getElementById("clearBtn");

if (form && msg && clearBtn) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        msg.style.color = "#065f46";
        msg.textContent =
          "Thanks! Your message has been sent. We will contact you soon";
        form.reset();
      } else {
        msg.style.color = "#b91c1c";
        msg.textContent = "Please fill name, email and message";
      }
    } catch (error) {
      msg.style.color = "#b91c1c";
      msg.textContent = "Network error. Please try again later.";
    }

    // 👇 Auto-hide message after 4 seconds
    setTimeout(() => {
      msg.textContent = "";
    }, 6000);
  });

  clearBtn.addEventListener("click", () => {
    form.reset();
    msg.textContent = "";
  });
}

//===================== Blogs Section ======================

const timelineItems = document.querySelectorAll(".blog-timeline li");
const blogPosts = document.querySelectorAll(".blog-post");

if (timelineItems.length > 0 && blogPosts.length > 0) {
  // Click par blog open karna
  timelineItems.forEach((item) => {
    item.addEventListener("click", () => {
      // sabse pehle active hatana
      timelineItems.forEach((i) => i.classList.remove("active"));
      blogPosts.forEach((p) => p.classList.remove("active"));

      // clicked item active
      item.classList.add("active");
      const blogId = item.getAttribute("data-id");
      const blogToShow = document.getElementById("blog-" + blogId);
      if (blogToShow) {
        blogToShow.classList.add("active");
      }
    });
  });
}
