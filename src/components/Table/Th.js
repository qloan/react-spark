import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { sparkBaseClassName } from '../../util';

class Th extends React.Component {
  static defaultProps = {
    children: null,
    empty: false
  };

  static propTypes = {
    children: PropTypes.node,
    empty: PropTypes.bool
  };

  get className() {
    const { className, empty } = this.props

    const emptyHeadingClass = sparkBaseClassName('Table', 'empty-heading')

    return classnames({
      [emptyHeadingClass]: empty,
      [className]: className
    })
  }

  render = () => {
    const { children, className, empty, ...props } = this.props

    return (
      <th className={this.className} {...props}>
        {children}
      </th>
    )
  };
}

export default Th
