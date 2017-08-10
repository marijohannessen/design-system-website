import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { RadioButton, RadioButtonGroup } from 'carbon-components-react';

class InteractiveSpec extends Component {
  static propTypes = {
    paddingColor: PropTypes.string,
    marginColor: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    paddingColor: '#6EFFFE',
    marginColor: '#4BFECD',
  };

  state = {
    spec: {
      padding: true,
      margin: false,
      dimensions: false,
    },
    num: 1
  };

  componentDidMount() {
    if (window.location.pathname.split('/')[3] === 'style') {
      window.CarbonComponents.Accordion.init();
      window.CarbonComponents.OverflowMenu.init();

      this.addTwins();
    }
  }

  componentDidUpdate() {
    this.addTwins();
    const margins = [...this.wrapper.querySelectorAll('.margin')];
    margins.forEach(margin => {
      if (!(this.state.spec.margin === true)) {
        margin.classList.remove('active');
      } else {
        margin.classList.add('active');
      }
    });
    const paddings = [...this.wrapper.querySelectorAll('.padding')];
    paddings.forEach(padding => {
      if (!(this.state.spec.padding === true)) {
        padding.classList.remove('active');
      } else {
        padding.classList.add('active');
      }
    });
    const dimensions = [...this.wrapper.querySelectorAll('.dimensions')];
    dimensions.forEach(dimension => {
      if (!(this.state.spec.dimensions === true)) {
        dimension.classList.remove('active');
      } else {
        dimension.classList.add('active');
      }
    });
  }

  addTwins = () => { // eslint-disable-line
    if (this.state.spec.margin === true) {
      const marginEls = [...this.wrapper.querySelectorAll('[data-spec-margin]')];
      marginEls.forEach(el => {
        if (el.querySelector('.margin') === null) {
          const twin = this.createTwin(el, 'margin');
          twin.querySelector('.left').style.left = `-${(+window.getComputedStyle(twin).borderLeftWidth.split('px')[0] * 2) + 4}px`;
        } else {
          const currentEl = el;
          const twin = currentEl.querySelector('.margin');
          twin.style.width = `${currentEl.getBoundingClientRect().width}px`;
          twin.style.height = `${currentEl.getBoundingClientRect().height}px`;
          twin.style.borderTopWidth = window.getComputedStyle(currentEl).marginTop;
          twin.style.borderBottomWidth = window.getComputedStyle(
            currentEl,
          ).marginBottom;
          twin.style.borderLeftWidth = window.getComputedStyle(currentEl).marginLeft;
          twin.style.borderRightWidth = window.getComputedStyle(currentEl).marginRight;
        }
      });
    } else {
      this.removeMarginTwins();
    }

    // Add padding twins
    if (this.state.spec.padding === true) {
      const paddingEls = [...this.wrapper.querySelectorAll('[data-spec-padding]')];
      paddingEls.forEach(el => {
        if (el.querySelector('.padding') === null) {
          const twin = this.createTwin(el, 'padding');

          const bottomVal = +window.getComputedStyle(twin).borderBottomWidth.split('px')[0];
          const leftVal = +window.getComputedStyle(twin).borderLeftWidth.split('px')[0];
          const topVal = +window.getComputedStyle(twin).borderTopWidth.split('px')[0];
          const rightVal = +window.getComputedStyle(twin).borderRightWidth.split('px')[0];

          twin.querySelector('.bottom').style.bottom = `-${bottomVal > 8 ? 32 : bottomVal * 2}px`;
          twin.querySelector('.top').style.top = `-${topVal > 8 ? 32 : topVal * 2}px`;
          twin.querySelector('.left').style.left = `-${leftVal > 8 ? 32 : leftVal * 2}px`;
          twin.querySelector('.right').style.right = `-${rightVal > 8 ? 32 : rightVal * 2}px`;
        } else {
          const currentEl = el;
          const twin = currentEl.querySelector('.padding');
          twin.style.width = `${currentEl.getBoundingClientRect().width}px`;
          twin.style.height = `${currentEl.getBoundingClientRect().height}px`;
          twin.style.borderTopWidth = window.getComputedStyle(currentEl).paddingTop;
          twin.style.borderBottomWidth = window.getComputedStyle(
            currentEl,
          ).paddingBottom;
          twin.style.borderLeftWidth = window.getComputedStyle(currentEl).paddingLeft;
          twin.style.borderRightWidth = window.getComputedStyle(currentEl).paddingRight;
        }
      });
    } else {
      this.removePaddingTwins();
    }
    // DIMENSIONS
    if (this.state.spec.dimensions === true) {
      const dimensEls = [...this.wrapper.querySelectorAll('[data-spec-dimensions]')];
      let num = 1;
      let heights = 0;
      dimensEls.forEach(el => {
        if (el.dataset.specDimensions === 'height') {
          heights++;
        }
        if (heights > 1) {
          num += 1.5;
        }
        if (el.querySelector('.dimensions') === null) {
          const twin = this.createTwin(el, 'dimensions', num); // eslint-disable-line
          // twin.style.opacity = '.7';
        } else {
          const parentComp = el;

          // Twin
          const twin = parentComp.querySelector('.dimensions');

          // The border left width
          const borderLeft = window.getComputedStyle(parentComp).borderLeftWidth;

          // The border top width
          const borderTop = window.getComputedStyle(parentComp).borderTopWidth;

          if (parentComp.dataset.specDimensions === 'height') {
            twin.classList.add('height');
            twin.style.borderRight = '2px solid #FC38FC';
            twin.style.left = `-${borderLeft}`;
          } else if (parentComp.dataset.specDimensions === 'width') {
            twin.classList.add('width');
            twin.style.borderBottom = '2px solid #FC38FC';
            twin.style.top = `-${borderTop}`;
          } else {
            twin.style.borderBottom = '2px solid #FC38FC';
            twin.style.borderRight = '2px solid #FC38FC';
          }
          twin.style.width = `${parentComp.getBoundingClientRect().width}px`;
          twin.style.height = `${parentComp.getBoundingClientRect().height}px`;
        }
      });
    } else {
      this.removeDimensionTwins();
    }
  }

  removeTwins = (currentEl) => {
    [...currentEl.querySelectorAll('.twin-component')].forEach(twin => {
      twin.parentNode.removeChild(twin);
    });
  }

  removeMarginTwins = () => {
    [...this.wrapper.querySelectorAll('.margin')].forEach(twin => {
      twin.classList.remove('active');
    });
  }

  removePaddingTwins = () => {
    [...this.wrapper.querySelectorAll('.padding')].forEach(twin => {
      twin.parentNode.removeChild(twin);
    });
  }

  removeDimensionTwins = () => {
    [...this.wrapper.querySelectorAll('.dimensions')].forEach(twin => {
      twin.parentNode.removeChild(twin);
    });
  }

  createTwin = (spec, prop, num) => {
    const parentComp = spec;
    const twin = document.createElement('span');
    const isSvg = parentComp.nodeName === 'svg' || parentComp.nodeName === 'path';
    parentComp.classList.add('parent-component');
    twin.classList.add('twin-component');
    twin.style.width = `${parentComp.getBoundingClientRect().width}px`;
    twin.style.height = `${parentComp.getBoundingClientRect().height}px`;
    if (!(window.getComputedStyle(parentComp).position === 'absolute')) {
      parentComp.style.position = 'relative';
    }
    let leftVal;
    let bottomVal;
    if (prop === 'margin') {
      twin.classList.add('margin');
      twin.classList.add('active');
      twin.style.width = `${parentComp.getBoundingClientRect().width}px`;
      twin.style.borderColor = this.props.marginColor;
      twin.style.borderTopWidth = window.getComputedStyle(spec).marginTop;
      twin.style.borderRightWidth = window.getComputedStyle(spec).marginRight;
      twin.style.borderBottomWidth = window.getComputedStyle(spec).marginBottom;
      twin.style.borderLeftWidth = window.getComputedStyle(spec).marginLeft;

      twin.innerHTML = `
      <span>
        <span class="top">
          <p>${window.getComputedStyle(spec).marginTop === '0px' ? '' : window.getComputedStyle(spec).marginTop}</p>
        </span>
        <span class="right">
          <p>${window.getComputedStyle(spec).marginRight === '0px' ? '' : window.getComputedStyle(spec).marginRight}</p>
        </span>
        <span class="bottom">
          <p>${window.getComputedStyle(spec).marginBottom === '0px' ? '' : window.getComputedStyle(spec).marginBottom}</p>
        </span>
        <span class="left">
          <p>${window.getComputedStyle(spec).marginLeft === '0px' ? '' : window.getComputedStyle(spec).marginLeft}</p>
        </span>
      </span>`;

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
      if (twin.style.borderTopWidth === '0px' && twin.style.borderRightWidth === '0px' && twin.style.borderbottomWidth === '0px' && twin.style.borderLeftWidth === '0px') {
        twin.parentNode.removeChild(twin);
      }
    } else if (prop === 'padding') {
      twin.classList.add('padding');
      twin.classList.add('active');
      twin.style.width = window.getComputedStyle(spec).width;
      twin.style.height = window.getComputedStyle(spec).height;
      twin.style.borderColor = this.props.paddingColor;
      twin.style.borderTopWidth = window.getComputedStyle(spec).paddingTop;
      twin.style.borderBottomWidth = window.getComputedStyle(
        spec,
      ).paddingBottom;
      twin.style.borderLeftWidth = window.getComputedStyle(spec).paddingLeft;
      twin.style.borderRightWidth = window.getComputedStyle(spec).paddingRight;

      twin.innerHTML = `
      <span>
        <span class="top">
          <p>${window.getComputedStyle(spec).paddingTop === '0px' ? '' : window.getComputedStyle(spec).paddingTop}</p>
        </span>
        <span class="right">
          <p>${window.getComputedStyle(spec).paddingRight === '0px' ? '' : window.getComputedStyle(spec).paddingRight}</p>
        </span>
        <span class="bottom">
          <p>${window.getComputedStyle(spec).paddingBottom === '0px' ? '' : window.getComputedStyle(spec).paddingBottom}</p>
        </span>
        <span class="left">
          <p>${window.getComputedStyle(spec).paddingLeft === '0px' ? '' : window.getComputedStyle(spec).paddingLeft}</p>
        </span>
      </span>`;

      const borderLeft = window.getComputedStyle(spec).borderLeftWidth;
      const borderTop = window.getComputedStyle(spec).borderTopWidth;
      twin.style.left = `-${borderLeft}`;
      twin.style.top = `-${borderTop}`;
    } else if (prop === 'dimensions') {
      leftVal = 20 * num;
      bottomVal = 20 * num;
      twin.classList.add('dimensions');
      if (parentComp.dataset.specDimensions === 'height') {
        twin.classList.add('height');
        twin.style.borderRight = '2px solid #FC38FC';
        twin.style.left = `${leftVal}px`;
        twin.style.top = '0px';
        twin.innerHTML = `<span><p>${parentComp.getBoundingClientRect().height.toFixed()}px</p></span>`;
      } else if (parentComp.dataset.specDimensions === 'width') {
        twin.classList.add('width');
        twin.style.borderBottom = '2px solid #FC38FC';
        twin.style.top = `${bottomVal}px`;
        twin.innerHTML = `<span><p>${parentComp.getBoundingClientRect().width.toFixed()}px</p></span>`;
      } else {
        twin.style.borderBottom = '2px solid #FC38FC';
        twin.style.borderRight = '2px solid #FC38FC';
        twin.style.top = `${bottomVal}px`;
        twin.style.left = `${leftVal}px`;
      }
      const borderTop = +window.getComputedStyle(parentComp).borderTopWidth.split('px')[0];
      const borderBottom = +window.getComputedStyle(parentComp).borderBottomWidth.split('px')[0];
      const borderLeft = +window.getComputedStyle(parentComp).borderLeftWidth.split('px')[0];
      const borderRight = +window.getComputedStyle(parentComp).borderRightWidth.split('px')[0];
      twin.style.width = `${parentComp.getBoundingClientRect().width - borderLeft - borderRight}px`;
      twin.style.height = `${parentComp.getBoundingClientRect().height - borderTop - borderBottom}px`;
      parentComp.addEventListener('mouseover', () => {
        twin.classList.add('hovered');
      });
      parentComp.addEventListener('mouseout', () => {
        twin.classList.remove('hovered');
      });
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

  updateSelectedSpec = (e) => {
    this.setState({
      spec: {
        [e]: true,
      }
    });
  };

  getDefaultSelected = () => {
    let val;
    Object.keys(this.state.spec).map(i => {
      if (this.state.spec[i] === true) {
        val = i;
      }
    });
    return val;
  }

  render() {
    const checkboxesClasses = classNames({
      'checkboxes': true,
    });
    return (
      <div
        ref={wrapper => {
          this.wrapper = wrapper;
        }}
        className="spectacular-wrapper"
      >
        <div className="spectacular-wrapper__header">
          <div className={checkboxesClasses}>
            <RadioButtonGroup name="radio-buttons" defaultSelected={this.getDefaultSelected()} onChange={this.updateSelectedSpec}>
              <RadioButton
                labelText="Margin"
                id={Math.floor((Math.random() + 1) * 100).toString()}
                value="margin"
              />
              <RadioButton
                labelText="Padding"
                id={Math.floor((Math.random() + 1) * 100).toString()}
                value="padding"
              />
              <RadioButton
                labelText="Dimensions"
                id={Math.floor((Math.random() + 1) * 100).toString()}
                value="dimensions"
              />
            </RadioButtonGroup>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: this.props.children }}></div>
      </div>
    );
  }
}

export default InteractiveSpec;
