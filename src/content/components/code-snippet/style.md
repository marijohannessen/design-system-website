## Color

| ATTRIBUTE                    | SCSS     | HEX     |
|--------------------------|----------|---------|
| Code snippet: background | $field-01| #3d70b2 @ 10% |  
| Code snippet: text       | $text-01 | #152935 |
| Terminal: background     | $nav-01  | #0f212e |
| Terminal: text           | $ui-02   | #f5f7fa |
| Icon: copy               | $brand-01| #3d70b2 |

## Typography

| PROPERTY | FONT-FAMILY | FONT-SIZE (px/rem)  | FONT-WEIGHT  |
|----------|-------------|-------------|--------------|
| Text     | Monospace   | 16 / 1 | Normal / 400 |

## Structure

| PROPERTY          | PX  | REM   |
|-------------------|-----|-------|
| Height: snippet   | 192 | 12    |
| Height: terminal  | 56  | 3.5   |
| Width             | 640 | 40    |
| Spacing: internal | 16  | 1     |
| Spacing: external | 16  | 1     |
| Icon: height      | 24  | 1.5   |
| Icon: width       | 18  | 1.125 |
| Spacing: icon & tooltip | 6 | 0.375|
| Spacing: tooltip internal | 12 | 0.75|

![](images/code-snippet-style-1.png)
_Structure and spacing measurements for Terminal Snippet | px / rem_
![](images/code-snippet-style-2.png)
_Structure and spacing measurements for Code Snippet | px / rem_

---
***
> 
![](images/code-snippet-style-3.png)

_Structure and spacing measurements for Copy | px / rem_

<div data-insert-component="InteractiveSpec">
  <div class="bx--snippet bx--snippet--code" data-spec-padding>
    <div class="bx--snippet-container" data-spec-margin style="overflow-y: visible">
      <code>
        <pre>       
  @mixin bx--snippet($type) {
    @if $type == 'terminal' {
      background-color: red;
    } @else if $type == 'code' {
      background-color: blue;
    } @else if $type == 'text' {
      background-color: white;
    }
  }
        </pre>
      </code>
    </div>
    <button data-copy-btn class="bx--snippet-button" aria-label="Copy code" tabindex="0">
      <svg class="bx--snippet__icon" width="18" height="24" viewBox="0 0 18 24" fill-rule="evenodd">
        <path d="M13 5V0H0v19h5v5h13V5h-5zM2 17V2h9v3H5v12H2zm14 5H7V7h9v15z"></path>
        <path d="M9 9h5v2H9zM9 12h5v2H9zM9 15h3v2H9z"></path>
      </svg>
      <div class="bx--btn--copy__feedback" data-feedback="Copied!"></div>
    </button>
  </div>
</div>
