Here are tools for implementing multifields: fields which can have many values. JavaScript were take from [this repo](https://github.com/maxkostinevich/jquery-multifield). Which have pretty good [demo](http://maxkostinevich.github.io/jquery-multifield/).

```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="multifield.jquery.js"></script>
...

<div class="multifield">
    <div class="row">
        <div class="col-md-12">
            <button type="button" class="btn btn-primary btnAdd">Add a row</button>
        </div>
    </div>
    <label for="mymultifield[]">Label for my multifield</label>
    <div class="form-group input-group">
        <input type="text" name="mymultifield[]">
        <span class="input-group-btn">
            <button type="button" class="btn btn-danger btnRemove" style="display: none;"> Remove </button>
        </span>
    </div>
</div>

...

<script type='text/javascript'>
$('.multifield').multifield({
    section: '.input-group',
    btnAdd:'.btnAdd',
    btnRemove:'.btnRemove'
});
</script>
```

**NOTE** Dont forget to add "[]" for inputs `name` attribute. This may lead to data lost since only one of values will be send.

## In table
Original plugin is not that convinient when you want to put multifields inside a table. For such cases following implementations may be used:


```html
...

<table>
    <thead>...</thead>
    <tbody class="multifield_table">
      <tr>
        <td><button type="button" class="btn btn-primary btnAdd"> Add a record </button></td>
        <td><input class="form-control" name="multifield1[]"/></td>
        <td><input class="form-control" name="multifield2[]"/></td>
        <td><input class="form-control" name="multifield3[]"/></td>
      </tr>
    </tbody>
</table>

...

<script type='text/javascript'>
$("tbody.multifield_table").delegate('.btnRemove', 'click', function(){
            var tbody = $(this).closest('tbody');
            $(this).closest('tr').remove();
            if (tbody.find('tr').length < 2) {
                tbody.find('tr:first-child td:last-child').remove();
            }
        })
        .delegate('.btnAdd', 'click', function(){
            var tbody = $(this).closest('tbody');
            if (tbody.find('tr').length < 2) {
                tbody.find('tr').append( "<td><button type='button' class='btn btn-danger btnRemove'> Remove </button></td>" );
            }
            $(this).closest('tr').clone().appendTo( $(this).closest('tbody') );
            tbody.find('tr:last-child .btnAdd').remove();
            tbody.find('tr:last-child td input').val("");
        });
</script>
```