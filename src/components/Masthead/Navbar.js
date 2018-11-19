import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkClassName, sparkComponentClassName } from '../../util'

class Navbar extends React.Component {
  static defaultProps = {
    links: []
  };

  inputRef = React.createRef();

  static propTypes = {
    id: PropTypes.string.isRequired,
    links: PropTypes.array
  };

  get ulClassName() {
    // todo: use sparkComponentClassName

    const base = 'sprk-o-HorizontalList sprk-o-HorizontalList--spacing-large'
    return classNames(base)
  }

  get liClassName() {
    // todo: use sparkComponentClassName

    const base = 'sprk-b-Link sprk-b-Link--standalone'
    return classNames(base)
  }

  get buttonClassName() {
    // todo: use sparkComponentClassName
    const base = 'sprk-c-Button sprk-c-Button--secondary'
    return classNames(base)
  }

  get ctaClassName() {
    const base = sparkComponentClassName('Button')
    return classNames(base)
  }

  render = () => {
    const { id, links } = this.props
    return (
      <nav role='navigation' data-id={id}>
        <ul className={this.ulClassName}>
          {links.map(({ title, href, button, callToAction }, index) => (
            <li key={index}>
              <a
                className={
                  button
                    ? callToAction
                      ? this.ctaClassName
                      : this.buttonClassName
                    : this.liClassName
                }
                href={href}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  };
}

export default Navbar
