import PropTypes from 'prop-types'
import React from 'react'

import {
  sparkComponentClassName,
  sparkObjectClassName
} from '../../util'
import Content from './Content'

class Card extends React.Component {
  static defaultProps = {
    children: null
  }

  static propTypes = {
    children: PropTypes.node
  }

  get className() {
    return [
      sparkComponentClassName('Card'),
      sparkObjectClassName('Stack')
    ].join(' ')
  }

  render = () => {
    const {children} = this.props

    return <div className={this.className}>{children}</div>
  }
}

Card.Content = Content

export default Card
