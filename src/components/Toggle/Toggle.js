import { toggle } from '@sparkdesignsystem/spark-core/components/toggle'
import PropTypes from 'prop-types'
import React from 'react'

import Header from './Header'
import Content from './Content'

class Toggle extends React.Component {
  static defaultProps = {}

  static propTypes = {
    id: PropTypes.string.isRequired
  }

  componentDidMount() {
    toggle()
  }

  render = () => {
    const {children, id, ...props} = this.props

    return (
      <div data-id={id} data-sprk-toggle='container' {...props}>
        {children}
      </div>
    )
  }
}

Toggle.Header = Header
Toggle.Content = Content

export default Toggle
