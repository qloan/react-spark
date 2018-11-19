// import { bindUIEvents } from '@sparkdesignsystem/spark-core/base/'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkClassName } from '../../util'

class Hamburger extends React.Component {
  static defaultProps = {

  };

  inputRef = React.createRef();

  static propTypes = {
    navTrigger: PropTypes.string.isRequired
  };

  componentDidMount = () => {
    // bindUIEvents(this.inputRef.current)
  };

  get className() {
    const baseClass = sparkClassName('component', 'Hamburger')
    return classNames(baseClass)
  }

  render = () => {
    const { navTrigger } = this.props

    return (
      <div className='sprk-c-Masthead__hamburger'>
        <button
          className={this.className}
          type='button'
          aria-expanded='false'
          data-sprk-mobile-nav-trigger={navTrigger}
        >
          <span className='sprk-u-ScreenReaderText'>Toggle Navigation</span>
          <svg
            className='sprk-c-Icon sprk-c-Icon--l sprk-c-Hamburger__icon'
            aria-hidden='true'
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
        </button>
      </div>
    )
  };
}

export default Hamburger
