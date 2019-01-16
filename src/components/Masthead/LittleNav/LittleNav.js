import classnames from 'classnames'
import React from 'react'
import SiteLinks from './SiteLinks'
import MainLinks from './MainLinks'
import { sparkComponentClassName, sparkObjectClassName } from '../../../util'

class LittleNav extends React.Component {
  static defaultProps = {
    siteLinks: [],
    links: []
  };

  get className() {
    const { className } = this.props
    return classnames(
      sparkComponentClassName('Masthead', 'little-nav'),
      sparkObjectClassName('Stack', 'item'),
      sparkObjectClassName('Stack', 'item', 'flex@xxs'),
      sparkObjectClassName('Stack'),
      sparkObjectClassName('Stack', null, 'misc-a'),
      sparkObjectClassName('Stack', null, 'split@xxs'),
      sparkObjectClassName('Stack', null, 'end-row'),
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
