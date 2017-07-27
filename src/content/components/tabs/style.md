## Color

| ATTRIBUTE                       | SCSS      |  HEX    |
|-----------------------------|-----------|---------|
| Tab label: selected          | $brand-01 | #3d70b2 |
| Tab border-bottom: selected | $brand-01 | #3d70b2 |
| Tab label                    | $text-01  | #152935 |
| Tab label: hover             | $brand-01 | #3d70b2 |

## Typography

Tab label should be set in sentence case, and should not exceed three words.

| PROPERTY | FONT-SIZE (px/rem)      | FONT-WEIGHT  |
|----------|-----------------|--------------|
| Tab label | 14 / 0.875 | Bold / 700   |

## Structure

| PROPERTY          | PX | REM |
|-------------------|----|-----|
| Tab border-bottom | 2  | -   |
| Spacing: tabs     | 48 | 3   |
| Spacing: bottom   | 16 | 1   |

![Structure and spacing measurements for Tabs](images/tab-style-1.png)
_Structure and spacing measurements for Tab | px / rem_

<div data-insert-component="InteractiveSpec">
  <nav data-tabs class="bx--tabs" role="navigation">
    <div class="bx--tabs-trigger" tabindex="0">
      <a href="javascript:void(0)" class="bx--tabs-trigger-text" tabindex="-1"></a>
      <svg width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
        <path d="M10 0L5 5 0 0z"></path>
      </svg>
    </div>
    <ul class="bx--tabs__nav bx--tabs__nav--hidden" role="tablist">
      <li class="bx--tabs__nav-item bx--tabs__nav-item--selected" data-target=".tab-1" role="presentation">
        <a id="tab-link-1" class="bx--tabs__nav-link" href="javascript:void(0)" role="tab" aria-controls="tab-panel-1" aria-selected="true">Tab Label 1</a>
      </li>
      <li class="bx--tabs__nav-item" data-target=".tab-2" role="presentation">
        <a id="tab-link-2" class="bx--tabs__nav-link" href="javascript:void(0)" role="tab" aria-controls="tab-panel-2" aria-selected="false">Tab Label 2</a>
      </li>
      <li class="bx--tabs__nav-item" data-target=".tab-3" role="presentation">
        <a id="tab-link-3" class="bx--tabs__nav-link" href="javascript:void(0)" role="tab" aria-controls="tab-panel-3" aria-selected="false">Tab Label 3</a>
      </li>
      <li class="bx--tabs__nav-item" data-target=".tab-4" role="presentation">
        <a id="tab-link-4" class="bx--tabs__nav-link" href="javascript:void(0)" role="tab" aria-controls="tab-panel-4" aria-selected="false">Tab Label 4</a>
      </li>
      <li class="bx--tabs__nav-item" data-target=".tab-5" role="presentation">
        <a id="tab-link-5" class="bx--tabs__nav-link" href="javascript:void(0)" role="tab" aria-controls="tab-panel-5" aria-selected="false">Tab Label 5</a>
      </li>
    </ul>
  </nav>
</div>
