/**
 * @summary Submit a form by AJAX. This should be considered as an example, since you will have to rewrite some parts according your case. See comments bellow.
 * @author Rustam Guliev <glvrst@gmail.com>
 * @link https://github.com/rguliev/helpers-web
 */
$("#formID").submit(function (e) {
  e.preventDefault();
  var result = false;
  $.ajax({
    url: "#", // Where to send?
    data: $('#formID').serialize() + "&button=" + $(document.activeElement).attr('name') + "&action=" + window.location.pathname,
    type: 'POST',
    dataType: 'json',
    success: function (data) {
      console.log(data);
      if (data['status'] == 'success') {
        window.location.href = "#"; // Where to relocate?
        result = true;
      } else {
        // How to handle data['errors']?
        // For example:
        // $('#errors_div').html('<ul></ul>');
        // $('#errors_div>ul').css('list-style', 'none');
        // $.each(data['errors'], function (index, value) { $('#errors_div>ul').append('<li>' + value + '</li>'); });
        // $('#errors_div').show();
        result = false;
      }
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(errorThrown);
      console.log(XMLHttpRequest);
      return false;
    }
  });
  return result;
});