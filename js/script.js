const hamburger = document.getElementById('mobileMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');
const mobileMenuDiv = document.getElementById('mobileMenuDiv');
const modal = document.getElementById('modal');

const subMenus = document.querySelectorAll('.subMenu');
const menuIcons = document.querySelectorAll('.menuIcon');
const menus = document.querySelectorAll('.menu');

hamburger.addEventListener('click', hamburgerClick);
closeMobileMenu.addEventListener('click', closeMobileMenuClick);
menus.forEach((menu) => menu.addEventListener('click', onMenuClick));
menus.forEach((menu) => menu.addEventListener('focusout', onMenuFocusout));

window.onresize = clearMenu;
function clearMenu() {
  if (!modal.classList.contains('hidden')) {
    showHideMenu();
  }

  subMenus.forEach((e) => e.classList.add('hidden'));
  menuIcons.forEach((e) => e.classList.remove('menuIconRotate'));
}

function hamburgerClick() {
  showHideMenu();
}

function closeMobileMenuClick() {
  showHideMenu();
}

function showHideMenu() {
  mobileMenuDiv.classList.toggle('-right-full');
  mobileMenuDiv.classList.toggle('right-0');
  hamburger.classList.toggle('hidden');
  closeMobileMenu.classList.toggle('hidden');
  document.getElementById('modal').classList.toggle('hidden');
}

function onMenuClick(e) {
  const subMenuID = e.target.parentElement.getAttribute('data-target');
  const iconID = e.target.parentElement.getAttribute('menu-icon');

  setTimeout(function () {
    if (subMenuID)
      document.getElementById(subMenuID).classList.toggle('hidden');
    if (iconID)
      document.getElementById(iconID).classList.toggle('menuIconRotate');
  }, 90);
}

function onMenuFocusout() {
  if (
    window.getComputedStyle(document.getElementById('hamBurgerDiv'))
      .visibility === 'hidden'
  ) {
    setTimeout(function () {
      subMenus.forEach((e) => e.classList.add('hidden'));
      menuIcons.forEach((e) => e.classList.remove('menuIconRotate'));
    }, 80);
  }
}
