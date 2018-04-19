/**
 * @summary Show or hide 
 * @author Rustam Guliev <glvrst@gmail.com>
 * @link https://github.com/rguliev/helpers-web
 */
// Scroll to top
$("#scroll_up").click(function () {
  $(window).scrollTop(0);
});
// Scroll to bottom with respect to window height
$("#scroll_down").click(function () {
  $(window).scrollTop($(document).height() - $(window).height());
});
// Show or hide scroll buttons
$(window).scroll(function(){
  $(window).scrollTop() > 20 ? $("#scroll_up").show() : $("#scroll_up").hide();
  $(window).scrollTop() < $(document).height() - $(window).height() - 20 ? $("#scroll_down").show() : $("#scroll_down").hide()
});