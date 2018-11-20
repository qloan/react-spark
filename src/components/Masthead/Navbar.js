import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { sparkComponentClassName } from '../../util';

class Navbar extends React.Component {
  static defaultProps = {
    links: []
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    links: PropTypes.array
  };

  get ulClassName() {
    // todo: use sparkComponentClassName

    const base = 'sprk-o-HorizontalList sprk-o-HorizontalList--spacing-large';
    return classNames(base)
  }

  get linkClassName() {
    // todo: use sparkComponentClassName

    const base = 'sprk-b-Link sprk-b-Link--standalone';
    return classNames(base)
  }

  get buttonClassName() {
    // todo: use sparkComponentClassName
    const base = 'sprk-c-Button sprk-c-Button--secondary';
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
                    : this.linkClassName
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
