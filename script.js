document.addEventListener("DOMContentLoaded", function () {

    const introText = document.getElementById("intro-text");
    const paragraph = document.querySelector(".par");

    if (introText) {
        setTimeout(() => {
            introText.classList.add("fade-in");
        }, 300);
    }

    if (paragraph) {
        setTimeout(() => {
            paragraph.classList.add("fade-in");
        }, 600); // Slight delay after name
    }
});

window.addEventListener("scroll", function () {
    const fadeImages = document.querySelectorAll(".fade-img");

    fadeImages.forEach(img => {
        const rect = img.getBoundingClientRect();
        const inView = rect.top < window.innerHeight - 100;
        if (inView) {
            img.classList.add("visible");
        }
    });
});

window.addEventListener("scroll", function () {
    const fadeSections = document.querySelectorAll(".section.fade-in");

    fadeSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const inView = rect.top < window.innerHeight - 100;

        if (inView) {
            section.classList.add("visible");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".side-navbar");

    // Animate sidebar on load
    if (sidebar) {
        setTimeout(() => {
            sidebar.classList.add("visible");
        }, 200); // Delay for dramatic effect
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("sidebar-toggle");
    const sidebar = document.querySelector(".side-navbar");

    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });

    // Optional: auto-close sidebar on link click
    document.querySelectorAll(".side-navbar a").forEach(link => {
        link.addEventListener("click", () => {
            sidebar.classList.remove("open");
        });

        
    });
});

window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".animate-on-scroll");

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const about = document.querySelector(".about-section");

    // Add animation class AFTER render to prevent flashing
    about.classList.add("animate-on-scroll");

    const handleScroll = () => {
        const rect = about.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            about.classList.add("visible");
            window.removeEventListener("scroll", handleScroll); // run only once
        }
    };

    window.addEventListener("scroll", handleScroll);

    // Also trigger on load in case it's already visible
    handleScroll();
});

window.addEventListener("scroll", function () {
    const aboutSection = document.getElementById("about");
    const githubIcon = document.getElementById("github-icon");
    const linkedinIcon = document.getElementById("linkedin-icon");
    const instagramIcon = document.getElementById("instagram-icon");
  
    const rect = aboutSection.getBoundingClientRect();
    const inView = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
  
    [githubIcon, linkedinIcon, instagramIcon].forEach(icon => {
      if (inView) {
        icon.classList.add("icon-blue");
      } else {
        icon.classList.remove("icon-blue");
      }
    });
  });
  
