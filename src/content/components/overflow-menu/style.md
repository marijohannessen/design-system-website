## Color

| ATTRIBUTE          | SCSS        | HEX     |
|----------------|-------------|---------|
| Icon           | $ui-05      | #8c9ba5 |
| Background     | $ui-01      | #ffffff |
| Text           | $text-01    | #152935 |
| Icon: hover    | $brand-01   | #3d70b2 |
| Text: hover    | $inverse-01 | #ffffff |
| Warning: hover | $support-01 | #e71d32 |
| Line           | $ui-04      | #dfe3e6 |

<div data-insert-component="ImageGrid">
  <div>
    ![Overflow menu text hover example](images/overflow-menu-style-1.png)
  </div>
  <div>
    ![Overflow menu warning hover example](images/overflow-menu-style-2.png)
  </div>
</div>
_Text and warning hover examples for Overflow Menu_

## Typography

Overflow Menu text should be set in set in sentence case with the first letter of each word capitalized.

| PROPERTY | FONT-SIZE (px/rem)    | FONT-WEIGHT |
|------------|-----------------|--------------|
| Label      | 14 / 0.875 | Normal / 400 |

## Layer

| LAYER      | ELEVATION     | BOX-SHADOW      |
|------------|----------|----------|
| Overlay    | 8        | `0 4px 8px 0 rgba(0,0,0,0.10);`  |

## Structure

The height of an Overflow Menu is determined by the amount of content in the menu. The Overflow Menu icon can be found in the [iconography](/style/iconography/library) library.

| PROPERTY             | PX                      | REM   |
|----------------------|-------------------------|-------|
| Width                | 180                     | 11.25 |
| Height               | Varies based on content |       |
| Divider line         | 1                       | -     |
| Internal spacing     | 16                      | 1     |
| Spacing: icon & menu | 8                       | 0.5   |

---
***
> 
![Structure and spacing measurements for an overflow menu](images/overflow-menu-style-3.png)

_Structure and spacing measurements for Overflow Menu | px / rem_

<div data-insert-component="InteractiveSpec">
  <div data-overflow-menu tabindex="0" aria-label="Overflow menu description" class="bx--overflow-menu">
    <svg class="bx--overflow-menu__icon" width="4" height="20" viewBox="0 0 4 20" fill-rule="evenodd">
      <circle cx="2" cy="2" r="2"></circle>
      <circle cx="2" cy="10" r="2"></circle>
      <circle cx="2" cy="18" r="2"></circle>
    </svg>
    <ul class="bx--overflow-menu-options">
      <li class="bx--overflow-menu-options__option">
        <button class="bx--overflow-menu-options__btn">Stop app</button>
      </li>
      <li class="bx--overflow-menu-options__option">
        <button class="bx--overflow-menu-options__btn">Restart app</button>
      </li>
      <li class="bx--overflow-menu-options__option">
        <button class="bx--overflow-menu-options__btn">Rename app</button>
      </li>
      <li class="bx--overflow-menu-options__option">
        <button class="bx--overflow-menu-options__btn">Edit routes and access</button>
      </li>
      <li class="bx--overflow-menu-options__option bx--overflow-menu-options__option--danger">
        <button class="bx--overflow-menu-options__btn">Delete app</button>
      </li>
    </ul>
  </div>
</div>
