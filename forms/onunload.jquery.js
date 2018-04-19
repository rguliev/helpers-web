/**
 * @summary Send a AJAX on unload (browser tab closing). This should be considered as an example, since you will have to rewrite some parts according your case. See comments bellow.
 * @author Rustam Guliev <glvrst@gmail.com>
 * @link https://github.com/rguliev/helpers-web
 */
$(window).on('unload', function (e) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", '/your/url', true); // Where to send?
  xhr.send(null);
});
