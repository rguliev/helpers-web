This is just copied from `datetimepicker` jquery plugin. For more details see homepage of the plugin: https://xdsoft.net/jqplugins/datetimepicker/.

# Example
```javascript
jQuery.datetimepicker.setLocale('ru');
$('.dateinput').datetimepicker({ 
    timepicker: false, 
    format: 'Y-m-d', 
    mask: true, 
    maxDate: '0', 
    scrollMonth: false, 
    scrollInput: false, 
    validateOnBlur: false, 
    yearStart: 1900, 
    minDate: '1900-01-01' 
});
    
$('.timeinput').datetimepicker({
    datepicker:false, 
    format:'H:i', 
    scrollInput:false,
     mask:true
});
```