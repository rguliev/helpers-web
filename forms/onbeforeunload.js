/**
 * @summary Alert a message before unload (browser tab closing). This should be considered as an example, since you will have to rewrite some parts according your case. See comments bellow.
 * @author Rustam Guliev <glvrst@gmail.com>
 * @link https://github.com/rguliev/helpers-web
 */
$(window).on('beforeunload', function (e) {
    var e = e || window.event;
    var target = e.target;
    if (target.nodeName == "#document") {
        target = target.activeElement;
    }

    var allowedIDs = []; // List of IDs of elements allowing to leave without a message alert
    var is_allowed = (jQuery.inArray(target.id, allowedIDs) !== -1);
    var message = 'WARNING. PUT YOUR MESSAGE HERE'; // What message to alert?
    if (!is_allowed) {
        // For IE and Firefox
        if (e) {
            e.returnValue = message;
        }
        // For Safari
        return message;
    }
});
