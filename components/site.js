(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".menu-toggle");
  var backdrop = document.getElementById("nav-mobile-backdrop");
  var mobileNav = document.getElementById("mobile-nav");
  var mobileLinks = mobileNav ? mobileNav.querySelectorAll("a") : [];

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

  function setMobileMenu(open) {
    document.body.classList.toggle("mobile-menu-open", open);
    document.body.style.overflow = open ? "hidden" : "";
    if (toggle) toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (mobileNav) mobileNav.setAttribute("aria-hidden", open ? "false" : "true");
    if (backdrop) backdrop.setAttribute("aria-hidden", open ? "false" : "true");
  }

  function closeMobileMenu() {
    setMobileMenu(false);
  }

  function toggleMobileMenu() {
    setMobileMenu(!document.body.classList.contains("mobile-menu-open"));
  }

  if (toggle) toggle.addEventListener("click", toggleMobileMenu);
  if (backdrop) backdrop.addEventListener("click", closeMobileMenu);

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", closeMobileMenu);
  });

  window.addEventListener(
    "resize",
    function () {
      if (window.matchMedia("(min-width: 768px)").matches && document.body.classList.contains("mobile-menu-open")) {
        closeMobileMenu();
      }
    },
    { passive: true }
  );

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.body.classList.contains("mobile-menu-open")) {
      closeMobileMenu();
    }
  });

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
