 document.addEventListener("DOMContentLoaded", () => {
    let lastScrollY = window.scrollY;
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;

      if (!navbar) return;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        navbar.classList.add("hidden");
      } else {
        // Scrolling up
        navbar.classList.remove("hidden");
      }

      lastScrollY = currentScrollY;
    });
  });

  const vid = document.getElementById('background-video');
  vid.addEventListener('ended', () => { vid.currentTime = 0; vid.play(); });
