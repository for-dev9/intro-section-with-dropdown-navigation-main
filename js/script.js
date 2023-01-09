var subMenus = document.querySelectorAll('.subMenu');
var menuIcons = document.querySelectorAll('.menuIcon');
var menus = document.querySelectorAll('.menu');

menus.forEach((menu) => menu.addEventListener('click', onMenuClick));
menus.forEach((menu) => menu.addEventListener('focusout', onMenuFocusout));

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
