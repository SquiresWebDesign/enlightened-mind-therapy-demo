const menuToggle =
  document.getElementById("menuToggle");

const navigation =
  document.getElementById("navigation");

const siteHeader =
  document.getElementById("siteHeader");


// -----------------------------
// MOBILE MENU
// -----------------------------

menuToggle.addEventListener("click", () => {

  const isOpen =
    navigation.classList.toggle("open");

  document.body.classList.toggle(
    "menu-open",
    isOpen
  );

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

});


document
  .querySelectorAll(".navigation a")
  .forEach(link => {

    link.addEventListener("click", () => {

      navigation.classList.remove("open");

      document.body.classList.remove(
        "menu-open"
      );

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });


// -----------------------------
// HEADER SCROLL
// -----------------------------

function updateHeader() {

  if (window.scrollY > 45) {

    siteHeader.classList.add("scrolled");

  } else {

    siteHeader.classList.remove("scrolled");

  }

}

window.addEventListener(
  "scroll",
  updateHeader
);

updateHeader();


// -----------------------------
// SCROLL REVEALS
// -----------------------------

const revealElements =
  document.querySelectorAll(
    ".intro-image, .intro-content, .about-photo, .about-content, .approach-card, .service, .philosophy-photo, .philosophy-content, .video-heading, .video-frame, .location-copy, .map-wrapper, .contact-links"
  );


const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add(
          "reveal-visible"
        );

        revealObserver.unobserve(
          entry.target
        );

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(element => {

  element.classList.add("reveal");

  revealObserver.observe(element);

});


// -----------------------------
// YEAR
// -----------------------------

const year =
  document.getElementById("year");

if (year) {
  year.textContent =
    new Date().getFullYear();
}
