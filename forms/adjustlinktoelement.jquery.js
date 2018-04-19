/**
 * @summary Adjust link to an element: when link to an element sroll a bit hiegher. By default: 120.
 * @author Rustam Guliev <glvrst@gmail.com>
 * @link https://github.com/rguliev/helpers-web
 */
function offsetAnchor() {
  if (location.hash.length !== 0) {
  window.scrollTo(window.scrollX, window.scrollY - 120);
  }
}
$(document).on('click', 'a[href^="#"]', function(event) {
  window.setTimeout(function() {offsetAnchor();}, 0);
});
window.setTimeout(offsetAnchor, 0);