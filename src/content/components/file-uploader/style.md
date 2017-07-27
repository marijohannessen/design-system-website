## Color

| ATTRIBUTE              | SCSS            | HEX     |
|--------------------|-----------------|---------|
| Text: label        | $text-01        | #152934 |
| Text: instructions | $text-02        | #5a6872 |
| Text: file name    | $text-01        | #152935 |
| Background: file   | $brand-01 @ 25% | #3d70b2 |
| Icon: remove       | $inverse-01     | #152934 |
| Icon: loading      | $ui-05          | #8c9ba5 |

## Typography

The File Uploader label and instruction text should be set in sentence case, with only the first letter of the first word in the sentence capitalized.

| PROPERTY         | FONT-SIZE (px/rem)     | FONT-WEIGHT  |
|------------------|-----------------|--------------|
| Label            | 14 / 0.875 | Bold / 700   |
| Instruction text | 14 / 0.875 | Normal / 400 |
| File name        | 12 / 0.75  | Normal / 400 |

## Structure

The width of an uploaded file varies based on the content and layout of a design. Refer to the [Button](/components/button) guidelines for styling and usage of the “Add files” button.

| PROPERTY               | PX | REM   |
|------------------------|----|-------|
| Height                 | 30 | 1.875 |
| Icon: remove           | 16 | 1     |
| Icon: loading          | 16 | 1     |
| Spacing: uploaded file | 20 | 1.25  |
| Spacing: remove icon   | 16 | 1     |

---
***
> 
![Structure and spacing measurements for File Uploader](images/file-uploader-style-1.png)

_Structure and spacing measurements for File Uploader | px / rem_

<div data-insert-component="InteractiveSpec">
  <div class="bx--form-item">
    <strong class="bx--label">Account photo</strong>
    <p class="bx--label-description">only .jpg and .png files. 500kb max file size.</p>
    <div class="bx--file" data-file>
      <label
        for="your-file-importer-id-here"
        class="bx--file-btn bx--btn bx--btn--secondary"
        role="button"
        tabindex="0">Add files</label>
      <input
        type="file"
        class="bx--file-input"
        id="your-file-importer-id-here"
        data-file-uploader
        data-target="[data-file-container]"
        multiple
      />
      <div data-file-container class="bx--file-container"></div>
    </div>
  </div>
</div>
