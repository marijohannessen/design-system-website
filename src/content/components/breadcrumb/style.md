## Color

| ATTRIBUTE      | SCSS      | HEX      |
|----------  |----------|-----------|
| Title      | $brand-01| #3d70b2   |
| Slash      | $text-02 | #5a6872   |
| Dropdown text  | $text-01  | #152934   |
| Dropdown text: hover  | $inverse-01| #3d70b2   |

## Typography

When a user hovers overs a Breadcrumb, the Breadcrumb title should be underlined.

| PROPERTY | FONT-SIZE    | FONT-WEIGHT  |
|------------|-----------------|--------------|
| Title      | 14 / 0.875 | Roman / 400  |
| Dropdown text | 14 / 0.875 | Roman / 400  |

![Breadcrumb typography treatment example](images/breadcrumb-style-1.png)
_Breadcrumb typography treatment example_

## Structure

The on-click dropdown should follow the [Overflow Menu](/components/overflow-menu) specs for sizing, padding, and interaction.

<div data-insert-component="InteractiveSpec">
  <div class="bx--breadcrumb" style="padding-bottom: 8px" data-spec-padding>
    <div class="bx--breadcrumb-item" id="one" data-spec-margin>
      <a href="#" class="bx--link">Breadcrumb 1</a>
    </div>
    <div class="bx--breadcrumb-item" id="two" data-spec-margin>
      <a href="#" class="bx--link">Breadcrumb 2</a>
    </div>
    <div class="bx--breadcrumb-item" id="three" data-spec-margin>
      <a href="#" class="bx--link">Breadcrumb 3</a>
    </div>
  </div>
</div>

| SPACING         | PX | REM |
|-----------------|----|-----|
| Title & slash   | 16 | 1   |
| Icon & dropdown | 8  | 0.5 |
