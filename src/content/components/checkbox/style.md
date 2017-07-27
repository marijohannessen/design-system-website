## Color

| ATTRIBUTE             | SCSS        | HEX         |
|-------------------|-------------|-------------|
| Checked: fill     | $brand-01  | #3d70b2     |
| Unchecked: border | $ui-05     | #8c9ba5     |
| Unchecked: fill   | $ui-01     | #ffffff     |
| Icon: checkmark   | $inverse-01 | #ffffff     |
| Text              | $text-01    | #152935     |

<div data-insert-component="ImageGrid">
  <div>
    ![Normal checkbox example](images/checkbox-style-1.png)
  </div>
  <div>
    ![Disabled checkbox example](images/checkbox-style-2.png)
  </div>
</div>
_Disabled and normal Checkbox states_

## Typography

Checkbox headings and labels should be sentence case, with only the first word in a phrase and any proper nouns capitalized. Checkbox headings and labels should not exceed three words.

| PROPERTY   | FONT-SIZE (px/rem)     | FONT-WEIGHT  |
|------------|-----------------|--------------|
| Heading    | 14 / 0.875 | Bold / 700   |
| Label      | 14 / 0.875 | Normal / 400 |

## Structure

| PROPERTY             | PX | REM  |
|----------------------|----|------|
| Height & width       | 18 | 2.75 |
| Outline              | 2  | -    |
| Spacing: checkboxes  | 16 | 1    |
| Spacing: checkbox & label | 8  | 0.5  |
| External Spacing     | 16 | 1    |

---
***
> 
![Checkbox structure and spacing measurements](images/checkbox-style-3.png)

_Structure and spacing measurements for Checkbox | px / rem_

<div data-insert-component="InteractiveSpec">
  <fieldset class="bx--fieldset">
    <legend class="bx--label">Favorite Colors</legend>
    <!-- input + label -->
    <div class="bx--form-item bx--checkbox-wrapper">
      <input id="bx--checkbox-red" class="bx--checkbox" type="checkbox" value="red" name="checkbox">
      <label for="bx--checkbox-red" class="bx--checkbox-label">
        <span class="bx--checkbox-appearance">
          <svg class="bx--checkbox-checkmark" width="12" height="9" viewBox="0 0 12 9" fill-rule="evenodd">
            <path d="M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z"></path>
          </svg>
        </span>
        Red
      </label>
    </div>
    <!-- label > input -->
    <div class="bx--form-item bx--checkbox-wrapper">
      <label for="bx--checkbox-blue" class="bx--checkbox-label">
        <input id="bx--checkbox-blue" class="bx--checkbox" type="checkbox" value="yellow" name="checkbox">
        <span class="bx--checkbox-appearance">
          <svg class="bx--checkbox-checkmark" width="12" height="9" viewBox="0 0 12 9" fill-rule="evenodd">
            <path d="M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z"></path>
          </svg>
        </span>
        <span class="bx--checkbox-label-text">Blue</span>
      </label>
    </div>
  </fieldset>
</div>
