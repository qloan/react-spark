import classnames from 'classnames'
import React from 'react'

import { sparkClassName, sparkComponentClassName } from '../../util'

class Hamburger extends React.Component {
  get bottomBunClassName() {
    return [
      sparkComponentClassName('Menu', 'line'),
      sparkComponentClassName('Menu', 'line', 'three')
    ].join(' ')
  }

  get className() {
    const {className} = this.props

    return classnames(
      sparkComponentClassName('Masthead', 'menu'),
      sparkClassName('object', 'Stack', 'item'),
      sparkClassName('object', 'Stack', 'item', 'center-column@xxs'),
      {[className]: className}
    )
  }

  get pattyClassName() {
    return [
      sparkComponentClassName('Menu', 'line'),
      sparkComponentClassName('Menu', 'line', 'two')
    ].join(' ')
  }

  get svgClassName() {
    return [
      sparkComponentClassName('Icon'),
      sparkComponentClassName('Icon', null, 'l'),
      sparkComponentClassName('Menu', 'icon')
    ].join(' ')
  }

  get topBunClassName() {
    return [
      sparkComponentClassName('Menu', 'line'),
      sparkComponentClassName('Menu', 'line', 'one')
    ].join(' ')
  }

  renderSvg = () => (
    <svg
      aria-hidden='true'
      className={this.svgClassName}
      viewBox='0 0 64 64'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g>
        <path className={this.topBunClassName} d='m8 18.68h48' />
        <path className={this.pattyClassName} d='m8 32h48' />
        <path className={this.bottomBunClassName} d='m8 45.32h48' />
      </g>
    </svg>
  )

  render = () => {
    const {className, ...props} = this.props

    return (
      <div className={this.className} {...props}>
        <button
          className={sparkComponentClassName('Menu')}
          type='button'
          aria-expanded='false'
          data-sprk-mobile-nav-trigger='mobileNav'
        >
          <span className={sparkClassName('utility', 'ScreenReaderText')}>
            Toggle Navigation
          </span>
          {this.renderSvg()}
        </button>
      </div>
    )
  }
}

export default Hamburger
