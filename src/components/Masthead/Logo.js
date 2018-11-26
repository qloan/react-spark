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
    const {href} = this.props

    return (
      <div className={sparkComponentClassName('Masthead', 'logo')}>
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
