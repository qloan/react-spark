import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Body from './Body'
import Figure from './Figure'
import { sparkObjectClassName } from '../../util'

class Flag extends React.Component {
  static defaultProps = {
    children: null
  }

  static propTypes = {
    children: PropTypes.node
  }

  get className() {
    const {className} = this.props

    return classnames(
      sparkObjectClassName('Flag'),
      sparkObjectClassName('Flag', null, 'stacked'),
      {[className]: className}
    )
  }

  render = () => {
    const {children, className, ...props} = this.props

    return <div className={this.className} {...props}>{children}</div>
  }
}

Flag.Body = Body
Flag.Figure = Figure

export default Flag
