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

  render = () => {
    const {children} = this.props

    return (
      <div className={sparkObjectClassName('Flag', 'body')}>{children}</div>
    )
  }
}

export default Body
