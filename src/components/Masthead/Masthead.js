// import { bindUIEvents } from '@sparkdesignsystem/spark-core/base/'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { sparkClassName, sparkWidthClassName } from '../../util'
import Hamburger from './Hamburger'
import Navbar from './Navbar'
import NavbarMobile from './NavbarMobile'

class Masthead extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMobileNav: false
    }
    window.onresize = () => {
      this.setState({
        showMobileNav: false
      })
    }
  }
  static defaultProps = {
    links: []
  };
  static navTrigger = 'mobileNav';
  inputRef = React.createRef();

  static propTypes = {
    logo: PropTypes.object.isRequired,
    links: PropTypes.array
  };

  componentDidMount = () => {
    // bindUIEvents(this.inputRef.current)
  };

  get className() {
    const baseClass = sparkClassName('base', 'WideNavigation')

    return classNames(baseClass)
  }

  get mobileClassName() {
    const hide = this.state.showMobileNav ? '' : ' sprk-u-Display--none'
    const baseClass = `sprk-c-Masthead__narrow-navigation-container ${hide}`

    return classNames(baseClass)
  }

  toggleMobile() {
    this.setState({
      showMobileNav: !this.state.showMobileNav
    })
    console.log(this.state.showMobileNav)
  }

  render = () => {
    const { logo, links } = this.props

    return (
      <header className='sprk-c-Masthead' role='banner' idstring='masthead-1'>
        <div className='sprk-c-Masthead__content'>
          <div className='sprk-c-Masthead__top-row'>
            <Hamburger
              navTrigger={Masthead.navTrigger}
              onClick={() => {
                this.toggleMobile()
              }}
            />
            <div className='sprk-c-Masthead__logo'>
              <a href='#nogo'>
                <div>{logo}</div>
                <span className='sprk-u-ScreenReaderText'>
                  Go to the home page
                </span>
              </a>
            </div>
            <div className='sprk-c-Masthead__secondary-nav'>
              <Navbar links={links} id='navigation-secondary-desktop' />
            </div>
          </div>
        </div>
        <div className='sprk-c-Masthead__navigation'>
          <div
            className={this.mobileClassName}
            data-sprk-mobile-nav={Masthead.navTrigger}
          >
            <NavbarMobile links={links} id='navigation-secondary-mobile' />
          </div>
        </div>
      </header>
    )
  };
}

export default Masthead
