## Color

All steps that have already been completed are indicated by an outlined circle with a checkmark. The current step the user is on is indicated by a filled circle. Steps the user has not encountered yet, or future steps, are indicated by an outlined circle.

| ATTRIBUTE                           | SCSS      | HEX     |
|---------------------------------|---------  |---------|
| Label: current & completed      | $brand-01 | #3d70b2 |
| Label: future step              | $ui-05    | #8c9ba5 |
| Line: current & completed       | $brand-01 | #3d70b2 |
| Line: future step               | $ui-05    | #8c9ba5 |
| Icon: current & completed       | $brand-01 | #3d70b2 |
| Icon: future step               | $ui-05    | #8c9ba5 |

---
***
> 
![Examples of current, completed, and future steps for Progress Indicator](images/progress-indicator-style-1.png)

_Examples of current, completed, and future steps for Progress Indicator_

## Typography

Labels should be one to two words only, with a limit of 16 characters total per label. All labels should be set in sentence case.

| PROPERTY                 | FONT-SIZE (px/rem)    | FONT-WEIGHT  |
|--------------------------|-----------------|--------------|
| Current & completed step| 14 / 0.875 | Bold / 700   |
| Future steps | 14 / 0.875 | Normal / 400 |

## Structure

The checkmark icon can be found in the [iconography](/style/iconography/library) library.

| PROPERTY                 | PX  | REM   |
|--------------------------|-----|-------|
| Circle                   | 24  | 1.5   |
| Line weight              | 2   | -     |
| Line length (minimum)    | 112 | 7     |
| Spacing: steps (minimum) | 48  | 3     |
| Spacing: icon & label    | 8   | 0.5   |
| Spacing: icons external  | 16  | 1     |


![Structure and spacing for Progress Indicator](images/progress-indicator-style-2.png)
_Structure and spacing measurements for Progress Indicator | px / rem_

<div data-insert-component="InteractiveSpec">
  <ul data-progress data-progress-current class="bx--progress">
    <li class="bx--progress-step bx--progress-step--complete">
      <svg width="24px" height="24px" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="12"></circle>
        <polygon points="10.3 13.6 7.7 11 6.3 12.4 10.3 16.4 17.8 9 16.4 7.6"></polygon>
      </svg>
      <p class="bx--progress-label">Label 1</p>
      <span class="bx--progress-line"></span>
    </li>
    <li class="bx--progress-step bx--progress-step--current">
      <svg>
        <circle cx="12" cy="12" r="12"></circle>
        <circle cx="12" cy="12" r="6"></circle>
      </svg>
      <p class="bx--progress-label">Label 2</p>
      <span class="bx--progress-line"></span>
    </li>
    <li class="bx--progress-step bx--progress-step--incomplete">
      <svg>
        <circle cx="12" cy="12" r="12"></circle>
      </svg>
      <p class="bx--progress-label">Label 3</p>
      <span class="bx--progress-line"></span>
    </li>
    <li class="bx--progress-step bx--progress-step--incomplete">
      <svg>
        <circle cx="12" cy="12" r="12"></circle>
      </svg>
      <p class="bx--progress-label">Label 4</p>
      <span class="bx--progress-line"></span>
    </li>
  </ul>
</div>
