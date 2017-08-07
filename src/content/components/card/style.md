## Color

| ATTRIBUTE             | SCSS     | HEX      |
|-------------------|----------|----------|
| Background        | $ui-01   | #ffffff  |
| Footer background | $ui-03   | #f0f3f6  |
| Border            | $ui-04   | #dfe3e6  |
| Text              | $text-01 | #152935  |
| App actions icon  | $ui-05   | #8c9ba5  |

## Typography

Card names and card information should be set in title case with the first letter of each word capitalized. All other text should be set in sentence case.

| PROPERTY                  | FONT-SIZE (px/rem)    | FONT-WEIGHT  |
|----------------------------|-----------------|--------------|
| Card name                  | 18 / 1.125 | Light / 300  |
| Secondary info             | 12 / 0.75  | Normal / 400 |
| Status                     | 12 / 0.75  | Normal / 400 |

## Layer

| LAYER    | ELEVATION | BOX-SHADOW  |
|----------|---------- |-------------|
| Raised   | 2         | `0 1px 2px 0 rgba(0,0,0,0.10);` |

## Structure

There are several types of cards, each having its own measurements and attributes. Please select the appropriate card based on content and card needs. Find the measurement and visual details for each card type listed below. Card icons can be found in the [iconography](/style/iconography) page.

<div data-insert-component="InteractiveSpec">
  <article class="bx--card" tabindex="0" aria-labelledby="card-title-2" data-spec-dimensions="height">
    <div class="bx--card__card-overview" data-spec-padding>
      <!-- OverflowMenu -->
      <div data-overflow-menu class="bx--overflow-menu" tabindex="0" aria-label="List of options">
        <svg class="bx--overflow-menu__icon" width="4" height="20" viewBox="0 0 4 20" fill-rule="evenodd">
          <circle cx="2" cy="2" r="2"></circle>
          <circle cx="2" cy="10" r="2"></circle>
          <circle cx="2" cy="18" r="2"></circle>
        </svg>
        <ul class="bx--overflow-menu-options">
          <li class="bx--overflow-menu-options__option">
            <button type="button" class="bx--overflow-menu-options__btn">Stop App</button>
          </li>
          <li class="bx--overflow-menu-options__option">
            <button type="button" class="bx--overflow-menu-options__btn">Restart App</button>
          </li>
          <li class="bx--overflow-menu-options__option">
            <button type="button" class="bx--overflow-menu-options__btn">Restart App</button>
          </li>
          <li class="bx--overflow-menu-options__option">
            <button type="button" class="bx--overflow-menu-options__btn">Edit Routes and Access</button>
          </li>
          <li class="bx--overflow-menu-options__option bx--overflow-menu--divider">
            <button type="button" class="bx--overflow-menu-options__btn">Delete App</button>
          </li>
        </ul>
      </div>
      <section class="bx--card-overview__about" data-spec-padding>
        <figure class="bx--about__icon">
          <img src="/images/placeholder.svg" alt="" class="bx--about__icon--img" />
        </figure>
        <header class="bx--about__title" data-spec-padding>
          <h3 id="card-title-2" class="bx--about__title--name">Card Name</h3>
          <h4 class="bx--about__title--additional-info">Secondary Information</h4>
        </header>
    </div>
    </section>
    <footer class="bx--card-footer" data-spec-padding data-spec-dimensions="height">
      <button class="bx--btn bx--btn--primary bx--btn--sm" type="button">View credentials</button>
      <a href="" class="bx--card-footer__link">Docs</a>
    </footer>
  </article>
</div>

| PROPERTY             | PX  | REM    |
|----------------------|-----|--------|
| Height               | 240 | 15     |
| Width                | 200 | 12.5   |
| Footer               | 48  | 3      |
| Icon circle          | 50  | 3.125  |
| Icon                 | 32  | 2      |
| Border               | 1   | -      |

| SPACING                  | PX | REM   |
|--------------------------|----|-------|
| Internal                 | 16 | 1     |
| Card top to icon         | 36 | 2.25  |
| Icon to card name        | 24 | 1.5   |
| Secondary Info to Footer | 48 | 3     |
