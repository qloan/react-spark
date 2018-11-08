import PropTypes from 'prop-types'
import React from 'react'

import { sparkClassName } from '../../util'

class Item extends React.Component {
  static propTypes = {
    itemKey: PropTypes.node.isRequired,
    itemValue: PropTypes.node.isRequired
  }

  get className() {
    return sparkClassName('component', 'Dictionary', 'keyvaluepair')
  }

  get keyClassName() {
    return [
      sparkClassName('component', 'Dictionary', 'key'),
      sparkClassName('base', 'Label'),
      sparkClassName('base', 'Label', null, 'no-input')
    ].join(' ')
  }

  get valueClassName() {
    return sparkClassName('component', 'Dictionary', 'value')
  }

  render = () => {
    const {itemKey, itemValue} = this.props

    return (
      <div className={this.className}>
        <dt className={this.keyClassName}>{itemKey}</dt>
        <dd className={this.valueClassName}>{itemValue}</dd>
      </div>
    )
  }
}

export default Item
