import classnames from 'classnames'
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
    const {className} = this.props

    return classnames(
      sparkComponentClassName('Card'),
      sparkObjectClassName('Stack'),
      {[className]: className}
    )
  }

  render = () => {
    const {children, className, ...props} = this.props

    return <div className={this.className} {...props}>{children}</div>
  }
}

Card.Content = Content

export default Card
