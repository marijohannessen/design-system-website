## Color

| ATTRIBUTE              | SCSS      | HEX       |
|--------------------|-----------|-----------|
| Icon               | $brand-01 | #3d70b2   |
| Icon: hover        | $brand-02 | #5596e6   |
| Text               | $text-01  | #152935   |
| Tooltip background | $ui-01    | #ffffff   |
| Tooltip border     | $ui-04    | #dfe3e6   |

---
***
>  
![Closed and open states for a Tooltip](images/tooltip-style-1.png)

_Example of closed and open states for a Tooltip_

## Typography

Tooltip labels and text should be set in sentence case.

| PROPERTY | FONT-SIZE (px/rem)     | FONT-WEIGHT  |
|----------|-----------------|--------------|
| Header   | 16 / 1     | Bold / 700   |
| Label    | 14 / 0.875 | Bold / 700   |
| Text     | 14 / 0.875 | Normal / 400 |

## Layer

| LAYER      | ELEVATION     | BOX-SHADOW      |
|------------|----------|----------|
| Overlay    | 8        | `0 4px 8px 0 rgba(0,0,0,0.10);`  |

## Structure

| PROPERTY                | PX  | REM   |
|-------------------------|-----|-------|
| Tooltip: width          | 240 | 15    |
| Tooltip: height         | Varies based on content | - |
| Icon: width & height    | 16  | 1     |
| Spacing: label & icon   | 10  | 0.625 |
| Spacing: icon & Tooltip | 10  | 0.625 |
| Spacing: internal       | 24  | 1.5   |

---
***
>  
![Structure and spacing measurements for a tooltip](images/tooltip-style-2.png)

_Structure and spacing measurements for a Tooltip | px / rem_

### Placement

Tooltips should always be placed below the Tooltip icon unless it is within the height of the Tooltip box plus 16px / 1em of the bottom of the page. In that instance, the Tooltip should appear to the right of the Tooltip icon. On mobile, Tooltips can only appear below the Tooltip icon.

![Placement examples for a Tooltip](images/tooltip-style-3.png)
_Placement examples for a Tooltip_

<div data-insert-component="InteractiveSpec">
  <a class="bx--tooltip__trigger">
    JavaScript Tooltip
    <svg tabindex="0" data-tooltip-trigger data-tooltip-target="#unique-tooltip" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd">
      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm2 8H6v-1h1V8H6V7h3v4h1v1z"></path>
    </svg>
  </a>
  <div id="unique-tooltip" data-floating-menu-direction="bottom" class="bx--tooltip">
    <p class="bx--tooltip__label">Tooltip label</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, seed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
</div>
