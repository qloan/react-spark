import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { breakpointWordToLetter, sparkObjectClassName } from '../../util';
import BREAKPOINTS from './breakpoints';
import WIDTHS from './widths';

class Item extends React.Component {
  static defaultProps = {
    breakpoint: null,
    children: null,
    width: null
  };

  static propTypes = {
    // TODO: Require breakpoint if width is specified
    breakpoint: PropTypes.oneOf(
      Object.keys(BREAKPOINTS).map(itm => BREAKPOINTS[itm])
    ),
    children: PropTypes.node,
    // TODO: Require width if breakpoint is specified
    width: PropTypes.oneOf(Object.keys(WIDTHS).map(itm => WIDTHS[itm]))
  };

  get className() {
    const { breakpoint, className, width } = this.props
    const block = 'Stack';

    const widthClassName = width
      ? sparkObjectClassName(
        block,
        'item',
        width,
        breakpointWordToLetter(breakpoint)
      )
      : null

    return classNames(sparkObjectClassName(block, 'item'), {
      [widthClassName]: width,
      [className]: className
    })
  }

  render = () => {
    const { breakpoint, children, className, width, ...props } = this.props

    return (
      <div className={this.className} {...props}>
        {children}
      </div>
    )
  };
}

export default Item
