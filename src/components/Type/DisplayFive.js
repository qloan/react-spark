import PropTypes from 'prop-types'
import React from 'react'

import Block from './Block'

class DisplayFive extends React.Component {
  static defaultProps = {
    children: null,
    element: 'h4'
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
        level={5}
        type='Display'
        {...props}
      >
        {children}
      </Block>
    )
  }
}

export default DisplayFive
