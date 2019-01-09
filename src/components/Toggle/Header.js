import classNames from 'classnames'
import React from 'react'

import { sparkBaseClassName } from '../../util'
import Icon from './../Icon'

class ToggleHeader extends React.Component {
  get className() {
    const {className} = this.props

    return classNames(
      sparkBaseClassName('TypeBodyThree'),
      sparkBaseClassName('Link'),
      sparkBaseClassName('Link', null, 'plain'),
      sparkBaseClassName('Link', null, 'standalone'),
      {[className]: className}
    )
  }

  render = () => {
    const {children, className, ...props} = this.props

    return (
      <a
        aria-expanded='false'
        className={this.className}
        data-sprk-toggle='trigger'
        href='#'
        {...props}
      >
        <Icon
          name='chevron-down'
          toggle='accordionIconUseElement'
        />
        {children}
      </a>
    )
  }
}

export default ToggleHeader
