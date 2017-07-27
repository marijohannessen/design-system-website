## Color

| ATTRIBUTE             | SCSS          | HEX      |
|-------------------|---------------|-----------|
| Background        | $field-01     | #3d70b2 @ 10% |
| Text: user input  | $text-01      | #152935  |
| Text: placeholder | $text-03      | #5a6872  |
| Icon              | $ui-05        | #8c9ba5  |

![Normal, hover, and input search states](images/search-style-1.png)

_Examples of normal, hover, and input Search states_

## Typography

Search text should be set in sentence case, with only the first letter of the first word capitalized.

| PROPERTY        | FONT-SIZE (px/rem)     | FONT-WEIGHT       |
|------------------|-----------------|---------------------|
| Placeholder text | 14 / 0.875 | Normal italic / 400 |
| Text             | 14 / 0.875 | Bold / 700          |

## Structure

The width of the Search field should appropriately fit the design and layout of content. Larger Search fields can include a filter button and a list/card view button.

| PROPERTY             | PX | REM   |
|----------------------|----|-------|
| Height: regular      | 44 | 2.75  |
| Height: small        | 32 | 2     |
| Icon: search         | 20 | 1.25  |
| Icon: small search   | 16 | 1     |
| Spacing: search icon | 10 | 0.625 |
| Spacing: small search icon | 12 | 0.75  |

![Structure and spacing measurements for regular search](images/search-style-2.png)
_Structure and spacing measurements for Regular Search | px | rem_
![Structure and spacing measurements for small search](images/search-style-3.png)
_Structure and spacing measurements for Small Search | px | rem_

<div data-insert-component="InteractiveSpec">
  <div data-search class="bx--search bx--search--lg" role="search">
    <svg class="bx--search-magnifier" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd">
      <path d="M6 2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0-2C2.7 0 0 2.7 0 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zM16 13.8L13.8 16l-3.6-3.6 2.2-2.2z"></path>
      <path d="M16 13.8L13.8 16l-3.6-3.6 2.2-2.2z"></path>
    </svg>
    <label class="bx--label" id="search-input-label-2" for="search__input-1">Search</label>
    <input class="bx--search-input" type="text" role="search" id="search__input-1" placeholder="Search" aria-labelledby="search-input-label-2">
    <svg class="bx--search-close bx--search-close--hidden" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd">
      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z"></path>
    </svg>
    <button class="bx--search-button" type="button" aria-label="Filter button">
      <svg class="bx--search-filter" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd">
        <path d="M5 0C3.7 0 2.6.8 2.2 2H0v2h2.2C2.6 5.2 3.7 6 5 6c1.3 0 2.4-.8 2.8-2H16V2H7.8C7.4.8 6.3 0 5 0zm0 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM5 10c-1.3 0-2.4.8-2.8 2H0v2h2.2c.4 1.2 1.5 2 2.8 2 1.3 0 2.4-.8 2.8-2H16v-2H7.8c-.4-1.2-1.5-2-2.8-2zm0 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"></path>
        <path d="M11 5c-1.3 0-2.4.8-2.8 2H0v2h8.2c.4 1.2 1.5 2 2.8 2 1.3 0 2.4-.8 2.8-2H16V7h-2.2c-.4-1.2-1.5-2-2.8-2zm0 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"></path>
      </svg>
    </button>
    <button class="bx--search-button" type="button" data-search-toggle aria-label="Grid and list toggle button">
      <div data-search-view="grid">
        <svg class="bx--search-view" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd">
          <path d="M0 0h7v7H0zM9 0h7v7H9zM0 9h7v7H0zM9 9h7v7H9z"></path>
        </svg>
      </div>
      <div class="bx--search-view--hidden" data-search-view="list">
        <svg class="bx--search-view" width="16" height="14" viewBox="0 0 16 14" fill-rule="evenodd">
          <path d="M0 0h16v2H0zM0 4h16v2H0zM0 8h16v2H0zM0 12h16v2H0z"></path>
        </svg>
      </div>
    </button>
  </div>
</div>
