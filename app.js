const body = document.body;
// const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const bgColorsBody = ["#ffd199", "#f0e4fa", "#e4ecfa", "#fff6cc", "#bbeebc"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

/* When item is clicked */
function clickItem(item, index) {
  menu.style.removeProperty("--timeOut");

  if (activeItem == item) return;

  if (activeItem) {
    activeItem.classList.remove("active");
  }

  item.classList.add("active");
  body.style.backgroundColor = bgColorsBody[index];
  activeItem = item;
  offsetMenuBorder(activeItem, menuBorder);
}

/* offset border */
function offsetMenuBorder(element, menuBorder) {
  const offsetActiveItem = element.getBoundingClientRect();
  const left =
    Math.floor(
      offsetActiveItem.left -
        menu.offsetLeft -
        (menuBorder.offsetWidth - offsetActiveItem.width) / 2
    ) + "px";
  menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
}

/* offset border call */
offsetMenuBorder(activeItem, menuBorder);

/* setting listeners on items */
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => clickItem(item, index));
});

/* window resize */
window.addEventListener("resize", () => {
  offsetMenuBorder(activeItem, menuBorder);
  menu.style.setProperty("--timeOut", "none");
});
