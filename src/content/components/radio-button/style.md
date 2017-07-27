## Color

| ATTRIBUTE               | SCSS      | HEX       |
|---------------------|-----------|-----------|
| Non-selected border | $ui-05    | #8c9ba5   |
| Selected            | $brand-01 | #3d70b2   |

## Typography

Radio Button labels and headings should be set in sentence case, with only the first word in a phrase and any proper nouns capitalized.

| PROPERTY | FONT-SIZE (px/rem)   | FONT-WEIGHT  |
|----------|-----------------|--------------|
| Heading  | 14 / 0.875 | Bold / 700   |
| Label    | 14 / 0.875 | Normal / 400 |

## Structure

| PROPERTY                     | PX | REM   |
|------------------------------|----|-------|
| Button height & width        | 18 | 1.125 |
| Selected dot: height & width | 8  | 0.5   |
| External spacing             | 16 | 1     |
| Spacing: between options     | 16 | 1     |
| Spacing: label & button      | 8  | 0.5   |

---
***
> 
![Structure and spacing measurements for a radio button](images/radio-button-style-1.png)

_Structure and spacing measurements for Radio Button | px | rem_

<div data-insert-component="InteractiveSpec">
  <fieldset class="bx--fieldset">
    <legend class="bx--label">Favorite Color</legend>
    <div class="bx--form-item">
      <div class="bx--radio-button-group">
        <input id="radio-button-1" class="bx--radio-button" type="radio" value="red" name="radio-button" tabindex="0" checked>
        <label for="radio-button-1" class="bx--radio-button__label">
          <span class="bx--radio-button__appearance"></span>
          Red
        </label>
        <input id="radio-button-2" class="bx--radio-button" type="radio" value="green" name="radio-button" tabindex="0">
        <label for="radio-button-2" class="bx--radio-button__label">
          <span class="bx--radio-button__appearance"></span>
          Green
        </label>
        <input id="radio-button-3" class="bx--radio-button" type="radio" value="blue" name="radio-button" tabindex="0" disabled>
        <label for="radio-button-3" class="bx--radio-button__label">
          <span class="bx--radio-button__appearance"></span>
          Blue
        </label>
      </div>
    </div>
  </fieldset>
</div>
