import PropTypes from 'prop-types'
import React from 'react'

import { sparkClassName, sparkComponentClassName } from '../../util'

class Hamburger extends React.Component {
  static defaultProps = {
    navTrigger: 'mobileNav'
  }

  static propTypes = {
    navTrigger: PropTypes.string
  }

  get hamburgerClassName() {
    return [
      sparkComponentClassName('Icon'),
      sparkComponentClassName('Icon', null, 'l'),
      sparkComponentClassName('Hamburger', 'icon')
    ].join(' ')
  }

  renderSvg = () => (
    <svg
      aria-hidden='true'
      className={this.hamburgerClassName}
      viewBox='0 0 64 64'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g>
        <path
          className='sprk-c-Hamburger__line sprk-c-Hamburger__line--two'
          d='m8 32h48'
        />
        <path
          className='sprk-c-Hamburger__line sprk-c-Hamburger__line--one'
          d='m8 18.68h48'
        />
        <path
          className='sprk-c-Hamburger__line sprk-c-Hamburger__line--three'
          d='m8 45.32h48'
        />
      </g>
    </svg>
  )

  render = () => {
    const {navTrigger} = this.props

    return (
      <div className={sparkComponentClassName('Masthead', 'hamburger')}>
        <button
          className={sparkComponentClassName('Hamburger')}
          type='button'
          aria-expanded='false'
          data-sprk-mobile-nav-trigger={navTrigger}
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
