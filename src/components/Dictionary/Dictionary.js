import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Item from './Item'

import { sparkComponentClassName } from '../../util'
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
    const {className, variant} = this.props

    const baseClass = sparkComponentClassName('Dictionary')
    const variantClass = sparkComponentClassName('Dictionary', null, 'striped')

    return classNames(
      baseClass,
      {[variantClass]: variant !== DICTIONARY_VARIANTS.BASIC},
      {[className]: className}
    )
  }

  render = () => {
    const {children, className, ...props} = this.props

    return (
      <div className={this.dictionaryClassName} {...props}>
        <dl className={sparkComponentClassName('Dictionary', 'keyvaluepairs')}>
          {children}
        </dl>
      </div>
    )
  }
}

Dictionary.Item = Item

export default Dictionary
