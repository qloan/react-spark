import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Item from './Item'

import { sparkClassName } from '../../util'
import DICTIONARY_VARIANTS from './variants'

class Dictionary extends React.Component {
  static defaultProps = {
    children: null,
    variant: DICTIONARY_VARIANTS.BASIC
  }

  static propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf(Object.values(DICTIONARY_VARIANTS))
  }

  get dictionaryClassName() {
    const {variant} = this.props

    const baseClass = sparkClassName('component', 'Dictionary')
    const variantClass = sparkClassName('component', 'Dictionary', null, 'striped')

    return classNames(
      baseClass,
      {[variantClass]: variant !== DICTIONARY_VARIANTS.BASIC}
    )
  }

  get keyValuePairsClassName() {
    return sparkClassName('component', 'Dictionary', 'keyvaluepairs')
  }

  render = () => {
    const {children} = this.props

    return (
      <div className={this.dictionaryClassName}>
        <dl className={this.keyValuePairsClassName}>
          {children}
        </dl>
      </div>
    )
  }
}

Dictionary.Item = Item

export default Dictionary
