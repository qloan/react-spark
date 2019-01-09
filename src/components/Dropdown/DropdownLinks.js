import PropTypes from 'prop-types'
import React from 'react'
import { sparkComponentClassName } from '../../util'

class DropdownLinks extends React.Component {
  static defaultProps = {};

  static propTypes = {
    links: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func
      })
    )
  };

  render = () => {
    const { links } = this.props

    return (
      <ul className={sparkComponentClassName('Dropdown', 'links')}>
        {links.map((sublink, i) => (
          <li
            className={sparkComponentClassName('Dropdown', 'item')}
            role='option'
            key={i}
          >
            <a
              className={sparkComponentClassName('Dropdown', 'link')}
              href={sublink.href}
              onClick={sublink.onClick}
            >
              {sublink.text}
            </a>
          </li>
        ))}
      </ul>
    )
  };
}

export default DropdownLinks
