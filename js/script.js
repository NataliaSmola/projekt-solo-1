/* global Chart */

function toggleMenu(visible) {
  document.querySelector('.sidebar-menu').classList.toggle('show', visible)
  console.log('test');
}
document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu()
});
