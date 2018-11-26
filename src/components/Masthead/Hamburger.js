import React from 'react'

import { sparkClassName, sparkComponentClassName } from '../../util'

class Hamburger extends React.Component {
  get bottomBunClassName() {
    return [
      sparkComponentClassName('Hamburger', 'line'),
      sparkComponentClassName('Hamburger', 'line', 'three')
    ].join(' ')
  }

  get pattyClassName() {
    return [
      sparkComponentClassName('Hamburger', 'line'),
      sparkComponentClassName('Hamburger', 'line', 'two')
    ].join(' ')
  }

  get svgClassName() {
    return [
      sparkComponentClassName('Icon'),
      sparkComponentClassName('Icon', null, 'l'),
      sparkComponentClassName('Hamburger', 'icon')
    ].join(' ')
  }

  get topBunClassName() {
    return [
      sparkComponentClassName('Hamburger', 'line'),
      sparkComponentClassName('Hamburger', 'line', 'one')
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

  render = () => (
    <div className={sparkComponentClassName('Masthead', 'hamburger')}>
      <button
        className={sparkComponentClassName('Hamburger')}
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

export default Hamburger
