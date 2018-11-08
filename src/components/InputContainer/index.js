import PropTypes from 'prop-types'
import React from 'react'

import { sparkClassName } from '../../util'

class InputContainer extends React.Component {
  static defaultProps = {
    children: null
  }

  static propTypes = {
    children: PropTypes.node
  }

  render = () => {
    const {children} = this.props
    const className = sparkClassName('base', 'InputContainer')

    return <div className={className}>{children}</div>
  }
}

export default InputContainer
