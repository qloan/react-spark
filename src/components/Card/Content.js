import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkComponentClassName } from '../../util'

class Content extends React.Component {
  static defaultProps = {
    children: null,
    className: null
  }

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  }

  get className () {
    const { className } = this.props

    return classnames(
      sparkComponentClassName('Card', 'content'),
      { [className]: className }
    )
  }

  render = () => {
    const { children, className, ...props } = this.props

    return <div className={this.className} {...props}>{children}</div>
  }
}

export default Content
