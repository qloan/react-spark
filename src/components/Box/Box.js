import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { sparkObjectClassName, sparkClassName } from '../../util';
import PADDING_SIZES from './paddingSizes';

class Box extends React.Component {
  static defaultProps = {
    children: null,
    padding: null
  };

  static propTypes = {
    children: PropTypes.node,
    padding: PropTypes.oneOf(
      Object.keys(PADDING_SIZES).map(itm => PADDING_SIZES[itm])
    ),
    color: PropTypes.string
  };

  get className() {
    const { className, color, padding } = this.props
    const block = 'Box';
    const paddingSizeClassName = sparkObjectClassName(block, null, padding)
    const colorClassName = sparkClassName(
      'utility',
      'BackgroundColor',
      null,
      `${color}`
    )

    return classNames(
      sparkObjectClassName(block),
      { [paddingSizeClassName]: padding },
      { [colorClassName]: Boolean(color) },
      { [className]: className }
    )
  }

  render = () => {
    const { children, className, ...props } = this.props

    return (
      <div className={this.className} {...props}>
        {children}
      </div>
    )
  };
}

export default Box
