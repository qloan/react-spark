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

  render = () => {
    const {children} = this.props

    return (
      <div className={sparkObjectClassName('CenteredColumn')}>
        {children}
      </div>
    )
  }
}

export default CenteredColumn
