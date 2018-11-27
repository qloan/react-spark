import PropTypes from 'prop-types'
import React from 'react'

import Block from './Block'

class BodyOne extends React.Component {
  static defaultProps = {
    children: null,
    element: 'p'
  }

  static propTypes = {
    children: PropTypes.node,
    element: PropTypes.string
  }

  render = () => {
    const {
      children,
      element,
      ...props
    } = this.props

    return (
      <Block
        element={element}
        level={1}
        type='Body'
        {...props}
      >
        {children}
      </Block>
    )
  }
}

export default BodyOne
