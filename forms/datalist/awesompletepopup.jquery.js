/**
 * @summary Make awesompletes work as datalists: popup options on clink and focus in.
 * @author Rustam Guliev <glvrst@gmail.com>
 * @link https://github.com/rguliev/helpers-web
 */
$(document).on('focusin', 'input.awesomplete', function(){
    for (var i = Awesomplete.count - 1; i >= 0; i--) {
        if (Awesomplete.all[i].input === this) { 
            return; 
        }
    }
    new Awesomplete(this);
});

$(document).on('click', 'input.awesomplete', function(){
    var awsmp = false;
    for (var i = Awesomplete.count - 1; i >= 0; i--) {
        if (Awesomplete.all[i].input === this) { 
            awsmp = Awesomplete.all[i];
            break;
        }
    }
    if (awsmp === false) {
        awsmp = new Awesomplete(this);
    }
    if (awsmp.ul.childNodes.length === 0) {
        awsmp.evaluate();
    }
    else if (awsmp.ul.hasAttribute('hidden')) {
        awsmp.open();
    }
    else {
        awsmp.close();
    }
});