import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkObjectClassName } from '../../util'

class CenteredColumn extends React.Component {
  static defaultProps = {
    children: null
  }

  static propTypes = {
    children: PropTypes.node
  }

  get className() {
    const {className} = this.props

    return classnames(
      sparkObjectClassName('CenteredColumn'),
      {[className]: className}
    )
  }

  render = () => {
    const {children, className, ...props} = this.props

    return (
      <div className={this.className} {...props}>
        {children}
      </div>
    )
  }
}

export default CenteredColumn
