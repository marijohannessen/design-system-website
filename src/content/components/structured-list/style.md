## Color
| ATTRIBUTE    | SCSS          | HEX      |
|----------|---------------|----------|
| Text     | $text-01      | #152934  |
| Table header: border-bottom | $brand-01 | #3d70b2 |
| Optional border | $ui-04 | #dfe3e6    |
| Selection list row:hover  | $brand-02 @ 10% | #5596e6    |
| Checkmark icon | $brand-02  | #5596e6    |


## Typography
Structured List headers should be set in all caps, while all other text is set in sentence case. All typography is left aligned. **Line height** for Structured Lists should be set at 18px / 1.25rem.

| PROPERTY | FONT-SIZE (px/rem)     | FONT-WEIGHT  |
|----------|-----------------|--------------|
| Header   | 12 / 0.75 | Bold / 700   |
| Text: 1st column | 14 / 0.75 | Bold / 700   |
| Text     | 14 / 0.875 | Normal / 400   |

## Structure
Structured Lists by default are not accompanied by a border, but one may be added for stylistic purposes, and should be set at 1px.  


| PROPERTY             | PX | REM  |
|----------------------|----|------|
| Width                | varies based on content and layout |   |
| Spacing: content-right| 16 | 1    |
| Spacing: checkmark    | 12 | 0.75 |
| Row spacing: tall     | 16 | 1    |
| Row spacing: narrow   | 10 | 0.625|
| Checkmark glyph       | 16 | 1   |


![Spacing and measurements for Structured List](images/structured-list-style-1.png)

_Spacing and measurements for Structured List | px / rem_


![Spacing and measurements for Structured List with selection](images/structured-list-style-2.png)
_Spacing and measurements for Structured List with selection | px / rem_

<div data-insert-component="InteractiveSpec">
  <section class="bx--structured-list bx--structured-list--border bx--structured-list--selection" data-structured-list>
    <div class="bx--structured-list-thead">
      <div class="bx--structured-list-row bx--structured-list-row--header-row">
        <div class="bx--structured-list-th"></div>
        <div class="bx--structured-list-th">service</div>
        <div class="bx--structured-list-th">type</div>
        <div class="bx--structured-list-th">description</div>
      </div>
    </div>
    <div class="bx--structured-list-tbody">
      <label for="apache-id" aria-label="apache spark" class="bx--structured-list-row bx--structured-list-row--selected" tabindex="0">
        <input tabindex="-1" id="apache-id" class="bx--structured-list-input" value="apache spark" type="radio" name="services" title="apache spark"
          checked />
        <div class="bx--structured-list-td">
          <svg class="bx--structured-list-svg" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd">
            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6.7 11.5L3.4 8.1l1.4-1.4 1.9 1.9 4.1-4.1 1.4 1.4-5.5 5.6z">
            </path>
          </svg>
        </div>
        <div class="bx--structured-list-td bx--structured-list-content--nowrap">Apache Spark</div>
        <div class="bx--structured-list-td">IBM</div>
        <div class="bx--structured-list-td">
          Apache Spark is an open source cluster computing framework optimized for extremely fast and large scale data processing, which you can access via the newly integrated notebook interface IBM Analytics for Apache Spark.
        </div>
      </label>
      <label for="cloudant-id" aria-label="Cloudant" class="bx--structured-list-row" tabindex="0">
        <input tabindex="-1" id="cloudant-id" class="bx--structured-list-input" value="Cloudant" type="radio" name="services" title="Cloudant"
        />
        <div class="bx--structured-list-td">
          <svg class="bx--structured-list-svg" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd">
            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6.7 11.5L3.4 8.1l1.4-1.4 1.9 1.9 4.1-4.1 1.4 1.4-5.5 5.6z">
            </path>
          </svg>
        </div>
        <div class="bx--structured-list-td bx--structured-list-content--nowrap">Cloudant</div>
        <div class="bx--structured-list-td">IBM</div>
        <div class="bx--structured-list-td">Cloudant NoSQL DB is a fully managed data layer designed for modern web and mobile applications that leverages a flexible JSON schema.</div>
      </label>
      <label for="block-storate-id" aria-label="Cloudant" class="bx--structured-list-row" tabindex="0">
        <input tabindex="-1" id="block-storate-id" class="bx--structured-list-input" value="block-storage" type="radio" name="services"
          title="block-storage" />
        <div class="bx--structured-list-td">
          <svg class="bx--structured-list-svg" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd">
            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6.7 11.5L3.4 8.1l1.4-1.4 1.9 1.9 4.1-4.1 1.4 1.4-5.5 5.6z">
            </path>
          </svg>
        </div>
        <div class="bx--structured-list-td bx--structured-list-content--nowrap">Block Storage</div>
        <div class="bx--structured-list-td">IBM</div>
        <div class="bx--structured-list-td">Get local disk performance with SAN persistence and durability. Increase storage capacity available to your Bluemix Virtual and Bare Metal Servers with a maximum of 48k IOPs.*</div>
      </label>
      <label for="open-whisk-id" aria-label="Cloudant" class="bx--structured-list-row" tabindex="0">
        <input tabindex="-1" id="open-whisk-id" class="bx--structured-list-input" value="open-whisk" type="radio" name="services" title="open-whisk" />
        <div class="bx--structured-list-td">
          <svg class="bx--structured-list-svg" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd">
            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6.7 11.5L3.4 8.1l1.4-1.4 1.9 1.9 4.1-4.1 1.4 1.4-5.5 5.6z">
            </path>
          </svg>
        </div>
        <div class="bx--structured-list-td bx--structured-list-content--nowrap">Open Whisk</div>
        <div class="bx--structured-list-td">IBM</div>
        <div class="bx--structured-list-td">OpenWhisk is an open-source server less compute platform. It executes your functions (actions) in response to events from triggers. It costs nothing when not in use.</div>
      </label>
    </div>
  </section>
</div>
