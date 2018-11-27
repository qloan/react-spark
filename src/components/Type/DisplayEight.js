import PropTypes from 'prop-types'
import React from 'react'

import Block from './Block'

class DisplayEight extends React.Component {
  static defaultProps = {
    children: null,
    element: 'h5'
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
        level={8}
        type='Display'
        {...props}
      >
        {children}
      </Block>
    )
  }
}

export default DisplayEight
