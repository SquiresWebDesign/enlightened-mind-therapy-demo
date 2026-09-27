const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
  });
});


/* Smooth scrolling */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(event) {

    const targetId = this.getAttribute("href");

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


/* Close mobile menu if the user taps outside it */

document.addEventListener("click", event => {

  if (
    navigation.classList.contains("open") &&
    !navigation.contains(event.target) &&
    !menuButton.contains(event.target)
  ) {
    navigation.classList.remove("open");
  }

});


/* Subtle reveal animation */

const revealElements = document.querySelectorAll(
  ".service, .founder-intro-content, .approach-grid, .philosophy-content, .about-content, .location-heading, .contact-grid"
);

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("revealed");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => {
  observer.observe(element);
});
