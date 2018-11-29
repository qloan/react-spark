import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkComponentClassName } from '../../util'

class TopRow extends React.Component {
  static defaultProps = {
    children: null
  }

  static propTypes = {
    children: PropTypes.node
  }

  get className() {
    const {className} = this.props

    return classnames(
      sparkComponentClassName('Masthead', 'top-row'),
      {[className]: className}
    )
  }

  render = () => {
    const {children, className, ...props} = this.props

    return <div className={this.className} {...props}>{children}</div>
  }
}

export default TopRow
