import classNames from 'classnames'
import React from 'react'
import { sparkClassName } from '../../util'
import Icon from './../Icon'

class ToggleHeader extends React.Component {
  get className() {
    const baseClass = sparkClassName('base', 'TypeBodyThree')
    const baseLinkClass = sparkClassName('base', 'Link')
    const linkPlainClass = sparkClassName('base', 'Link', null, 'plain')
    const linkStandaloneClass = sparkClassName(
      'base',
      'Link',
      null,
      'standalone'
    )
    return classNames(baseClass, {
      [baseLinkClass]: true,
      [linkStandaloneClass]: true,
      [linkPlainClass]: true
    })
  }

  render = () => {
    const { children } = this.props
    return (
      <a
        className={this.className}
        data-sprk-toggle='trigger'
        href='#'
        aria-expanded='false'
      >
        <Icon
          name='chevron-down'
          toggle='accordionIconUseElement'
        />
        {children}
      </a>
    )
  };
}

export default ToggleHeader
