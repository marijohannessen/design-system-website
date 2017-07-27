## Color
| ATTRIBUTE                | SCSS      | HEX      |
|-----------------------|---------  |----------|
| Handle: fill          | $brand-01 | #3d70b2  |
| Line: selected        | $brand-01 | #3d70b2  |
| Line: unselected      | $ui-05    | #8c9ba5  |
| Label                 | $text-01  | #152934  |
| Range values   | $text-02  | #5a6872  |


## Typography
Slider labels should be set in sentence case, with only the first word in a phrase and any proper nouns capitalized, and no more than three words.

| PROPERTY 			   | FONT-SIZE (px/rem)       | FONT-WEIGHT  |
|----------------------|-----------------|--------------|
| Label                | 14 / 0.875 | Bold / 700   |
| Range values  | 14 / 0.875 | Normal / 400 |

## Structure
The width of a Slider varies based on page content and layout.

| PROPERTY          | PX | REM   |
|-------------------|----|-------|
| Handle            | 24 | 1.5   |
| Slider line height| 4  | 0.25  |
| Spacing: Label & slider | 16 | 1   |
| Spacing: slider & range values | 16 | 1  |
| Spacing: range value & text input | 16 | 1  |


![Structure and spacing measurements for Slider](images/slider-style-1.png)

_Structure and spacing measurements for Slider | px / rem_

<div data-insert-component="InteractiveSpec">
  <div class="bx--form-item">
    <label for="slider" class="bx--label">Slider Label</label>
    <div class="bx--slider-test">
    <div class="bx--slider-container">
      <span class="bx--slider__range-label">0</span>
      <div class="bx--slider" data-slider data-slider-input-box="#slider-input-box">
        <div class="bx--slider__track"></div>
        <div class="bx--slider__filled-track"></div>
        <div class="bx--slider__thumb" tabindex="0"></div>
        <input id="slider" class="bx--slider__input" type="range" step="1" min="0" max="100" value="50">
      </div>
      <span class="bx--slider__range-label">100</span>
      <input id="slider-input-box" type="text" class="bx--text-input bx-slider-text-input" placeholder="0">
    </div>
  </div>
  </div>
</div>
