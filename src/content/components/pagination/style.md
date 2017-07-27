## Color

| ATTRIBUTE          | SCSS    | HEX         |
|----------------|---------|-------------|
| Background     | $ui-01  | #ffffff     |
| Text           | $text-02| #5a6872     |
| Border         | $ui-04  | #dfe3e6     |
| Chevron        | $ui-05  | #8c9ba5     |

## Typography

Pagination text should be set in set in sentence case with the first letter of each word capitalized.

| PROPERTY       | FONT-SIZE (px/rem)     | FONT-WEIGHT |
|------------------|-----------------|--------------|
| Secondary text   | 12 / 0.75  | Normal / 400 |

## Structure

The Pagination bar is most commonly used in [Data Tables](/components/data-table). The width can vary depending on content and layout, but should span the entire width of the table it's being paired with. The size of the chevron is 10px by 5px.

| PROPERTY                           | PX        | REM   |
|------------------------------------|-----------|-------|
| Height                             | 40        | 2.5   |
| Width                              | Varies based on content and layout | |
| Border                             | 1         | -     |
| Spacing: left & right              | 16        | 1     |
| Spacing: small select & items text | 10        | 0.625  |
| Spacing: page text & chevron       | 16        | 1     |
| Spacing: chevron & page number     | 30        | 1.875 |

![Structure and spacing for pagination](images/pagination-style-1.png)
_Structure and spacing measurements for Pagination | px / rem_

<div data-insert-component="InteractiveSpec">
  <div class="bx--pagination" data-pagination>
    <div class="bx--pagination__left">
      <div class="bx--select">
        <label for="select-id" class="bx--visually-hidden">Number of items per page</label>
        <select id="select-id" class="bx--select-input" data-items-per-page>
          <option class="bx--select-option" value="10" selected>10</option>
          <option class="bx--select-option" value="15">15</option>
          <option class="bx--select-option" value="20">20</option>
          <option class="bx--select-option" value="25">25</option>
          <option class="bx--select-option" value="30">30</option>
        </select>
        <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
          <path d="M10 0L5 5 0 0z"></path>
        </svg>
      </div>
      <span class="bx--pagination__text">Items per page&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <span class="bx--pagination__text"><span data-displayed-item-range>1-10</span> of <span data-total-items>40</span> items</span>
    </div>
    <div class="bx--pagination__right">
      <span class="bx--pagination__text"><span data-displayed-page-number>1</span> of <span data-total-pages>4</span> pages</span>
      <button class="bx--pagination__button bx--pagination__button--backward" data-page-backward aria-label="Backward button">
        <svg class="bx--pagination__button-icon" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
          <path d="M7.5 10.6L2.8 6l4.7-4.6L6.1 0 0 6l6.1 6z"></path>
        </svg>
      </button>
      <label for="page-number-input" class="bx--visually-hidden">Page number input</label>
      <input id="page-number-input" type="text" class="bx--text-input" placeholder="0" value="1" data-page-number-input>
      <button class="bx--pagination__button bx--pagination__button--forward" data-page-forward aria-label="Forward button">
        <svg class="bx--pagination__button-icon" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
          <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z"></path>
        </svg>
      </button>
    </div>
  </div>
</div>
