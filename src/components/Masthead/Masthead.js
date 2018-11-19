import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { sparkClassName } from '../../util';
import { masthead } from '@sparkdesignsystem/spark-core/components/masthead';
import Hamburger from './Hamburger';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';

class Masthead extends React.Component {
  static defaultProps = {
    links: []
  };
  static navTrigger = 'mobileNav';
  inputRef = React.createRef();

  static propTypes = {
    logoPath: PropTypes.object.isRequired,
    links: PropTypes.array
  };

  componentDidMount = () => {
    masthead()
  };

  get className() {
    const baseClass = sparkClassName('base', 'WideNavigation')
    return classNames(baseClass)
  }

  get mobileClassName() {
    const baseClass = `sprk-c-Masthead__narrow-navigation-container sprk-u-Display--none`
    return classNames(baseClass)
  }

  render = () => {
    const { logoPath, links, logoHref } = this.props

    return (
      <header
        className='sprk-c-Masthead'
        role='banner'
        idstring='masthead-1'
        data-sprk-main
      >
        <div className='sprk-c-Masthead__content'>
          <div className='sprk-c-Masthead__top-row'>
            <div className='sprk-c-Masthead__logo'>
              <a href={logoHref}>
                <div>
                  <img src={logoPath} alt='Logo' height='60' width='262' />
                </div>
                <span className='sprk-u-ScreenReaderText'>
                  Go to the home page
                </span>
              </a>
            </div>
            <Hamburger navTrigger={Masthead.navTrigger} />
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
