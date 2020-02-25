import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  sparkBaseClassName,
  sparkComponentClassName
} from '../../util'

class Item extends React.Component {
  static propTypes = {
    itemKey: PropTypes.node.isRequired,
    itemValue: PropTypes.node.isRequired
  }

  get className() {
    const {className} = this.props

    return classnames(
      sparkComponentClassName('Dictionary', 'keyvaluepair'),
      {[className]: className}
    )
  }

  get keyClassName() {
    return [
      sparkComponentClassName('Dictionary', 'key'),
      sparkBaseClassName('Label'),
      sparkBaseClassName('Label', null, 'no-input')
    ].join(' ')
  }

  get valueClassName() {
    return sparkComponentClassName('Dictionary', 'value')
  }

  render = () => {
    const {className, itemKey, itemValue,bold, ...props} = this.props

    return (
      <div className={this.className} {...props}>
        <dt className={this.keyClassName}><b>{itemKey}</b></dt>
        <dd className={this.valueClassName}>{itemValue}</dd>
      </div>
    )
  }
}

export default Item
