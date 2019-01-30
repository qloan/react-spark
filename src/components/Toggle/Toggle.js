import { bindToggleUIEvents } from '@sparkdesignsystem/spark-core'
import PropTypes from 'prop-types'
import React from 'react'

import Header from './Header'
import Content from './Content'

class Toggle extends React.Component {
  static defaultProps = {};

  static propTypes = {
    id: PropTypes.string.isRequired
  };

  containerRef = React.createRef();

  componentDidMount() {
    bindToggleUIEvents(this.containerRef.current)
  }

  render = () => {
    const { children, id, ...props } = this.props

    return (
      <div
        ref={this.containerRef}
        data-id={id}
        data-sprk-toggle='container'
        {...props}
      >
        {children}
      </div>
    )
  };
}

Toggle.Header = Header
Toggle.Content = Content

export default Toggle
