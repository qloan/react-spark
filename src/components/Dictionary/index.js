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

    const classes = [sparkClassName('component', 'Dictionary')]

    if (variant !== DICTIONARY_VARIANTS.BASIC) {
      classes.push(sparkClassName('component', 'Dictionary', null, 'striped'))
    }

    const className = classes.join(' ')

    return className
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
