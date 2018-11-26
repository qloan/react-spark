import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { sparkClassName } from '../../util';

/**
 * In order for Icons to work you need to include a sprite SVG file at the top of your body tag.
 */
class Icon extends React.Component {
  static size = {
    L: 'l',
    XL: 'xl',
    XXL: 'xxl'
  };

  static defaultProps = {
    size: '',
    variant: '',
    toggle: '',
    select: false
  };
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.string,
    variant: PropTypes.string,
    toggle: PropTypes.string,
    select: PropTypes.bool
  };

  get className() {
    const { size, toggle, variant, select } = this.props
    const baseClass = sparkClassName('component', 'Icon')
    const sizeClass = sparkClassName('component', 'Icon', null, size)
    const toggleClass = sparkClassName('component', 'Icon', null, 'toggle')
    const variantClass = sparkClassName('component', variant, 'icon')
    const selectClass = sparkClassName('base', 'SelectContainer', 'icon')
    return classNames(baseClass, {
      [toggleClass]: Boolean(toggle),
      [sizeClass]: Boolean(size),
      [variantClass]: Boolean(variant),
      [selectClass]: Boolean(select)
    })
  }

  render = () => {
    const { name, toggle } = this.props
    return (
      <svg
        className={this.className}
        data-sprk-toggle='icon'
        viewBox='0 0 64 64'
      >
        <use xlinkHref={`#${name}`} data-sprk-toggle={toggle} />
      </svg>
    )
  };
}

export default Icon
