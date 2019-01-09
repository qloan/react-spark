import PropTypes from 'prop-types'
import React from 'react'

import Block from './Block'

class DisplayTwo extends React.Component {
  static defaultProps = {
    children: null,
    element: 'h1'
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
        level={2}
        type='Display'
        {...props}
      >
        {children}
      </Block>
    )
  }
}

export default DisplayTwo
