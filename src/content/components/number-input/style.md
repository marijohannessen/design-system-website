## Color

| ATTRIBUTE                | SCSS      | HEX           |
|----------------------|-----------|---------------|
| Background           | $field-01 | #3d70b2 @ 10% |
| Text: label & number | $text-01  | #152935       |
| Caret                | $brand-01 | #3d70b2       |

## Typography

Number Input labels should use sentence case, with only the first word in a phrase and any proper nouns capitalized.

| PROPERTY  | FONT-SIZE (px/rem)      | FONT-WEIGHT  |
|------------|-----------------|--------------|
| Label       | 14 / 0.875 | Bold / 700   |
| Text        | 14 / 0.875 | Normal / 400   |

## Structure

The height of a Number Input is always the same. The width however, varies based on content, layout and design. The caret icon can be found in the [iconography](/style/iconography/library) library.

| PROPERTY         | PX | REM |
|------------------|----|-----|
| Height           | 40 | 2.5 |
| Internal spacing | 16 | 1   |


---
***
> 
![Structure and spacing for number input](images/number-input-style-1.png)

_Structure and spacing measurements for a Number Input | px / rem_

<div data-insert-component="InteractiveSpec">
  <div class="bx--form-item">
    <label for="number-input" class="bx--label">Instances</label>
    <div data-numberinput class="bx--number">
      <input id="number-input" type="number" min="0" max="100" value="1">
      <div class="bx--number__controls">
        <svg class="up-icon" viewBox="0 -6 10 5" width="10" height="5" fill-rule="evenodd">
          <path d="M10 5L5 0 0 5z"></path>
        </svg>
        <svg class="down-icon" viewBox="0 6 10 5" width="10" height="5" fill-rule="evenodd">
          <path d="M10 0L5 5 0 0z"></path>
        </svg>
      </div>
    </div>
  </div>
</div>
