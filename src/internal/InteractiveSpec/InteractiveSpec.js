import React, { Component } from 'react';
// import classNames from 'classnames';
import { Checkbox } from 'carbon-components-react';

class InteractiveSpec extends Component {
  static defaultProps = {
    paddingColor: '#6EFFFE',
    marginColor: '#4BFECD',
  };

  state = {
    padding: false,
    margin: false,
    dimensions: false,
  };

  componentDidMount() {
    const mainComp = this.wrapper.children[1].firstElementChild;
    // mainComp.addEventListener('mouseover', e => this.addSpecs(e));
    window.CarbonComponents.Accordion.init();

    const marginEls = [...this.wrapper.querySelectorAll('[data-spec-margin')];
    marginEls.forEach(el => {
      const twin = this.createTwin(el, 'margin');
      twin.style.opacity = '1';
    });
  }

  componentDidUpdate() {
    [...this.wrapper.querySelectorAll('.margin')].forEach(marginSpec => {
      if (this.state.margin === false) {
        marginSpec.classList.remove('active');
      } else {
        marginSpec.classList.add('active');
      }
    });

    [...this.wrapper.querySelectorAll('.dimensions')].forEach(dimensionSpec => {
      if (this.state.dimensions === false) {
        dimensionSpec.classList.remove('active');
      } else {
        dimensionSpec.classList.add('active');
      }
    });

    [...this.wrapper.querySelectorAll('.padding')].forEach(paddingSpec => {
      if (this.state.padding === false) {
        paddingSpec.classList.remove('active');
      } else {
        paddingSpec.classList.add('active');
      }
    });
  }

  addSpecs = e => {
    const currentEl = e.target;
    currentEl.classList.add('comp');
    const isTwin = currentEl.classList.contains('twin');

    if (!isTwin) {
      let hasMarginTwin = false;
      let hasPaddingTwin = false;
      let hasDimensionTwin = false;

      [...currentEl.children].forEach(child => {
        hasMarginTwin = child.classList.contains('margin');
        hasPaddingTwin = child.classList.contains('padding');
        hasDimensionTwin = child.classList.contains('dimensions');
      });

      const noMarginValues =
        window.getComputedStyle(currentEl).margin === '0px';
      const noPaddingValues =
        window.getComputedStyle(currentEl).padding === '0px';

      if (!(noMarginValues && noPaddingValues)) {
        if (this.state.margin === true && !hasMarginTwin && !noMarginValues) {
          const twin = this.createTwin(currentEl, 'margin');
        }

        if (
          this.state.padding === true &&
          !hasPaddingTwin &&
          !noPaddingValues
        ) {
          const twin = this.createTwin(currentEl, 'padding');
        }

        if (this.state.dimensions === true && !hasDimensionTwin) {
          const twin = this.createTwin(currentEl, 'dimensions');
        }
      }
    }

    currentEl.addEventListener('mouseout', () => {
      [...currentEl.querySelectorAll('.twin')].forEach(twin => {
        twin.parentNode.removeChild(twin);
      });
    });
  };

  createTwin = (spec, prop) => {
    const twin = document.createElement('span');
    const isSvg = spec.nodeName === 'svg' || spec.nodeName === 'path';
    twin.classList.add('twin');
    twin.style.backgroundColor = 'rgba(0, 0, 0, .05)';
    twin.style.width = `${spec.getBoundingClientRect().width}px`;
    twin.style.height = `${spec.getBoundingClientRect().height}px`;
    if (!(window.getComputedStyle(spec).position === 'absolute')) {
      spec.style.position = 'relative';
    }
    spec.style.maxWidth = `${spec.getBoundingClientRect().width}px`;

    if (prop === 'margin') {
      twin.classList.add('margin');
      twin.classList.add('active');
      twin.style.borderColor = this.props.marginColor;
      twin.style.borderTopWidth = window.getComputedStyle(spec).marginTop;
      twin.style.borderRightWidth = window.getComputedStyle(spec).marginRight;
      twin.style.borderBottomWidth = window.getComputedStyle(spec).marginBottom;
      twin.style.borderLeftWidth = window.getComputedStyle(spec).marginLeft;
      const borderLeft = window.getComputedStyle(spec).borderLeftWidth;
      const borderTop = window.getComputedStyle(spec).borderTopWidth;
      const calcPosLeft =
        +borderLeft.split('px')[0] +
        +window.getComputedStyle(spec).marginLeft.split('px')[0];
      const calcPosTop =
        +borderTop.split('px')[0] +
        +window.getComputedStyle(spec).marginTop.split('px')[0];
      twin.style.left = `-${calcPosLeft}px`;
      twin.style.top = `-${calcPosTop}px`;
    }

    if (prop === 'padding') {
      twin.classList.add('padding');
      twin.classList.add('active');
      twin.style.borderColor = this.props.paddingColor;
      twin.style.borderTopWidth = window.getComputedStyle(spec).paddingTop;
      twin.style.borderRightWidth = window.getComputedStyle(spec).paddingRight;
      twin.style.borderBottomWidth = window.getComputedStyle(
        spec,
      ).paddingBottom;
      twin.style.borderLeftWidth = window.getComputedStyle(spec).paddingLeft;
      twin.style.borderRightWidth = window.getComputedStyle(spec).paddingLeft;
      const borderLeft = window.getComputedStyle(spec).borderLeftWidth;
      const borderTop = window.getComputedStyle(spec).borderTopWidth;
      twin.style.left = `-${borderLeft}`;
      twin.style.top = `-${borderTop}`;
    }

    if (prop === 'dimensions') {
      twin.classList.add('dimensions');
      twin.style.borderBottom = '3px solid #FC38FC';
      twin.style.borderRight = '3px solid #FC38FC';
      twin.style.width = window.getComputedStyle(spec).width;
      twin.style.height = window.getComputedStyle(spec).height;
      const borderTop = window.getComputedStyle(spec).borderTopWidth;
      twin.style.top = `-${borderTop}`;
      const borderLeft = window.getComputedStyle(spec).borderLeftWidth;
      twin.style.left = `-${borderLeft}`;
    }

    if (isSvg) {
      const parent = spec.parentNode;
      spec.parentNode.appendChild(twin);
      const parentLeft = parent.getBoundingClientRect().left;
      const childLeft = spec.getBoundingClientRect().left;
      const parentTop = parent.getBoundingClientRect().top;
      const childTop = spec.getBoundingClientRect().top;
      twin.style.left = `${childLeft - parentLeft}px`;
      twin.style.top = `${childTop - parentTop}px`;
      if (!(window.getComputedStyle(parent).position === 'absolute')) {
        parent.style.position = 'relative';
      }
    } else {
      spec.appendChild(twin);
    }

    return twin;
  };

  updateSelectedSpec = (checked, prop, e) => {
    this.setState({
      [e.target.value]: checked,
    });
  };

  render() {
    return (
      <div
        ref={wrapper => {
          this.wrapper = wrapper;
        }}
        className="spectacular-wrapper"
      >
        <div className="checkboxes">
          <Checkbox
            onChange={this.updateSelectedSpec}
            labelText="Margin"
            id={Math.floor((Math.random() + 1) * 100).toString()}
            value="margin"
          />
          <Checkbox
            onChange={this.updateSelectedSpec}
            labelText="Padding"
            id={Math.floor((Math.random() + 1) * 100).toString()}
            value="padding"
          />
          <Checkbox
            onChange={this.updateSelectedSpec}
            labelText="Dimensions"
            id={Math.floor((Math.random() + 1) * 100).toString()}
            value="dimensions"
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: this.props.children }} />
      </div>
    );
  }
}

export default InteractiveSpec;
