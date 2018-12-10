import PropTypes from 'prop-types'
import React from 'react'
import { sparkComponentClassName, sparkClassName } from '../../util'

class DropdownLinksContainer extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  };

  get className() {
    return [
      sparkComponentClassName('Dropdown'),
      sparkClassName('utility', 'Width', null, '100'),
      sparkClassName('utility', 'TextAlign', null, 'left'),
      sparkClassName('utility', 'Display', null, 'none')
    ].join(' ')
  }

  render = () => {
    const { id, children } = this.props

    return (
      <div className={this.className} data-sprk-dropdown={id}>
        {children}
      </div>
    )
  };
}

export default DropdownLinksContainer
