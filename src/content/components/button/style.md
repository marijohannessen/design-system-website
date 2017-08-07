## Color

| ATTRIBUTE        | SCSS                   | HEX                    |
|------------------|------------------------|------------------------|
| Normal           | $brand-01              | #3d70b2                |
| Primary:hover    | $brand-02              | #5596e6                |
| Secondary:hover  | $brand-01              | #3d70b2                |
| Disabled         | $brand-01              | #3d70b2 at 50% opacity |

<div data-insert-component="ImageGrid">
  <div>
    ![Example of a normal Primary Button](images/button-style-1.png)
  </div>
  <div>
    ![Example of a Primary Button on hover](images/button-style-2.png)
  </div>
  <div>
    ![Example of a disabled Primary Button](images/button-style-3.png)
  </div>
  <div>
    ![Example of a normal Secondary Button](images/button-style-4.png)
  </div>
  <div>
    ![Example of a Secondary Button on hover](images/button-style-5.png)
  </div>
  <div>
    ![Example of a disabled Secondary Button](images/button-style-6.png)
  </div>
  <div>
    ![Example of a normal Ghost Button](images/button-style-15.png)
  </div>
  <div>
    ![Example of a Ghost Button on hover](images/button-style-16.png)
  </div>
  <div>
    ![Example of a disabled Ghost Button](images/button-style-17.png)
  </div>
</div>
_Primary, Secondary, and Ghost Button state examples_

## Typography

Button text should be set in sentence case, with only the first word in a phrase and any proper nouns capitalized.

| PROPERTY  | FONT-SIZE (px/rem)     | FONT-WEIGHT  |
|-------------|------------------|--------------|
| Button text | 14 / 0.875 | Bold / 700   |

## Structure

| HEIGHT          | PX | REM |
|-----------------|----|-----|
| Regular buttons | 40 | 2.5 |
| Small buttons   | 32 | 2   |

<div data-insert-component="ImageGrid">
  <div>
    ![Structure for a Primary Button](images/button-style-7.png)
  </div>
  <div>
    ![Structure for a small Primary Button](images/button-style-8.png)
  </div>
</div>
_Stucture measurements for small and regular Primary Button | px / rem_

### Spacing

A Button cannot have any element or text within 16 pixels / 1 rem of its borders. For Button groups, the primary button is positioned on the outside of the set, while the secondary button is positioned inside. For a Button with a glyph, the space between the button label and the glyph must be greater than or equal to 16 pixels / 1 rem. This is to accommodate for instances where two or more buttons with glyphs appear together.

<div data-insert-component="InteractiveSpec">
  <button style="margin: 16px" class="bx--btn bx--btn--secondary" type="button" data-spec-padding data-spec-margin>Secondary button</button>
  <button style="margin: 16px" class="bx--btn bx--btn--primary" type="button" data-spec-padding data-spec-margin>
    Button icon
    <svg class="bx--btn__icon" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd">
      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 9H9v3H7V9H4V7h3V4h2v3h3v2z"></path>
    </svg>
  </button>
  <button style="margin: 16px" class="bx--btn bx--btn--ghost" type="button" data-spec-padding data-spec-margin>
    Ghost
    <svg class="bx--btn__icon" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd">
      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 9H9v3H7V9H4V7h3V4h2v3h3v2z"></path>
    </svg>
  </button>
</div>
<div>

| SPACING                 | PX | REM   |
|-------------------------|----|-------|
| External: regular button| 16 | 1     |
| Internal: regular button| 16 | 1     |
| Internal: small button  | 10 | 0.625 |
| Button pairings         | 16 | 1     |
| Text & glyph            | 16 | 1     |
| Ghost Button: text & glyph    | 8  | 0.5   |
