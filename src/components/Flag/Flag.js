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
    return [
      sparkObjectClassName('Flag'),
      sparkObjectClassName('Flag', null, 'stacked')
    ].join(' ')
  }

  render = () => {
    const {children} = this.props

    return <div className={this.className}>{children}</div>
  }
}

Flag.Body = Body
Flag.Figure = Figure

export default Flag
