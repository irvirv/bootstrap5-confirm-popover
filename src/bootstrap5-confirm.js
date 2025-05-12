/**
 * Bootstrap 5 ConfirmPopover Plugin
 * Lightweight confirmation popover using Bootstrap 5's native API.
 */

class ConfirmPopover {
  constructor(options) {
    this.element = options.element;
    this.message = options.message || "Are you sure?";
    this.confirmText = options.confirmText || "Yes";
    this.cancelText = options.cancelText || "No";
    this.onConfirm = options.onConfirm || function () {};
    this.onCancel = options.onCancel || function () {};
    this.placement = options.placement || "top";
    this.singleButton = options.singleButton || false;
    this.confirmColor = options.confirmColor || "primary";

    this._showPopover();
  }

  _showPopover() {
    bootstrap.Popover.getInstance(this.element)?.dispose();

    const content = this.singleButton
      ? `
        <div class="text-center">
          <p class="mb-2">${this.message}</p>
          <div class="d-flex justify-content-center">
            <button class="btn btn-sm btn-${this.confirmColor} confirm-yes">${this.confirmText}</button>
          </div>
        </div>`
      : `
        <div class="text-center">
          <p class="mb-2">${this.message}</p>
          <div class="d-flex justify-content-center gap-2">
            <button class="btn btn-sm btn-primary confirm-yes">${this.confirmText}</button>
            <button class="btn btn-sm btn-secondary confirm-no">${this.cancelText}</button>
          </div>
        </div>`;

    const popover = new bootstrap.Popover(this.element, {
      trigger: 'focus',
      html: true,
      sanitize: false,
      placement: this.placement,
      content
    });

    popover.show();

    setTimeout(() => {
      const popoverEl = document.querySelector('.popover');
      if (!popoverEl) return;

      popoverEl.querySelector('.confirm-yes')?.addEventListener('click', () => {
        popover.hide();
        this.onConfirm();
      });

      if (!this.singleButton) {
        popoverEl.querySelector('.confirm-no')?.addEventListener('click', () => {
          popover.hide();
          this.onCancel();
        });
      }
    }, 50);
  }
}

function createConfirmPopover(options) {
  return new ConfirmPopover(options);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-confirm="true"]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();

      const single = el.getAttribute('data-single-button') === "true";
      const confirmColor = el.getAttribute('data-confirm-color') || "primary";

      createConfirmPopover({
        element: el,
        message: el.getAttribute('data-message') || "Are you sure?",
        confirmText: el.getAttribute('data-confirm-text') || "Yes",
        cancelText: el.getAttribute('data-cancel-text') || "No",
        singleButton: single,
        confirmColor: confirmColor,
        onConfirm: () => {
          const url = el.getAttribute('href') || el.dataset.href;
          if (url) window.location.href = url;
        }
      });
    });
  });
});
