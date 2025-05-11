# Bootstrap 5 Confirm Popover

A lightweight JavaScript plugin to create small confirmation popovers using Bootstrap 5's native Popover — no jQuery required. These appear more compact than most other solutions I've seen that use Bootstrap 5. 

## Usage

1. Include Bootstrap and the plugin:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="/dist/bootstrap5-confirm.js"></script>
```

2. Add a button or link:

```html
<button class="btn btn-danger"
        data-confirm="true"
        data-message="Really delete this?"
        data-href="/delete/123">
  Delete
</button>


<a href="/delete/456"
   class="btn btn-warning"
   data-confirm="true"
   data-message="Are you sure you want to remove this item?">
  Remove Item
</a>
```

## License

MIT
