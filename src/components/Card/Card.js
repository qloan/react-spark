import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkComponentClassName } from '../../util'
import Content from './Content'
import Header from './Header'

class Card extends React.Component {
  static defaultProps = {
    children: null,
    className: null,
    imgAlt: null,
    imgSrc: null,
    standout: false
  }

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    imgAlt: PropTypes.string,
    imgSrc: PropTypes.string,
    standout: PropTypes.bool
  }

  get className () {
    const { className, standout } = this.props

    const standoutClass = sparkComponentClassName(
      'Card', null, 'standout'
    )

    return classnames(
      sparkComponentClassName('Card'),
      {
        [className]: className,
        [standoutClass]: standout
      }
    )
  }

  render = () => {
    const { children, className, imgAlt, imgSrc, standout, ...props } = this.props

    return (
      <div className={this.className} {...props}>
        {imgSrc && (
          <img
            alt={imgAlt}
            className={sparkComponentClassName('Card', 'media')}
            src={imgSrc}
          />
        )}
        {children}
      </div>
    )
  }
}

Card.Content = Content
Card.Header = Header

export default Card
