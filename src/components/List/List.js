import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import LIST_VARIANTS from './variants'
import { sparkBaseClassName, sparkClassName } from '../../util'

class List extends React.Component {
  static defaultProps = {
    variant: null,
    element: 'ul',
    size: ''
  };

  static propTypes = {
    children: PropTypes.node,
    element: PropTypes.oneOf(['ol', 'ul']).isRequired,
    variant: PropTypes.oneOf(Object.values(LIST_VARIANTS))
  };

  get className() {
    const { className, variant, size } = this.props
    const variantClass = sparkBaseClassName('List', null, variant)
    const sizeClass = sparkClassName('object', 'Stack', null, size)

    return classnames(
      sparkBaseClassName('List'),
      { [variantClass]: variantClass },
      { [className]: className },
      { [sizeClass]: Boolean(size) }
    )
  }

  render = () => {
    const {
      children,
      className,
      element: Element,
      variant,
      ...props
    } = this.props

    return (
      <Element className={this.className} {...props}>
        {children}
      </Element>
    )
  };
}

export default List
