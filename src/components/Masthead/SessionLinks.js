import classnames from 'classnames'
import React from 'react'
import Link from '../Link'

import { sparkClassName, sparkComponentClassName } from '../../util'

class SessionLinks extends React.Component {
  get className() {
    const {className} = this.props

    return classnames(
      sparkComponentClassName('Masthead', 'menu'),
      sparkClassName('object', 'Stack', 'item'),
      sparkClassName('object', 'Stack', 'item', 'center-column@xxs'),
      'sprk-u-Float--right',
      'session-link',
      {[className]: className}
    )
  }

  render = () => {
    const {className, links, ...props} = this.props

    return (
      <div className={this.className} {...props}>
        {links.map((link, i) => {
          const { href, variant, onClick, text } = link
          return (
            <Link
              id={`session-links-${i}`}
              key={`session-links-${i}`}
              href={href}
              variant={variant}
              onClick={onClick}
              className={linkClassName(text)} >
              {text}
            </Link>
          )
        })}
      </div>
    )
  }
}

function linkClassName(text) {
  return classnames(
    sparkComponentClassName('Link', null, 'plain'),
    text.includes('Out') ? sparkClassName('utility', 'Display', null, 'none') : null
  )
}

export default SessionLinks
