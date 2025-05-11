# Bootstrap 5 Confirm Popover

A lightweight JavaScript plugin to create confirmation popovers using Bootstrap 5's native Popover — no jQuery required.

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
```

## License

MIT
