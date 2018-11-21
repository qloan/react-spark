import PropTypes from 'prop-types'
import React from 'react'

import { sparkComponentClassName } from '../../util'

class Navigation extends React.Component {
  static defaultProps = {
    children: null
  }

  static propTypes = {
    children: PropTypes.node
  }

  render = () => {
    const {children} = this.props

    return (
      <div className={sparkComponentClassName('Masthead', 'navigation')}>
        {children}
      </div>
    )
  }
}

export default Navigation
