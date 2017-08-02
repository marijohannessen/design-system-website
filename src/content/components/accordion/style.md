## Color

| ATTRIBUTE          | SCSS       | HEX        |
|----------------|------------|------------|
| Label          | $text-01   |  #152935   |
| Body           | $text-01   |  #152935   |
| Chevron        | $ui-05     |  #8c9ba5   |
| Chevron:hover  | $brand-01  |  #3d70b2   |
| Divider line   | $ui-04     |  #dfe3e6   |

## Typography

All Accordion labels are set in sentence case and should not exceed three words. Set body text appropriately based on content.

| PROPERTY   | FONT-SIZE (px/rem)     | FONT-WEIGHT  |
|------------|-----------------|--------------|
| Label      | 16 / 1     | Normal / 400 |
| Body       | 14 / 0.875 | Normal / 400 |

## Structure

There is no limit to the height of an open row, however, the padding specs below should be followed. The width of an Accordion varies based on the content, layout, and page design. The chevron icon can be found on the [iconography](/style/iconography/library) library page.

| HEIGHT       | PX | REM   |
|--------------|----|-------|
| Row          | 40 | 2.5   |
| Chevron      | 10 | 0.635 |
| Divider line | 1  | -     |

### Spacing

Avoid having any text within 16px / 1rem of the Accordion's sides. Additionally, include padding between labels, body copy, and separation lines to provide breathing room between elements.

 ![Structure and spacing measurements for Accordion](images/accordion-style-1.png)
_Structure and spacing measurements for Accordion | px / rem_ 

<div data-insert-component="InteractiveSpec">
  <ul
    data-accordion
    class="bx--accordion"
    data-spec-margin
    data-spec-dimensions
  >
    <li
      tabIndex="0"
      data-accordion-item
      class="bx--accordion__item bx--accordion__item--active"
    >
      <div class="bx--accordion__heading" data-spec-padding>
        <svg
          class="bx--accordion__arrow"
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fillRule="evenodd"
        >
          <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z" />
        </svg>
        <p class="bx--accordion__title" data-spec-margin>
          Label
        </p>
      </div>
      <div class="bx--accordion__content" data-spec-padding>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </li>
    <li
      tabIndex="0"
      data-accordion-item
      class="bx--accordion__item"
    >
      <div class="bx--accordion__heading" data-spec-padding>
        <svg
          class="bx--accordion__arrow"
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fillRule="evenodd"
          data-spec-dimensions="height"
        >
          <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z" />
        </svg>
        <p class="bx--accordion__title" data-spec-margin>
          Label with multiple words
        </p>
      </div>
      <div class="bx--accordion__content" data-spec-padding>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </li>
    <li
      tabIndex="0"
      data-accordion-item
      class="bx--accordion__item"
    >
      <div class="bx--accordion__heading" data-spec-padding>
        <svg
          class="bx--accordion__arrow"
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fillRule="evenodd"
        >
          <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z" />
        </svg>
        <p class="bx--accordion__title" data-spec-margin>Label</p>
      </div>
      <div class="bx--accordion__content" data-spec-padding>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </li>
    <li
      tabIndex="0"
      data-accordion-item
      class="bx--accordion__item"
    >
      <div class="bx--accordion__heading" data-spec-padding>
        <svg
          class="bx--accordion__arrow"
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fillRule="evenodd"
        >
          <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z" />
        </svg>
        <p class="bx--accordion__title" data-spec-margin>Label</p>
      </div>
      <div class="bx--accordion__content" data-spec-padding>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </li>
  </ul>
</div>

| SPACING              | PX | REM |
|----------------------|----|-----|
| Chevron & label      | 16 | 1   |
| Label & content      | 16 | 1   |
| Content & line       | 24 | 1.5 |
