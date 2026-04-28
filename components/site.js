(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".menu-toggle");
  var mobileLinks = document.querySelectorAll(".nav-mobile a");

  function setScrolled() {
    if (!header) return;
    if (window.scrollY > 40) {
      header.dataset.scrolled = "";
    } else {
      delete header.dataset.scrolled;
    }
  }

  window.addEventListener("scroll", setScrolled, { passive: true });
  setScrolled();

  var mobileNav = document.getElementById("mobile-nav");

  if (toggle && header) {
    toggle.addEventListener("click", function () {
      header.classList.toggle("menu-open");
      var open = header.classList.contains("menu-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
      if (mobileNav) mobileNav.setAttribute("aria-hidden", open ? "false" : "true");
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
        if (mobileNav) mobileNav.setAttribute("aria-hidden", "true");
      });
    });
  }

  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -50px 0px", threshold: 0.08 }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
