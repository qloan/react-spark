import PropTypes from 'prop-types'
import React from 'react'

import { sparkBaseClassName } from '../../util'

class Label extends React.Component {
  static defaultProps = {
    children: null
  }

  static propTypes = {
    children: PropTypes.node
  }

  render = () => {
    const {children} = this.props

    return <legend className={sparkBaseClassName('Label')}>{children}</legend>
  }
}

export default Label
