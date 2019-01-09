import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkComponentClassName } from '../../util'

class Divider extends React.Component {
  static defaultProps = {
    dataId: null
  }

  static propTypes = {
    dataId: PropTypes.string
  }

  get className() {
    const {className} = this.props

    return classnames(
      sparkComponentClassName('Divider'),
      {[className]: className}
    )
  }

  render = () => {
    const {className, dataId, ...props} = this.props

    return <span className={this.className} data-id={dataId}{...props} />
  }
}

export default Divider
