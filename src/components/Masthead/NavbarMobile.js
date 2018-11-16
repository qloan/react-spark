import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkClassName } from '../../util'

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
    const base =
      'sprk-c-Accordion sprk-c-Accordion--navigation sprk-b-List sprk-b-List--bare'
    return classNames(base)
  }

  get liClassName() {
    const base = 'sprk-c-Accordion__item'
    return classNames(base)
  }

  render = () => {
    const { id, links } = this.props
    return (
      <nav role='navigation' data-id={id}>
        <ul className={this.ulClassName}>
          {links.map(({ title, href }, index) => (
            <li
              className={this.liClassName}
              key={index}
            >
              <a
                aria-controls='details1'
                className='sprk-c-Accordion__summary'
                href={href}
              >
                <span className='sprk-b-TypeBodyTwo sprk-c-Accordion__heading '>
                  {title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  };
}

export default Navbar
