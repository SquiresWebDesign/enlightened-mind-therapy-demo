const menuButton =
  document.getElementById("menuButton");

const navigation =
  document.getElementById("navigation");

const header =
  document.getElementById("header");


// -----------------------------
// MOBILE NAVIGATION
// -----------------------------

menuButton.addEventListener("click", () => {

  const open =
    navigation.classList.toggle("open");

  menuButton.setAttribute(
    "aria-expanded",
    String(open)
  );

  document.body.classList.toggle(
    "menu-open",
    open
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

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });


// -----------------------------
// HEADER ON SCROLL
// -----------------------------

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    header.style.position = "fixed";
    header.style.top = "0";
    header.style.background =
      "rgba(32,40,37,.96)";
    header.style.backdropFilter =
      "blur(12px)";

  } else {

    header.style.position = "absolute";
    header.style.top = "34px";
    header.style.background =
      "transparent";
    header.style.backdropFilter =
      "none";

  }

});


// -----------------------------
// REVEAL ANIMATIONS
// -----------------------------

const revealElements =
  document.querySelectorAll(
    ".intro-copy, .intro-photo, .approach-card, .service, .philosophy-copy, .founder-copy, .founder-photo, .contact-action"
  );


const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) {
          return;
        }

        entry.target.style.opacity = "1";
        entry.target.style.transform =
          "translateY(0)";

        observer.unobserve(
          entry.target
        );

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(element => {

  element.style.opacity = "0";

  element.style.transform =
    "translateY(25px)";

  element.style.transition =
    "opacity .7s ease, transform .7s ease";

  observer.observe(element);

});


// -----------------------------
// YEAR
// -----------------------------

document.getElementById("year").textContent =
  new Date().getFullYear();
