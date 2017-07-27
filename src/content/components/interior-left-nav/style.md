## Color

| ATTRIBUTE                      | SCSS       | HEX      |
|----------------------------|------------|----------|
| Background                 | $ui-01     | #ffffff  |
| Background: active, hover  | $ui-01     | #f0f3f6  |
| Text                       | $text-01   | #152935  |
| Text: active, :hover       | $brand-01  | #3d70b2  |
| Border-right               | $ui-04     | #dfe3e6  |
| Footer, nav closed         | $ui-01     | #f0f3f6  |
| Footer, nav closed: hover  | $ui-04     | #dfe3e6  |
| Caret                      | $ui-05     | #8c9ba5  |
| Chevron                    | $brand-01  | #152935  |

<div data-insert-component="ImageGrid">
  <div>
    ![Various select and hover states for the Interior Left Navigation](images/interior-left-nav-style-1.png)
  </div>
  <div>
    ![Various select and hover states for the Interior Left Navigation](images/interior-left-nav-style-2.png)
  </div>
</div>

![Various select and hover states for the Interior Left Navigation](images/interior-left-nav-style-3.png)

_Select and hover states for Interior Left Navigation_


## Typography

All left navigation text should be set in title case, with the first letter of each word capitalized. Labels should not exceed three words.

| Property                | Font-size (px/rem)      | Font-weight  |
|-------------------------|-----------------|--------------|
| List item               | 14 / 0.875 | Bold / 700   |
| List item               | 12 / 0.75  | Roman / 300  |
| List item: selected    | 12 / 0.75  | Bold / 700   |

## Layer

| LAYER      | ELEVATION     | BOX-SHADOW      |
|------------|----------|----------|
| Temporary nav     | 16        | `0 8px 16px 0 rgba(0,0,0,0.10);`  |

## Structure

The width of the menu stays consistent, while the menu height varies based on the height of the viewport, always spanning from the global header to the bottom of the viewport.

| PROPERTY                      | PX  | REM    |
|-------------------------------|-----|--------|
| Height                        | Varies by browser height||
| Width: open                   | 200 | 12.5   |
| Width: closed                 | 48  | 3      |
| Right-border                  | 1   | -      |
| Height: collapse section      | 48  | 3      |
| Spacing: internal sides       | 20  | 1.25   |
| Spacing: top                  | 24  | 1.5    |
| Spacing: collapse and chevron | 12  | 0.75     |
| Spacing: chevron & bottom     | 14  | 0.875   |

<div data-insert-component="ImageGrid">
  <div>
    ![Structure and spacing measurements for the open Interior Left Nav](images/interior-left-nav-style-4.png)
  </div>
  <div>
    ![Interior left nav collapse](images/interior-left-nav-style-5.png)
  </div>
</div>

_Structure and spacing measurements for open and closed Interior Left Nav | px / rem_

<div data-insert-component="InteractiveSpec">
  <nav role="navigation" aria-label="Interior Left Navigation" data-interior-left-nav class="bx--interior-left-nav bx--interior-left-nav--collapseable">
    <ul role="menubar" class="left-nav-list" data-interior-left-nav-list aria-hidden="false">
      <li role="menuitem" tabindex="0" class="left-nav-list__item" data-interior-left-nav-item>
        <a class="left-nav-list__item-link">
          Example Item 1
        </a>
      </li>
      <li role="menuitem" tabindex="0" class="left-nav-list__item" data-interior-left-nav-item>
        <a class="left-nav-list__item-link">
          Example Item 2
        </a>
      </li>
      <li role="menuitem" tabindex="0" class="left-nav-list__item left-nav-list__item--has-children" data-interior-left-nav-item
        data-interior-left-nav-with-children>
        <a class="left-nav-list__item-link">
          Example Item 3
          <div class="left-nav-list__item-icon">
            <svg class="bx--interior-left-nav__icon" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
              <path d="M10 0L5 5 0 0z"></path>
            </svg>
          </div>
        </a>
        <ul role="menu" aria-hidden="true" class="left-nav-list left-nav-list--nested" data-interior-left-nav-nested-list>
          <li class="left-nav-list__item" data-interior-left-nav-nested-item role="menuitem" tabindex="-1">
            <a href="#example-item-1A" class="left-nav-list__item-link" data-interior-left-nav-item-link tabindex="-1">Example Item 1A</a>
          </li>
          <li class="left-nav-list__item" data-interior-left-nav-nested-item role="menuitem" tabindex="-1">
            <a href="#example-item-1B" class="left-nav-list__item-link" data-interior-left-nav-item-link tabindex="-1">Example Item 1B</a>
          </li>
          <li class="left-nav-list__item" data-interior-left-nav-nested-item role="menuitem" tabindex="-1">
            <a href="#example-item-1C" class="left-nav-list__item-link" data-interior-left-nav-item-link tabindex="-1">Example Item 1C</a>
          </li>
          <li class="left-nav-list__item" data-interior-left-nav-nested-item role="menuitem" tabindex="-1">
            <a href="#example-item-1D" class="left-nav-list__item-link" data-interior-left-nav-item-link tabindex="-1">Example Item 1D</a>
          </li>
        </ul>
      </li>
      <li role="menuitem" tabindex="0" class="left-nav-list__item left-nav-list__item--has-children" data-interior-left-nav-item
        data-interior-left-nav-with-children>
        <a class="left-nav-list__item-link">
          Example Item 4
          <div class="left-nav-list__item-icon">
            <svg class="bx--interior-left-nav__icon" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
              <path d="M10 0L5 5 0 0z"></path>
            </svg>
          </div>
        </a>
        <ul role="menu" aria-hidden="true" class="left-nav-list left-nav-list--nested" data-interior-left-nav-nested-list>
          <li class="left-nav-list__item" data-interior-left-nav-nested-item role="menuitem" tabindex="-1">
            <a href="#example-item-2A" class="left-nav-list__item-link" data-interior-left-nav-item-link tabindex="-1">Example Item 2A</a>
          </li>
          <li class="left-nav-list__item" data-interior-left-nav-nested-item role="menuitem" tabindex="-1">
            <a href="#example-item-2B" class="left-nav-list__item-link" data-interior-left-nav-item-link tabindex="-1">Example Item 2B</a>
          </li>
          <li class="left-nav-list__item" data-interior-left-nav-nested-item role="menuitem" tabindex="-1">
            <a href="#example-item-2C" class="left-nav-list__item-link" data-interior-left-nav-item-link tabindex="-1">Example Item 2C</a>
          </li>
          <li class="left-nav-list__item" data-interior-left-nav-nested-item role="menuitem" tabindex="-1">
            <a href="#example-item-2D" class="left-nav-list__item-link" data-interior-left-nav-item-link tabindex="-1">Example Item 2D</a>
          </li>
        </ul>
      </li>
    </ul>

    <div class="bx--interior-left-nav-collapse" data-interior-left-nav-collapse>
      <a class="bx--interior-left-nav-collapse__link" href="#">
        <svg class="bx--interior-left-nav-collapse__arrow" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
          <path d="M7.5 10.6L2.8 6l4.7-4.6L6.1 0 0 6l6.1 6z"></path>
        </svg>
      </a>
    </div>
  </nav>
</div>
