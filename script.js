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

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (event) {

    const targetId = this.getAttribute("href");

    if (targetId === "#top") {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      return;
    }

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
