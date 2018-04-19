/**
 * @summary Tern a string into JS date
 * @author Rustam Guliev <glvrst@gmail.com>
 * @link https://github.com/rguliev/helpers-web
 */
function str2date(datestring) {
  var reISO = /^\d{4}-\d{2}-\d{2}$/g;
  var re_other = /^(\d{2})[\/,\.](\d{2})[\/,\.](\d{2,4})$/g;
  var clear_str;
  if (reISO.test(datestring)) {
    return (new Date(datestring));
  } else if (re_other.test(datestring)){
    clear_str = datestring.replace(re_other, "$3-$2-$1");
    clear_str = clear_str.split('-');
    //clear_str[1] = ("0" + clear_str[1]).slice(-2);
    //clear_str[2] = ("0" + clear_str[2]).slice(-2);
    if (clear_str[0].length == 2) {
      if (parseInt(clear_str[0]) > 25) {
         clear_str[0] = '19' + clear_str[0];
      } else {
         clear_str[0] = '20' + clear_str[0];
      }
    }
    return new Date(clear_str[0] + '-' + clear_str[1] + '-' + clear_str[2]);
    
  } else {
    return new Date('incorrect date');
  }
}