## Color

| ATTRIBUTE                    | SCSS      | HEX       |
|--------------------------|-----------|-----------|
| Background with Tabs     | $ui-01    | #ffffff   |
| Background with Interior Left Nav  | $ui-02    | #f5f7fa   |
| Title                    | $text-02  | #5a6872   |
| Secondary text           | $text-01  | #152935   |

## Typography

Detail Page Header titles, Breadcrumb text, and Tab labels should all be set in sentence case.

| Property   | Font-size (px/rem)       | Font-weight  |
|------------|-----------------|--------------|
| Title      | 28 / 1.75  | Light / 300  |
| Secondary text     | 14 / 0.875 | Normal / 400 |
| Breadcrumb | 14 / 0.875 | Normal / 400 |

## Layer

| COMPONENT                     | LAYER    | ELEVATION | BOX-SHADOW  |
|----------                     |----------|---------- |-------------|
| Detail page header            | Base     | 0         | none  |
| Detail page header with tabs  | Flat     | 1         | none  |
| Detail page header on scroll  | Overlay  | 8         | `0 4px 8px 0 rgba(0,0,0,0.10);`  |

## Structure

The width of the Detail Page Headers extend across the entire browser, therefore the width of the Detail Page Header is determined by the width of the browser.

### Detail Page Header with Interior Left Nav

| PROPERTY                     | PX | REM   |
|------------------------------|----|-------|
| Height                       | 88 | 5.5   |
| Height: on scroll            | 64 | 4     |
| Icon                         | 36 | 2.25  |
| Spacing: above breadcrumb    | 10 | 0.625  |
| Spacing: breadcrumb & title  | 12 | 0.75   |
| Spacing: below title         | 14 | 0.875  |
| Spacing: icon, title & status| 10 | 0.625  |

![Structure and spacing measurements for Detail Page Header](images/detail-page-header-style-1.png)
![Detail Page Header on scroll](images/detail-page-header-style-2.png)
_Structure and spacing measurements for Detail Page Header and Detail Page Header on scroll | px / rem_

### Detail Page Header with Tabs

| SPACING                      | PX  | REM  |
|------------------------------|-----|------|
| Height                       | 124 | 7.75 |
| Height: on scroll            | 64  | 4    |
| Spacing: above breadcrumb    | 12  | 0.75  |                   
| Spacing: breadcrumb & title  | 8   | 0.5  |
| Spacing: title & tabs        | 20  | 1.25 |
| Spacing: icon, title & status| 10  | 0.625 |

![Structure and spacing measurements for Detail Page Header with tabs ](images/detail-page-header-style-3.png)
_Structure and spacing measurements for Detail Page Header with tabs | px / rem_

### Detail Page Header for mobile

Please see [Dropdown](/components/dropdown/style) for additional styling specs.

| SPACING                         | PX  | REM  |
|---------------------------------|-----|------|
| Height                          | 116 | 7.25 |
| Height: on scroll & no tabs     | 64  | 4    |
| Width                           | Varies based on browser width | |    
| Spacing: internal sides         | 20  | 1.25 |   
| Spacing: internal, top & bottom | 12  | 0.75  |              
| Spacing: title & dropdown       | 12  | 0.75  |
| Spacing: icon, title & status   | 10  | 0.625 |
| Icon                            | 36  | 2.25 |

![Structure and spacing measurements for Detail Page Header mobile ](images/detail-page-header-style-4.png)
_Structure and spacing measurements for Detail Page Header on mobile | px / rem_

<div data-insert-component="InteractiveSpec">
  <header data-detail-page-header class="bx--detail-page-header bx--detail-page-header--with-tabs">
    <div class="bx--detail-page-header-content">
      <div class="bx--breadcrumb">
        <div class="bx--breadcrumb-item">
          <a href="#" class="bx--link">Breadcrumb 1</a>
        </div>
        <div class="bx--breadcrumb-item">
          <a href="#" class="bx--link">Breadcrumb 2</a>
        </div>
        <div class="bx--breadcrumb-item">
          <a href="#" class="bx--link">Breadcrumb 3</a>
        </div>
      </div>
      <div class="bx--detail-page-header-title-container">
        <div class="bx--detail-page-header-icon-container">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="#D8D8D8" d="M0 0h24v24H0z" fill-rule="evenodd" />
          </svg>
        </div>
        <h1 class="bx--detail-page-header-title">Title</h1>
        <div class="bx--detail-page-header-status-container">
          <div class="bx--detail-page-header-status-icon"></div>
          <span class="bx--detail-page-header-status-text">Running</span>
        </div>
      </div>
      <nav data-tabs class="bx--tabs" role="navigation">
        <div class="bx--tabs-trigger">
          <a href="javascript:void(0)" class="bx--tabs-trigger-text"></a>
          <svg width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
            <path d="M10 0L5 5 0 0z"></path>
          </svg>
        </div>
        <ul class="bx--tabs__nav bx--tabs__nav--hidden" role="tablist">
          <li class="bx--tabs__nav-item bx--tabs__nav-item--selected" data-target=".tab-1" role="presentation">
            <a id="tab-link-1" class="bx--tabs__nav-link" href="javascript:void(0)" role="tab" aria-selected="true">Tab Label 1</a>
          </li>
          <li class="bx--tabs__nav-item" data-target=".tab-2" role="presentation">
            <a id="tab-link-2" class="bx--tabs__nav-link" href="javascript:void(0)" role="tab" aria-selected="false">Tab Label 2</a>
          </li>
          <li class="bx--tabs__nav-item" data-target=".tab-3" role="presentation">
            <a id="tab-link-3" class="bx--tabs__nav-link" href="javascript:void(0)" role="tab" aria-selected="false">Tab Label 3</a>
          </li>
          <li class="bx--tabs__nav-item" data-target=".tab-4" role="presentation">
            <a id="tab-link-4" class="bx--tabs__nav-link" href="javascript:void(0)" role="tab" aria-selected="false">Tab Label 4</a>
          </li>
          <li class="bx--tabs__nav-item" data-target=".tab-5" role="presentation">
            <a id="tab-link-5" class="bx--tabs__nav-link" href="javascript:void(0)" role="tab" aria-selected="false">Tab Label 5</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="bx--detail-page-header-menu">
      <div data-overflow-menu tabindex="0" aria-label="Overflow menu description" class="bx--overflow-menu">
        <svg class="bx--overflow-menu__icon" width="4" height="20" viewBox="0 0 4 20" fill-rule="evenodd">
          <circle cx="2" cy="2" r="2"></circle>
          <circle cx="2" cy="10" r="2"></circle>
          <circle cx="2" cy="18" r="2"></circle>
        </svg>
        <ul class="bx--overflow-menu-options bx--overflow-menu--flip">
          <li class="bx--overflow-menu-options__option">
            <button class="bx--overflow-menu-options__btn">Stop app</button>
          </li>
          <li class="bx--overflow-menu-options__option">
            <button class="bx--overflow-menu-options__btn">Restart app</button>
          </li>
          <li class="bx--overflow-menu-options__option">
            <button class="bx--overflow-menu-options__btn">Rename app</button>
          </li>
          <li class="bx--overflow-menu-options__option">
            <button class="bx--overflow-menu-options__btn">Edit routes</button>
          </li>
          <li class="bx--overflow-menu-options__option bx--overflow-menu-options__option--danger">
            <button class="bx--overflow-menu-options__btn">Delete app</button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</div>
