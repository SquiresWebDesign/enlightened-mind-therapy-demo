/* --------------------------------
   MOBILE NAVIGATION
-------------------------------- */

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

  menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("open");
  });

  navigation.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {
      navigation.classList.remove("open");
    });

  });

}


/* --------------------------------
   SCROLL REVEAL
-------------------------------- */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => {
  revealObserver.observe(element);
});


/* --------------------------------
   SMOOTH ANCHOR SCROLL
-------------------------------- */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", event => {

    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* --------------------------------
   HEADER SCROLL EFFECT
-------------------------------- */

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

  if (!header) {
    return;
  }

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


/* --------------------------------
   CURRENT YEAR
-------------------------------- */

const footerYear = document.querySelector(".footer-year");

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}
