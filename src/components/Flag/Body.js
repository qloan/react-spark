import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkObjectClassName } from '../../util'

class Body extends React.Component {
  static defaultProps = {
    children: null
  }

  static propTypes = {
    children: PropTypes.node
  }

  get className() {
    const {className} = this.props

    return classnames(
      sparkObjectClassName('Flag', 'body'),
      {[className]: className}
    )
  }

  render = () => {
    const {children, className, ...props} = this.props

    return <div className={this.className} {...props}>{children}</div>
  }
}

export default Body
