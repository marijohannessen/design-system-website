## Color

| ATTRIBUTE             | SCSS          | HEX      |
|-------------------|---------------|-----------|
| Background        | $field-01     | #3d70b2 @ 10% |
| Caret             | $brand-01     | #3d70b2   |
| Label             | $text-01      | #152935   |
| Label: inline select  | $text-03      | #5a6872   |
| Text              | $text-01      | #152935   |
| Text: inline select | $brand-01     | #3d70b2   |
| Text: placeholder | $text-03      | #5a6872   |



---
***
> 
![Default and new selection state examples for Select](images/select-style-1.png)

_Examples of default and new selection Select states_

## Typography

Select text should be set in sentence case, with only the first word in a phrase and any proper nouns capitalized. Select text should be three words or less.

| PROPERTY | FONT-SIZE (px/rem)      | FONT-WEIGHT  |
|----------|-----------------|--------------|
| Label    | 14 / 0.875 | Bold / 700   |
| Label: inline select    | 14px / 0.875rem |  Normal / 400   |
| Text     | 14 / 0.875 | Normal / 400 |
| Text: inline select     | 14 / 0.875rem | Bold / 700 |

## Structure

| PROPERTY                    | PX | REM   |
|-----------------------------|----|-------|
| Height                      | 40 | 2.5   |
| Spacing: Label & field      | 10 | 0.625 |
| Internal spacing            | 16 | 1     |
| Groupings: vertical         | 32 | 2     |
| Groupings: horizontal       | 16 | 1     |

![Structure and spacing measurements for Select](images/select-style-2.png)
_Structure and spacing measurements for Select | px / rem_

### States

**Open:** Style determined by browser

**Disabled:** 50% opacity

**Help/More Info:** A Tooltip should appear when the user clicks the "More Info" link. The Tooltip indicator should be left aligned with the Select and underlined.

---
***
> 
![Open, disabled, and more information/help state examples for Select](images/select-style-3.png)

_Examples of open, disabled, and help Select states_

### Small Select

| PROPERTY                    | PX | REM   |
|-----------------------------|----|-------|
| Height                      | 24 | 1.5   |
| Width                       | 56 | 3.5   |
| Internal spacing            | 8  | 0.5    |

<div data-insert-component="ImageGrid">
  <div>
    ![Structure and spacing measurements for Small Select](images/select-style-4.png)
  </div>
  <div>
    ![Structure and spacing measurements for Small Select](images/select-style-5.png)
  </div>
</div>
_Structure and spacing measurements for Small Select | px / rem_

_Examples of open and disabled Small Select states_



### Inline select

| PROPERTY                    | PX | REM   |
|-----------------------------|----|-------|
| Height                      | 32 | 2     |
| Internal spacing            | 10  | 0.625    |


---
***
> 
![Structure and spacing measurements for Inline Select](images/select-style-6.png)

_Structure and spacing measurements for Inline Select (on hover) | px / rem_

<div data-insert-component="InteractiveSpec">
  <div class="bx--form-item">
    <label for="select-id" class="bx--label">Select</label>
    <div class="bx--select">
      <select id="select-id" class="bx--select-input">
        <option class="bx--select-option" disabled selected hidden>Pick an option</option>
        <option class="bx--select-option" value="solong">A much longer option that is worth having around to check how text flows</option>
        <optgroup class="bx--select-optgroup" label="Category 1">
          <option class="bx--select-option" value="option1">Option 1</option>
          <option class="bx--select-option" value="option2">Option 2</option>
        </optgroup>
        <optgroup class="bx--select-optgroup" label="Category 2">
          <option class="bx--select-option" value="option1">Option 1</option>
          <option class="bx--select-option" value="option2">Option 2</option>
        </optgroup>
      </select>
      <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
        <path d="M10 0L5 5 0 0z"></path>
      </svg>
    </div>
  </div>
</div>
