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
    return [
      sparkComponentClassName('Card', 'content'),
      sparkObjectClassName('Stack'),
      sparkObjectClassName('Stack', 'item')
      // TODO: Add size suffix
    ].join(' ')
  }

  render = () => {
    const {children} = this.props

    return <div className={this.className}>{children}</div>
  }
}

export default Content
