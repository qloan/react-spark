import PropTypes from 'prop-types'
import React from 'react'

import { sparkComponentClassName } from '../../util'

class TopRow extends React.Component {
  static defaultProps = {
    children: null
  }

  static propTypes = {
    children: PropTypes.node
  }

  render = () => {
    const {children} = this.props

    return (
      <div className={sparkComponentClassName('Masthead', 'top-row')}>
        {children}
      </div>
    )
  }
}

export default TopRow
