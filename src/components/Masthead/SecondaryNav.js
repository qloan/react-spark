import PropTypes from 'prop-types'
import React from 'react'

import Link from '../../components/Link'
import { sparkComponentClassName } from '../../util'

class SecondaryNav extends React.Component {
  static propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })).isRequired
  }

  get ulClassName() {
    return [
      sparkComponentClassName('SecondaryNavigation'),
      sparkComponentClassName('HorizontalList'),
      sparkComponentClassName('HorizontalList', null, 'spacing-medium')
    ].join(' ')
  }

  render = () => {
    const {links} = this.props

    return (
      <div
        className={sparkComponentClassName('Masthead', 'secondary-nav')}
      >
        <nav
          role='navigation'
        >
          <ul className={this.ulClassName}>
            {links.map((link, i) => (
              <li key={i}>
                <Link href={link.href} variant='standalone'>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  }
}

export default SecondaryNav
