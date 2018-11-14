import PropTypes from 'prop-types'
import React from 'react'

import { sparkBaseClassName } from '../../util'

class SelectionContainer extends React.Component {
  static defaultProps = {
    children: null
  }

  static propTypes = {
    children: PropTypes.node
  }

  render = () => {
    const { children } = this.props

    return (
      <fieldset className={sparkBaseClassName('SelectionContainer')}>
        {children}
      </fieldset>
    )
  }
}

export default SelectionContainer
