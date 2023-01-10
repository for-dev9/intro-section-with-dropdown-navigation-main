var hamburger = document.getElementById('mobileMenu');
var closeMobileMenu = document.getElementById('closeMobileMenu');
var mobileMenuDiv = document.getElementById('mobileMenuDiv');

var subMenus = document.querySelectorAll('.subMenu');
var menuIcons = document.querySelectorAll('.menuIcon');
var menus = document.querySelectorAll('.menu');

hamburger.addEventListener('click', hamburgerClick);
closeMobileMenu.addEventListener('click', closeMobileMenuClick);
menus.forEach((menu) => menu.addEventListener('click', onMenuClick));
menus.forEach((menu) => menu.addEventListener('focusout', onMenuFocusout));

function hamburgerClick() {
  mobileMenuDiv.classList.toggle('-right-full');
  mobileMenuDiv.classList.toggle('right-0');
  hamburger.classList.toggle('hidden');
  closeMobileMenu.classList.toggle('hidden');
}

function closeMobileMenuClick() {
  mobileMenuDiv.classList.toggle('-right-full');
  mobileMenuDiv.classList.toggle('right-0');
  hamburger.classList.toggle('hidden');
  closeMobileMenu.classList.toggle('hidden');
}

function onMenuClick(e) {
  const classString = e.target.getAttribute('data-target');
  document.getElementById(classString).classList.toggle('hidden');
  document.getElementById('menuIcon1').classList.toggle('menuIconRotate');
}

function onMenuFocusout(e) {
  setTimeout(function () {
    subMenus.forEach((e) => e.classList.add('hidden'));
    menuIcons.forEach((e) => e.classList.remove('menuIconRotate'));
  }, 100);
}
