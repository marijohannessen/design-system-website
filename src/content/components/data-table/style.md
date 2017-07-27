## Color

| ATTRIBUTE                       | SCSS     | HEX       |
|-----------------------------|--------- |-----------|
| Background                  | $ui-01   | #ffffff   |
| Border                      | $ui-04   | #dfe3e6   |
| Table header: border-bottom | $brand-01| #3d70b2   |
| Zebra stripe                | $ui-03   | #f0f3f6   |
| Expanded: border-left       | $brand-01| #3d70b2   |
| Text                        | $text-01 | #152935   |
| Chevron & caret             | $ui-05   | #8c9ba5   |


![Example of a Data Table](images/data-table-style-5.png)
_Example of a Data Table_

## Typography

Column labels should be in all caps. All other table text should be sentenced case.

| PROPERTY      | FONT-SIZE (px/rem)     | FONT-WEIGHT  |
|---------------|------------------|--------------|
| Title         | 23 / 1.4375 | Light / 300  |
| Header        | 12 / 0.75   | Bold / 700   |
| Text          | 14 / 0.875  | Normal / 400 |

## Layer

| LAYER    | ELEVATION | BOX-SHADOW  |
|----------|---------- |-------------|
| Flat     | 1         | none        |

## Structure

Tables are a configurable and customizable component. Designers can pick and choose certain elements and interactions.

### Simple data table

The basic table style is the required base from which tables can be developed. Basic tables are composed of a header row followed by rows of data below. At a minimum, tables require three or more columns. Table row heights can be set to narrow or wide and be toggled between the two. Column widths can vary by content and only requires a minimum spacing between columns.

| PROPERTY                | PX | REM  |
|-------------------------|----|------|
| Height: narrow          | 32 | 2    |
| Height: wide            | 44 | 2.75 |
| Height: header          | 40 | 2.5  |
| Width                   | Varies based on content and layout | |
| Chevron                 | 12   | 0.75  |
| Checkbox                | 18   | 1.125 |

<div data-insert-component="ImageGrid">
  <div>
    ![Structure for a narrow row Data Table](images/data-table-style-1.png)
  </div>
  <div>
    ![Structure for a wide row Data Table](images/data-table-style-2.png)
  </div>
</div>
_Structure and spacing measurements for narrow and tall rows / Data Table | px / rem_

### Data table

After the simple table structure, tables can be enhanced by adding any of the following: selectable rows, expanding rows, nested tables, row menus, table batch actions, overall table menu, and/or table filter.

| SPACING            | PX   | REM   |
|--------------------|------|-------|
| Title & table      | 16   | 1     |
| Header & caret     |  8   | 0.5   |
| Basic internal     | 24   | 1.5   |
| Enhanced internal  | 16   | 1     |
| Internal elements  | 16   | 1     |
| Between columns    | ≥ 24 | 1.5   |

<div data-insert-component="ImageGrid">
  <div>
    ![Spacing for a basic Data Table](images/data-table-style-3.png)
  </div>
  <div>
    ![Spacing for an enhanced Data Table](images/data-table-style-4.png)
  </div>
</div>
_Structure and spacing measurements for a basic and an enhanced Data Table | px / rem_

### Toolbar

| PROPERTY               | PX   | REM   |
|------------------------|------|-------|
| Icon height            | 24   | 1.5   |
| Spacing: icons         | 16   | 1     |
| Spacing: icons & table | 14   | 0.875  |

---
***
> 
![Spacing for toolbar icons](images/data-table-style-6.png)

_Structure and spacing measurements for toolbar icons | px / rem_

<div data-insert-component="InteractiveSpec">
  <div class="bx--responsive-table-container" data-responsive-table>
    <table class="bx--responsive-table" data-table>
      <thead class="bx--table-head">
        <tr class="bx--table-row">
          <th class="bx--table-header"></th>
          <th class="bx--table-header bx--table-select">
            <input data-event="select-all" id="bx--checkbox-1" class="bx--checkbox" type="checkbox" value="green" name="checkbox">
            <label for="bx--checkbox-1" class="bx--checkbox-label">
              <span class="bx--checkbox-appearance">
                <svg class="bx--checkbox-checkmark" width="12" height="9" viewBox="0 0 12 9" fill-rule="evenodd">
                  <path d="M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z"></path>
                </svg>
              </span>
            </label>
          </th>
          <th tabindex="0" class="bx--table-header bx--table-sort" data-event="sort">
            <span>First Name</span>
            <svg class="bx--table-sort__svg" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
              <path d="M10 0L5 5 0 0z"></path>
            </svg>
          </th>
          <th tabindex="0" class="bx--table-header bx--table-sort" data-event="sort">
            <span>Last Name</span>
            <svg class="bx--table-sort__svg" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
              <path d="M10 0L5 5 0 0z"></path>
            </svg>
          </th>
          <th tabindex="0" class="bx--table-header bx--table-sort" data-event="sort">
            <span>House</span>
            <svg class="bx--table-sort__svg" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
              <path d="M10 0L5 5 0 0z"></path>
            </svg>
          </th>
          <th class="bx--table-header"></th>
        </tr>
      </thead>
      <tbody class="bx--table-body">
        <tr tabindex="0" class="bx--table-row bx--parent-row" data-parent-row>
          <td tabindex="0" class="bx--table-expand" data-event="expand">
            <svg class="bx--table-expand__svg" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
              <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z"></path>
            </svg>
          </td>
          <td class="bx--table-select">
            <input id="bx--checkbox-2" class="bx--checkbox" type="checkbox" value="green" name="checkbox">
            <label for="bx--checkbox-2" class="bx--checkbox-label">
              <span class="bx--checkbox-appearance">
                <svg class="bx--checkbox-checkmark" width="12" height="9" viewBox="0 0 12 9" fill-rule="evenodd">
                  <path d="M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z"></path>
                </svg>
              </span>
            </label>
          </td>
          <td>Harry</td>
          <td>Potter</td>
          <td>Gryfindor</td>
          <td class="bx--table-overflow">
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
                  <button class="bx--overflow-menu-options__btn">Edit routes and access, use title when</button>
                </li>
                <li class="bx--overflow-menu-options__option bx--overflow-menu-options__option--danger">
                  <button class="bx--overflow-menu-options__btn">Delete app</button>
                </li>
              </ul>
            </div>
          </td>
        </tr>
        <tr class="bx--table-row bx--expandable-row bx--expandable-row--hidden">
          <td colspan="6">
            <h4><strong>Harry Potter</strong></h4>
            <p>Harry James Potter (b. 31 July, 1980) was a half-blood wizard, the only child and son of the late James and Lily
              Potter (née Evans), and one of the most famous and powerful wizards of modern times. In what proved to be a vain
              attempt to circumvent a prophecy that stated that a boy born at the end of July of 1980 could be able to defeat
              him, Lord Voldemort tried to murder him when he was a year and three months old. Voldemort murdered Harry's parents
              as they tried to protect him, shortly before attacking Harry.</p>
          </td>
        </tr>
        <tr tabindex="0" class="bx--table-row bx--parent-row" data-parent-row>
          <td tabindex="0" class="bx--table-expand" data-event="expand">
            <svg class="bx--table-expand__svg" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
              <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z"></path>
            </svg>
          </td>
          <td class="bx--table-select">
            <input id="bx--checkbox-3" class="bx--checkbox" type="checkbox" value="green" name="checkbox">
            <label for="bx--checkbox-3" class="bx--checkbox-label">
              <span class="bx--checkbox-appearance">
                <svg class="bx--checkbox-checkmark" width="12" height="9" viewBox="0 0 12 9" fill-rule="evenodd">
                  <path d="M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z"></path>
                </svg>
              </span>
            </label>
          </td>
          <td>Hermoine</td>
          <td>Granger</td>
          <td>Gryfindor</td>
          <td class="bx--table-overflow">
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
                  <button class="bx--overflow-menu-options__btn">Edit routes and access, use title when</button>
                </li>
                <li class="bx--overflow-menu-options__option bx--overflow-menu-options__option--danger">
                  <button class="bx--overflow-menu-options__btn">Delete app</button>
                </li>
              </ul>
            </div>
          </td>
        </tr>
        <tr class="bx--table-row bx--expandable-row bx--expandable-row--hidden">
          <td colspan="6">
            <table class="bx--responsive-table bx--responsive-table--static-size">
              <thead>
                <tr class="bx--table-row">
                  <th class="bx--table-header">First Name</th>
                  <th class="bx--table-header">Last Name</th>
                  <th class="bx--table-header">House</th>
                  <th class="bx--table-header">Hello</th>
                  <th class="bx--table-header">Column</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Godric</td>
                  <td>Gryfindor</td>
                  <td>Origin</td>
                  <td>Something</td>
                  <td>Hooray</td>
                </tr>
                <tr>
                  <td>Salazar</td>
                  <td>Slytherin</td>
                  <td>Origin</td>
                  <td>Something</td>
                  <td>Hooray</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr tabindex="0" class="bx--table-row bx--parent-row" data-parent-row>
          <td tabindex="0" class="bx--table-expand" data-event="expand">
            <svg class="bx--table-expand__svg" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
              <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z"></path>
            </svg>
          </td>
          <td class="bx--table-select">
            <input id="bx--checkbox-4" class="bx--checkbox" type="checkbox" value="green" name="checkbox">
            <label for="bx--checkbox-4" class="bx--checkbox-label">
              <span class="bx--checkbox-appearance">
                <svg class="bx--checkbox-checkmark" width="12" height="9" viewBox="0 0 12 9" fill-rule="evenodd">
                  <path d="M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z"></path>
                </svg>
              </span>
            </label>
          </td>
          <td>Ron</td>
          <td>Weasley</td>
          <td>Gryfindor</td>
          <td class="bx--table-overflow">
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
                  <button class="bx--overflow-menu-options__btn">Edit routes and access, use title when</button>
                </li>
                <li class="bx--overflow-menu-options__option bx--overflow-menu-options__option--danger">
                  <button class="bx--overflow-menu-options__btn">Delete app</button>
                </li>
              </ul>
            </div>
          </td>
        </tr>
        <tr class="bx--table-row bx--expandable-row bx--expandable-row--hidden">
          <td colspan="6">
            <img src="https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg" />
          </td>
        </tr>
        <tr tabindex="0" class="bx--table-row bx--parent-row" data-parent-row>
          <td tabindex="0" class="bx--table-expand" data-event="expand">
            <svg class="bx--table-expand__svg" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
              <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z"></path>
            </svg>
          </td>
          <td class="bx--table-select">
            <input id="bx--checkbox-5" class="bx--checkbox" type="checkbox" value="green" name="checkbox">
            <label for="bx--checkbox-5" class="bx--checkbox-label">
              <span class="bx--checkbox-appearance">
                <svg class="bx--checkbox-checkmark" width="12" height="9" viewBox="0 0 12 9" fill-rule="evenodd">
                  <path d="M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z"></path>
                </svg>
              </span>
            </label>
          </td>
          <td>Draco</td>
          <td>Malfoy</td>
          <td>Slytherin</td>
          <td class="bx--table-overflow">
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
                  <button class="bx--overflow-menu-options__btn">Edit routes and access, use title when</button>
                </li>
                <li class="bx--overflow-menu-options__option bx--overflow-menu-options__option--danger">
                  <button class="bx--overflow-menu-options__btn">Delete app</button>
                </li>
              </ul>
            </div>
          </td>
        </tr>
        <tr class="bx--table-row bx--expandable-row bx--expandable-row--hidden">
          <td colspan="6">
            <p>Draco Malfoy is in Gryfindor House. He is in his fifth year.</p>
          </td>
        </tr>
        <tr tabindex="0" class="bx--table-row bx--parent-row" data-parent-row>
          <td tabindex="0" class="bx--table-expand" data-event="expand">
            <svg class="bx--table-expand__svg" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
              <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z"></path>
            </svg>
          </td>
          <td class="bx--table-select">
            <input id="bx--checkbox-6" class="bx--checkbox" type="checkbox" value="green" name="checkbox">
            <label for="bx--checkbox-6" class="bx--checkbox-label">
              <span class="bx--checkbox-appearance">
                <svg class="bx--checkbox-checkmark" width="12" height="9" viewBox="0 0 12 9" fill-rule="evenodd">
                  <path d="M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z"></path>
                </svg>
              </span>
            </label>
          </td>
          <td>Blaise</td>
          <td>Zabini</td>
          <td>Slytherin</td>
          <td class="bx--table-overflow">
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
                  <button class="bx--overflow-menu-options__btn">Edit routes and access, use title when</button>
                </li>
                <li class="bx--overflow-menu-options__option bx--overflow-menu-options__option--danger">
                  <button class="bx--overflow-menu-options__btn">Delete app</button>
                </li>
              </ul>
            </div>
          </td>
        </tr>
        <tr class="bx--table-row bx--expandable-row bx--expandable-row--hidden">
          <td colspan="6">
            <p>Blaise Zabini is in Gryfindor House. He is in his fifth year.</p>
          </td>
        </tr>
        <tr tabindex="0" class="bx--table-row bx--parent-row" data-parent-row>
          <td tabindex="0" class="bx--table-expand" data-event="expand">
            <svg class="bx--table-expand__svg" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
              <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z"></path>
            </svg>
          </td>
          <td class="bx--table-select">
            <input id="bx--checkbox-7" class="bx--checkbox" type="checkbox" value="green" name="checkbox">
            <label for="bx--checkbox-7" class="bx--checkbox-label">
              <span class="bx--checkbox-appearance">
                <svg class="bx--checkbox-checkmark" width="12" height="9" viewBox="0 0 12 9" fill-rule="evenodd">
                  <path d="M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z"></path>
                </svg>
              </span>
            </label>
          </td>
          <td>Cedric</td>
          <td>Diggory</td>
          <td>Hufflepuff</td>
          <td class="bx--table-overflow">
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
                  <button class="bx--overflow-menu-options__btn">Edit routes and access, use title when</button>
                </li>
                <li class="bx--overflow-menu-options__option bx--overflow-menu-options__option--danger">
                  <button class="bx--overflow-menu-options__btn">Delete app</button>
                </li>
              </ul>
            </div>
          </td>
        </tr>
        <tr class="bx--table-row bx--expandable-row bx--expandable-row--hidden">
          <td colspan="6">
            <p>Cedric Diggory is in Hufflepuff House. He is in his fifth year.</p>
          </td>
        </tr>
        <tr tabindex="0" class="bx--table-row bx--parent-row" data-parent-row>
          <td tabindex="0" class="bx--table-expand" data-event="expand">
            <svg class="bx--table-expand__svg" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
              <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z"></path>
            </svg>
          </td>
          <td class="bx--table-select">
            <input id="bx--checkbox-8" class="bx--checkbox" type="checkbox" value="green" name="checkbox">
            <label for="bx--checkbox-8" class="bx--checkbox-label">
              <span class="bx--checkbox-appearance">
                <svg class="bx--checkbox-checkmark" width="12" height="9" viewBox="0 0 12 9" fill-rule="evenodd">
                  <path d="M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z"></path>
                </svg>
              </span>
            </label>
          </td>
          <td>Luna</td>
          <td>Lovegood</td>
          <td>Ravenclaw</td>
          <td class="bx--table-overflow">
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
                  <button class="bx--overflow-menu-options__btn">Edit routes and access, use title when</button>
                </li>
                <li class="bx--overflow-menu-options__option bx--overflow-menu-options__option--danger">
                  <button class="bx--overflow-menu-options__btn">Delete app</button>
                </li>
              </ul>
            </div>
          </td>
        </tr>
        <tr class="bx--table-row bx--expandable-row bx--expandable-row--hidden">
          <td colspan="6">
            <p>Luna Lovegood is in Ravenclaw House. She is in her fifth year.</p>
          </td>
        </tr>
        <tr tabindex="0" class="bx--table-row bx--parent-row" data-parent-row>
          <td tabindex="0" class="bx--table-expand" data-event="expand">
            <svg class="bx--table-expand__svg" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
              <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z"></path>
            </svg>
          </td>
          <td class="bx--table-select">
            <input id="bx--checkbox-9" class="bx--checkbox" type="checkbox" value="green" name="checkbox">
            <label for="bx--checkbox-9" class="bx--checkbox-label">
              <span class="bx--checkbox-appearance">
                <svg class="bx--checkbox-checkmark" width="12" height="9" viewBox="0 0 12 9" fill-rule="evenodd">
                  <path d="M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z"></path>
                </svg>
              </span>
            </label>
          </td>
          <td>Cho</td>
          <td>Chang</td>
          <td>Ravenclaw</td>
          <td class="bx--table-overflow">
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
                  <button class="bx--overflow-menu-options__btn">Edit routes and access, use title when</button>
                </li>
                <li class="bx--overflow-menu-options__option bx--overflow-menu-options__option--danger">
                  <button class="bx--overflow-menu-options__btn">Delete app</button>
                </li>
              </ul>
            </div>
          </td>
        </tr>
        <tr class="bx--table-row bx--expandable-row bx--expandable-row--hidden">
          <td colspan="6">
            <p>Cho Chang is in Gryfindor House. She is in her fifth year.</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
