import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import SiteLinks from './SiteLinks';
import MainLinks from './MainLinks';
import BUTTON_VARIANTS from '../../Button/variants';
import { sparkComponentClassName, sparkObjectClassName } from '../../../util';

class LittleNav extends React.Component {
  static defaultProps = {
    siteLinks: [],
    links: []
  };
  static propTypes = {
    siteLinks: PropTypes.arrayOf(
      PropTypes.shape({
        buttonVariant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
        href: PropTypes.string,
        text: PropTypes.string,
        icon: PropTypes.string
      })
    ),
    links: PropTypes.arrayOf(
      PropTypes.shape({
        buttonVariant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
        href: PropTypes.string,
        text: PropTypes.string,
        icon: PropTypes.string
      })
    )
  };

  get className() {
    const { className } = this.props
    return classnames(
      sparkComponentClassName('Masthead', 'little-nav'),
      sparkObjectClassName('Stack'),
      sparkObjectClassName('Stack', 'item'),
      sparkObjectClassName('Stack', null, 'large'),
      sparkObjectClassName('Stack', null, 'split@s'),
      sparkObjectClassName('Stack', null, 'end-row'),
      sparkObjectClassName('Box'),
      sparkObjectClassName('Stack', 'item', 'flex@xxs'),
      {
        [className]: className
      }
    )
  }

  render = () => {
    const { children, className, links, siteLinks, ...props } = this.props

    return (
      <nav role='navigation' className={this.className} {...props}>
        {siteLinks && <SiteLinks links={siteLinks} />}
        {links && <MainLinks links={links} />}
      </nav>
    )
  };
}

export default LittleNav
