import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Checkbox, Icon } from 'carbon-components-react';

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
    padding: true,
    margin: true,
    dimensions: true,
    interactiveMode: false,
    filterOptions: false
  };

  componentDidMount() {
    if (window.location.pathname.split('/')[3] === 'style') {
      window.CarbonComponents.Accordion.init();
      const mainComp = this.wrapper.children[1].firstElementChild;
      if (this.state.interactiveMode === true) {
        mainComp.addEventListener('mouseover', e => this.addSpecs(e));
      } else {
        this.addTwins();
      }
    }
  }

  componentDidUpdate() {
    const mainComp = this.wrapper.children[1].firstElementChild;
    if (this.state.interactiveMode === true) {
      [... this.wrapper.querySelectorAll('.twin-component')].forEach(twin => {
        twin.parentNode.removeChild(twin);
      });
      mainComp.removeEventListener('click', () => this.addTwins());
      mainComp.addEventListener('mouseover', e => this.addSpecs(e));
    } else {
      this.addTwins();
      const margins = [...this.wrapper.querySelectorAll('.margin')];
      margins.forEach(margin => {
        if (!(this.state.margin === true)) {
          margin.classList.remove('active');
        } else {
          margin.classList.add('active');
        }
      });
      const paddings = [...this.wrapper.querySelectorAll('.padding')];
      paddings.forEach(padding => {
        if (!(this.state.padding === true)) {
          padding.classList.remove('active');
        } else {
          padding.classList.add('active');
        }
      });
      const dimensions = [...this.wrapper.querySelectorAll('.dimensions')];
      dimensions.forEach(dimension => {
        if (!(this.state.dimensions === true)) {
          dimension.classList.remove('active');
        } else {
          dimension.classList.add('active');
        }
      });
      mainComp.removeEventListener('mouseover', e => this.addSpecs(e));
    }
  }

  addTwins = () => {
    console.log(this.state);
    if (this.state.margin === true) {
      const marginEls = [...this.wrapper.querySelectorAll('[data-spec-margin]')];
      marginEls.forEach(el => {
        if (el.querySelector('.margin') === null) {
          const twin = this.createTwin(el, 'margin');
          twin.style.opacity = '.7';
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
    if (this.state.padding === true) {
      const paddingEls = [...this.wrapper.querySelectorAll('[data-spec-padding]')];
      paddingEls.forEach(el => {
        if (el.querySelector('.padding') === null) {
          const twin = this.createTwin(el, 'padding');
          twin.style.opacity = '.7';
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

    if (this.state.dimensions === true) {
      const dimensEls = [...this.wrapper.querySelectorAll('[data-spec-dimensions]')];
      dimensEls.forEach(el => {
        if (el.querySelector('.dimensions') === null) {
          const twin = this.createTwin(el, 'dimensions');
          twin.style.opacity = '.7';
        } else {
          const currentEl = el;
          const twin = currentEl.querySelector('.dimensions');
          twin.style.borderBottom = '3px solid #FC38FC';
          twin.style.borderRight = '3px solid #FC38FC';
          twin.style.height = `${currentEl.getBoundingClientRect().height}px`;
          const borderTop = window.getComputedStyle(currentEl).borderTopWidth;
          twin.style.top = `-${borderTop}`;
          const borderLeft = window.getComputedStyle(currentEl).borderLeftWidth;
          twin.style.left = `-${borderLeft}`;
        }
      });
    } else {
      this.removeDimensionTwins();
    }
  }

  addSpecs = e => {
    const currentEl = e.target;
    currentEl.classList.add('parent-component');
    const isTwin = currentEl.classList.contains('twin-component');

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
          const twin = this.createTwin(currentEl, 'margin'); // eslint-disable-line
        }

        if (
          this.state.padding === true &&
          !hasPaddingTwin &&
          !noPaddingValues
        ) {
          const twin = this.createTwin(currentEl, 'padding'); // eslint-disable-line
        }

        if (this.state.dimensions === true && !hasDimensionTwin) {
          const twin = this.createTwin(currentEl, 'dimensions'); // eslint-disable-line
        }
      }
    }
    if (this.state.interactiveMode === true) {
      currentEl.addEventListener('mouseout', () => this.removeTwins(currentEl));
    } else {
      currentEl.removeEventListener('mouseout', () => this.removeTwins(currentEl));
    }
  };

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

  createTwin = (spec, prop) => {
    const parentComp = spec;
    const twin = document.createElement('span');
    const isSvg = parentComp.nodeName === 'svg' || parentComp.nodeName === 'path';
    twin.classList.add('twin-component');
    twin.style.width = `${parentComp.getBoundingClientRect().width}px`;
    twin.style.height = `${parentComp.getBoundingClientRect().height}px`;
    if (!(window.getComputedStyle(parentComp).position === 'absolute')) {
      parentComp.style.position = 'relative';
    }

    if (prop === 'margin') {
      twin.classList.add('margin');
      twin.classList.add('active');
      const afterWidth = window.getComputedStyle(parentComp, ':after').width;
      if (!(afterWidth === '')) {
        twin.style.width = `${parentComp.getBoundingClientRect().width - +afterWidth.split('px')[0]}px`;
      } else {
        twin.style.width = `${parentComp.getBoundingClientRect().width}px`;
      }
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
      const borderLeft = window.getComputedStyle(spec).borderLeftWidth;
      const borderTop = window.getComputedStyle(spec).borderTopWidth;
      twin.style.left = `-${borderLeft}`;
      twin.style.top = `-${borderTop}`;
    } else if (prop === 'dimensions') {
      twin.classList.add('dimensions');
      const borderLeft = window.getComputedStyle(spec).borderLeftWidth;
      if (parentComp.dataset.specDimensions === 'height') {
        twin.style.borderRight = '2px solid #FC38FC';
        twin.style.left = `-${borderLeft}`;
      } else if (parentComp.dataset.specDimensions === 'width') {
        twin.style.borderBottom = '2px solid #FC38FC';
      } else {
        twin.style.borderBottom = '2px solid #FC38FC';
        twin.style.borderRight = '2px solid #FC38FC';
      }
      twin.style.width = `${parentComp.getBoundingClientRect().width}px`;
      twin.style.height = `${parentComp.getBoundingClientRect().height}px`;
      const borderTop = window.getComputedStyle(spec).borderTopWidth;
      twin.style.top = `-${borderTop}`;

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
      // if (prop === 'dimensions') {
      //   twin.style.left = `${childLeft - parentLeft - 10}px`;
      // }
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
    const checkboxesClasses = classNames({
      'checkboxes': true,
      'checkboxes--active': this.state.filterOptions
    });
    return (
      <div
        ref={wrapper => {
          this.wrapper = wrapper;
        }}
        className="spectacular-wrapper"
      >
        <div className="spectacular-wrapper__header">
          <div onClick={() => { this.setState({ filterOptions: !this.state.filterOptions }); }} className="spectacular-wrapper__filter-btn">
            <Icon name="icon--filter" description="Toggle filter options" className="filter-icon" />
          </div>
          <div className={checkboxesClasses}>
            <Checkbox
              onChange={this.updateSelectedSpec}
              checked={this.state.margin === true}
              labelText="Margin"
              id={Math.floor((Math.random() + 1) * 100).toString()}
              value="margin"
            />
            <Checkbox
              onChange={this.updateSelectedSpec}
              checked={this.state.padding === true}
              labelText="Padding"
              id={Math.floor((Math.random() + 1) * 100).toString()}
              value="padding"
            />
            <Checkbox
              onChange={this.updateSelectedSpec}
              checked={this.state.dimensions === true}
              labelText="Dimensions"
              id={Math.floor((Math.random() + 1) * 100).toString()}
              value="dimensions"
            />
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: this.props.children }}></div>
      </div>
    );
  }
}

export default InteractiveSpec;
