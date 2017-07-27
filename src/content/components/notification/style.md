## Color

| ATTRIBUTE         | SCSS        | HEX     |
|---------------|-------------|---------|
| Background: Toast    | $ui-01      | #ffffff |
| Error         | $support-01 | #e71d32 |
| Success       | $support-02 | #5aa700 |
| Warning       | $support-03 | #efc100 |
| Informational | $support-04 | #5aaafa |
| Title         | $text-01    | #152935 |
| Text          | $text-02    | #5a6872 |
| X icon        | $ui-05      | #8c9ba5 |

## Typography

Notification titles should not exceed more than three words. Notification text should be set in sentence case with only the first word capitalized.

| PROPERTY | FONT-SIZE (px/rem)      | FONT-WEIGHT  |
|----------|-----------------|--------------|
| Title    | 14 / 0.875 | Bold / 700   |
| Text     | 14 / 0.875 | Normal / 400 |

## Structure

### Toast Notification

| PROPERTY           | PX  | REM    |
|--------------------|-----|--------|
| Height             | varies based on content  | 5      |
| Width              | 270 | 16.875 |
| Spacing: external  | 8   | 0.5      |
| Spacing: left, top, right | 16  | 1      |
| Spacing: text      | 16  | 1      |

![Structure and spacing for a toast notification](images/notification-style-1.png)
_Structure and spacing measurements for a Toast Notification | px / rem_

### Inline Notification

The width of an Inline Notification will vary based on content.

| PROPERTY          | PX | REM  |
|-------------------|----|------|
| Height: one-line  | 40 | 2.5  |
| Height: two lines | 56 | 3.5  |
| Icon              | 16 | 1    |
| X icon            | 12 | 0.750 |
| Border            | 1  | -    |
| Border-left       | 5  | -    |
| Spacing: icons    | 16 | 1    |
| Spacing: top, bottom | 12 | 0.75|

![Structure and spacing for an inline notification](images/notification-style-2.png)
_Structure and spacing measurements for a Inline Notification | px / rem_

<div data-insert-component="InteractiveSpec">
  <div data-notification class="bx--inline-notification bx--inline-notification--error" role="alert">
    <div class="bx--inline-notification__details">
      <svg class="bx--inline-notification__icon" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd">
        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM5.1 13.3L3.5 12 11 2.6l1.5 1.2-7.4 9.5z"></path>
      </svg>
      <div class="bx--inline-notification__text-wrapper">
        <p class="bx--inline-notification__title">Error Notification:</h3>
          <p class="bx--inline-notification__subtitle">Here is a clear explaination of the warning</p>
      </div>
    </div>
    <button data-notification-btn class="bx--inline-notification__close-button" type="button">
      <svg class="bx--inline-notification__close-icon" aria-label="close" width="10" height="10" viewBox="0 0 10 10" fill-rule="evenodd">
        <path d="M9.8 8.6L8.4 10 5 6.4 1.4 10 0 8.6 3.6 5 .1 1.4 1.5 0 5 3.6 8.6 0 10 1.4 6.4 5z"></path>
      </svg>
    </button>
  </div>
</div>
