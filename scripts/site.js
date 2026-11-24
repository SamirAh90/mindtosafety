const menuButton = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("#primary-navigation");
const mobileMenu = window.matchMedia("(max-width: 700px)");

if (menuButton instanceof HTMLButtonElement && navigation instanceof HTMLElement) {
  const updateMenuState = () => {
    menuButton.setAttribute("aria-expanded", String(!navigation.hidden));
    menuButton.setAttribute("aria-label", navigation.hidden ? "Öppna menyn" : "Stäng menyn");
  };

  const syncMenu = () => {
    menuButton.hidden = !mobileMenu.matches;
    navigation.hidden = mobileMenu.matches;
    updateMenuState();
  };

  const toggleMenu = () => {
    navigation.hidden = !navigation.hidden;
    updateMenuState();
  };

  menuButton.addEventListener("click", toggleMenu);
  menuButton.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    toggleMenu();
  });

  navigation.addEventListener("click", (event) => {
    if (mobileMenu.matches && event.target instanceof Element && event.target.closest("a")) {
      navigation.hidden = true;
      updateMenuState();
    }
  });

  syncMenu();
  mobileMenu.addEventListener("change", syncMenu);
}
