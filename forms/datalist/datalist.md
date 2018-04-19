This is impementation of [datalist](https://www.w3schools.com/tags/tag_datalist.asp) input types. HTML datalist is not well supported yet, so some helper needed.
The solution is based on [awesomplete](http://leaverou.github.io/awesomplete). Key differences/additions:

- Multifields support. Original repo does not work well with multifields.
- Pop up on `click` or `focusin` added to make an input be like datalist.
- Mulitfield support leaded to slight chages in html template. From original `<input class="awesomplete" data-list="<list of options separated by comma"/>` it became:

```html
<div class="awesomplete">
    <input data-list="<list of options separated by comma>"/>
    <ul hidden role="listbox"></ul>
    <span class="visually-hidden" role="status" aria-live="assertive" aria-atomic="true">Start to type to see options</span>
</div>
```

# USAGE
If you do not need multifields you can use just original repo with it's syntax. The only thin should be added: `awesomepletepopup.js` to make options pop up as in datalist.
Otherwise, if you need or may need multifields use files from this repo like this:

```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="awesomplete.js"></script>
<link rel="stylesheet" type="text/css" href="awesomplete.css" />

....

<div class="awesomplete">
    <input data-list="<list of options separated by comma>"/>
    <ul hidden role="listbox"></ul>
    <span class="visually-hidden" role="status" aria-live="assertive" aria-atomic="true">Start to type to see options</span>
</div>

...

<script type="text/javascript" src="awesompletepopup.js"></script>
```

# TODO:
Remove `span` from template since it seems useless if options pop up on focus in.
