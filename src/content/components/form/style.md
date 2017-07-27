## Color

For color specs, refer to specific components.

## Typography

Form headings and labels should be set in set in sentence case with the first letter of each word capitalized. Please refer to the [Text Input](/components/text-input), [Dropdown](/components/dropdown), [Checkbox](/components/checkbox), [Radio button](/components/radio-button), [Toggle](/component/toggle), [Button](/component/button) pages for specific typography details on each component.

| PROPERTY | FONT-SIZE (px/rem)     | FONT-WEIGHT  |
|------------|-----------------|--------------|
| Heading    | 32 / 2     | Light / 300  |
| Label      | 14 / 0.875 | Bold / 700   |
| Input text | 14 / 0.875 | Normal / 400 |

## Structure

Forms are made up of several different components. The order in which these elements are arranged is flexible, but should always follow the spacing guidelines below.

Forms can be one column or two. The width of each column varies based on the content and layout of the design. On mobile, forms can only have one column.

All icons can be found on the [iconography](/style/iconography/library) library page.

| SPACE BETWEEN        | PX | REM  |
|----------------------|----|------|
| Text inputs          | 24 | 1.5  |
| Non-input components | 32 | 2    |
| Columns              | 20 | 1.25 |


![Structure and spacing measurements for a double column form ](images/form-style-2.png)
_Structure and spacing measurements for a double column Form | px / rem_

---
***
> ![Structure and spacing measurements for a single column form](images/form-style-1.png)

_Structure and spacing measurements for a single column Form | px / rem_

<div data-insert-component="InteractiveSpec">
  <div class="bx--form-item">
    <label for="text1" class="bx--label">Username</label>
    <input id="text1" type="text" class="bx--text-input" placeholder="Enter username here" />
    <div class="bx--form-requirement">
      Username is taken.
    </div>
  </div>
  <div class="bx--form-item">
    <label for="text-area-1" class="bx--label">Text area label</label>
    <textarea id="text-area-1" class="bx--text-area" rows="4" cols="50" placeholder="Placeholder text"></textarea>
    <div class="bx--form-requirement">
      Please do not leave blank.
    </div>
  </div>
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
      <div class="bx--form-requirement">
        Please choose an option.
      </div>
      <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
        <path d="M10 0L5 5 0 0z"></path>
      </svg>
    </div>
  </div>
  <div class="bx--form-item">
    <button class="bx--btn bx--btn--primary" type="button">Submit</button>
  </div>
</div>
