/**
 * @summary Use Enter key as Tab.
 * @author Rustam Guliev <glvrst@gmail.com>
 * @link https://github.com/rguliev/helpers-web
 */
$(':input').keydown(function (e) {
  var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
  if (key == 13 && $(this).attr('type') != 'submit' && $(this).attr('type') != 'button') {
    e.preventDefault();
    var inputs = $(this).closest('form').find(':input:visible:enabled[tabindex!="-1"]').not(':input[readonly]');
    if ((inputs.length-1) == inputs.index(this))
      $(':input:enabled:visible:first').focus();
    else
      inputs.eq(inputs.index(this) + 1).focus();
  }
});