import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  sparkComponentClassName,
  sparkObjectClassName
} from '../../util'

class Content extends React.Component {
  static defaultProps = {
    children: null
  }

  static propTypes = {
    children: PropTypes.node
  }

  get className() {
    const {className} = this.props

    return classnames(
      sparkComponentClassName('Card', 'content'),
      sparkObjectClassName('Stack'),
      sparkObjectClassName('Stack', 'item'),
      // TODO: Add size suffix
      {[className]: className}
    )
  }

  render = () => {
    const {children, className, ...props} = this.props

    return <div className={this.className} {...props}>{children}</div>
  }
}

export default Content
