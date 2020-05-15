import Popper from "popper.js";

const buttons = document.querySelectorAll('[data-toggle="dropdown"]');

[...buttons].map((button) => {
  button.addEventListener("click", () => {
    const menu = button.parentNode.querySelector(".dropdown-menu");
    menu.classList.toggle("show");
    // eslint-disable-next-line no-unused-vars
    const pop = new Popper(button, menu, {
      placement: "bottom-start",
    });

    const clickOff = (evt) => {
      if (!button.contains(evt.target)) {
        document.removeEventListener("click", clickOff);
        menu.classList.toggle("show");
      }
    };

    document.addEventListener("click", clickOff);
  });

  return null;
});
