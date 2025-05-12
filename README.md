# Bootstrap 5 Confirm Popover

A lightweight JavaScript plugin to create confirmation popovers using Bootstrap 5's native Popover — no jQuery required.

## Demo

[Live Demo on GitHub Pages](https://irvirv.github.io/bootstrap5-confirm-popover/)

[![Demo](https://img.shields.io/badge/demo-live-green?style=flat-square)](https://irvirv.github.io/bootstrap5-confirm-popover/)

## Usage

### 1. Include Bootstrap and the Plugin

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="/dist/bootstrap5-confirm.js"></script>
```

### 2. Add a Button or Link Element

#### 🔘 Button Example (2-button confirm/cancel)

```html
<button class="btn btn-danger"
        data-confirm="true"
        data-message="Really delete this?"
        data-href="/delete/123">
  Delete
</button>
```

#### 🔗 Anchor Link Example (2-button confirm/cancel)

```html
<a href="/delete/456"
   class="btn btn-warning"
   data-confirm="true"
   data-message="Are you sure you want to remove this item?">
  Remove Item
</a>
```

#### 🟢 Single Button Example ("Continue" only)

```html
<button class="btn btn-info"
        data-confirm="true"
        data-message="Ready to generate?"
        data-confirm-text="Continue"
        data-confirm-color="success"
        data-single-button="true"
        data-href="/generate/123">
  Generate Code
</button>
```

- Use `data-single-button="true"` to show only one confirmation button
- Customize the button color using any Bootstrap class: `primary`, `success`, `warning`, etc.
- Two-button mode always uses `primary` and `secondary` (simple, consistent)

## Features

- ✅ Pure Bootstrap 5 (no jQuery)
- ✅ Works with `<button>` or `<a>` tags
- ✅ Supports one- or two-button modes
- ✅ Customizable confirm button color (for single-button only)
- ✅ Small, clean, and easy to drop in

## License

MIT © Irv Wilson
