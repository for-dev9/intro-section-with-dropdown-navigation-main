var hamburger = document.getElementById('mobileMenu');
var closeMobileMenu = document.getElementById('closeMobileMenu');
var mobileMenuDiv = document.getElementById('mobileMenuDiv');
var modal = document.getElementById('modal');

var subMenus = document.querySelectorAll('.subMenu');
var menuIcons = document.querySelectorAll('.menuIcon');
var menus = document.querySelectorAll('.menu');

hamburger.addEventListener('click', hamburgerClick);
closeMobileMenu.addEventListener('click', closeMobileMenuClick);
menus.forEach((menu) => menu.addEventListener('click', onMenuClick));
menus.forEach((menu) => menu.addEventListener('focusout', onMenuFocusout));

window.onresize = reportWindowSize;
function reportWindowSize() {
  if (!modal.classList.contains('hidden')) {
    // modal.classList.add('hidden');
    // mobileMenuDiv.classList.add('-right-full');
    // closeMobileMenu.classList.add('hidden');
  }
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
  const subMenuID = e.target.getAttribute('data-target');
  document.getElementById(subMenuID).classList.toggle('hidden');

  const iconID = e.target.getAttribute('menu-icon');
  document.getElementById(iconID).classList.toggle('menuIconRotate');
}

function onMenuFocusout(e) {
  if (!hamburger.classList.contains('absolute')) {
    setTimeout(function () {
      subMenus.forEach((e) => e.classList.add('hidden'));
      menuIcons.forEach((e) => e.classList.remove('menuIconRotate'));
    }, 100);
  }
}
