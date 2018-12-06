import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkClassName, sparkComponentClassName } from '../../util'

class Logo extends React.Component {
  static defaultProps = {
    href: null,
    screenReaderText: null,
    imgAlt: null,
    imgSrc: null,
    imgWidth: '262'
  }

  static propTypes = {
    href: PropTypes.string,
    screenReaderText: PropTypes.string,
    imgAlt: PropTypes.string,
    imgSrc: PropTypes.string,
    imgWidth: PropTypes.string
  }

  get className() {
    const {className} = this.props

    return classnames(
      sparkComponentClassName('Masthead', 'branding'),
      sparkClassName('object', 'Stack', 'item'),
      sparkClassName('object', 'Stack', 'item', 'center-column@xxs'),
      {[className]: className}
    )
  }

  renderInner = () => {
    const {screenReaderText, imgAlt, imgSrc, imgWidth} = this.props

    return (<React.Fragment>
      {imgSrc && (
        <img alt={imgAlt || ''} src={imgSrc} width={imgWidth} />
      )}
      {screenReaderText && (
        <span className={sparkClassName('utility', 'ScreenReaderText')}>
          Go to the home page
        </span>
      )}
    </React.Fragment>)
  }

  render = () => {
    const {
      className,
      href,
      imgAlt,
      imgSrc,
      imgWidth,
      screenReaderText,
      ...props
    } = this.props

    return (
      <div className={this.className} {...props}>
        {href ? (
          <a href={href}>{this.renderInner()}</a>
        ) : (
          this.renderInner()
        )}
      </div>
    )
  }
}

export default Logo
