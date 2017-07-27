## Color

| ATTRIBUTE      | SCSS     | HEX       |
|------------|--------- |-----------|
| Background | $ui-01   | #ffffff   |
| Border-top | $brand-01| #3d70b2   |
| Text       | $text-01 | #152935   |
| Title      | $text-02 | #5a6872   |
| X icon     | $ui-05   | #8c9ba5   |
| Footer     | $ui-04   | #dfe3e6   |
| Page overlay  | $ui-03  | #f0f3f6 @ 50% opacity  |

## Typography

Modal labels are optional and should be set in all caps when used. Modal titles should be set in sentence case and should not exceed three words. Important directions or information in the Modal text can be bold, otherwise it should be in roman.

| PROPERTY | FONT-SIZE (px/rem)     | FONT-WEIGHT |
|----------|-----------------|--------------|
| Label    | 12 / 0.75  | Bold / 700   |
| Title    | 26 / 1.625 | Normal / 400 |
| Text     | 14 / 0.875 | Normal / 400 |

## Layer

| LAYER      | ELEVATION     | BOX-SHADOW      |
|------------|----------|----------|
| Pop-out    | 24       | `0 12px 24px 0 rgba(0,0,0,0.10);`  |

## Structure

| PROPERTY                  | PX | REM     |
|---------------------------|----|---------|
| Top border                | 5  | 0.313    |
| X icon                    | 12 | 0.75   |
| Footer: height            | 88 | 5.5    |
| Spacing: internal (L,R,B) | 48 | 3       |
| Spacing: top              | 44 | 2.75    |
| Spacing: title & text     | 24 | 1.5     |
| Spacing: text to footer   | 48 | 3       |

![Structure and spacing measurements for Passive Modal](images/modal-style-1.png)
_Structure and spacing measurements for a Passive Modal | px / rem_
![Structure and spacing measurements for Transactional Modal elements](images/modal-style-2.png)
_Structure and spacing measurements for a Transactional Modal | px / rem_

## Mobile

Modals should be full screen on mobile.

---
***
> 
![Modal on mobile](images/modal-style-3.png)

_Example of a Modal on a mobile screen_

<div data-insert-component="InteractiveSpec">
  <div data-modal id="nofooter" class="bx--modal" tabindex="-1">
    <div class="bx--modal-container">
      <div class="bx--modal-header">
        <h4 class="bx--modal-header__label">Label (Optional)</h4>
        <h2 class="bx--modal-header__heading">Modal Title</h2>
        <button class="bx--modal-close" type="button" data-modal-close data-modal-primary-focus>
          <svg class="bx--modal-close__icon" width="10" height="10" viewBox="0 0 10 10" fill-rule="evenodd">
            <path d="M9.8 8.6L8.4 10 5 6.4 1.4 10 0 8.6 3.6 5 .1 1.4 1.5 0 5 3.6 8.6 0 10 1.4 6.4 5z"></path>
          </svg>
        </button>
      </div>
      <div class="bx--modal-content">
        <p>Passive modal notifications should only appear if there is an action the user needs to address immediately. Passive
          modal notifications are persistent on the screen.</p>
      </div>
    </div>
  </div>
</div>
