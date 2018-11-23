import PropTypes from 'prop-types'
import React from 'react'

import { sparkComponentClassName } from '../../util'

class Content extends React.Component {
  static defaultProps = {
    children: null
  }

  static propTypes = {
    children: PropTypes.node
  }

  render = () => {
    const {children} = this.props

    return (
      <div className={sparkComponentClassName('Masthead', 'content')}>
        {children}
      </div>
    )
  }
}

export default Content
