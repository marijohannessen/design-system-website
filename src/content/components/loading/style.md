## Color

| ATTRIBUTE              | SCSS          | HEX      |
|--------------------|---------------|----------|
| Large spinner      | $nav-05       | #00b4a0  |
| Small spinner      | $ui-05        | #8c9ba5  |
| Overlay            | $ui-01 @ 60%  | #ffffff  |

## Structure

| PROPERTY             | PX | REM  |
|----------------------|----|------|
| Large spinner        | 84 | 5.25 |
| Small spinner        | 16 | 1    |

<div data-insert-component="ImageGrid">
  <div>
    ![Large spinner structure measurements](images/loading-style-1.png)
  </div>
  <div>
    ![Small spinner structure measurements](images/loading-style-2.png)
  </div>
</div>
_Structure measurements for small and large loading spinner | px / rem_

### Placement

The large Loading spinner should appear centered over a page or content that it is loading. Please note that the top-level navigation is not included in the page loading overlay.

_
![Large spinner in context example](images/loading-style-4.png)
_
_Example of a large loading spinner in product context_

<div data-insert-component="InteractiveSpec">
  <div class="bx--loading-overlay">
    <div data-loading class="bx--loading">
      <svg class="bx--loading__svg" viewBox="-75 -75 150 150">
        <circle cx="0" cy="0" r="37.5" />
      </svg>
    </div>
  </div>
</div>
