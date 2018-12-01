import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkObjectClassName, sparkComponentClassName } from '../../util'

class Spinner extends React.Component {
    static defaultProps = {
      type: 'circle',
      size: 'large',
      color: 'dark'
    }

    static propTypes = {
      type: PropTypes.string,
      size: PropTypes.string,
      color: PropTypes.string
    }

    get className() {
      const { type, size, color } = this.props

      const baseClass = sparkComponentClassName('Spinner')
      const objectClass = sparkObjectClassName('Stack', 'item')
      const spinnerTypeClass = sparkComponentClassName('Spinner', null, type)
      const spinnerSizeClass = sparkComponentClassName('Spinner', null, size)
      const spinnerColorClass = sparkComponentClassName('Spinner', null, color)

      return classNames(baseClass, objectClass, spinnerTypeClass, spinnerSizeClass, spinnerColorClass)
    }

    render = () => {
      return (
        <div className={this.className} />
      )
    }
}

export default Spinner
