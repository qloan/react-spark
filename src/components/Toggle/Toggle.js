import PropTypes from 'prop-types'
import React from 'react'
import { toggle } from '@sparkdesignsystem/spark-core/components/toggle'
import Header from './Header'
import Content from './Content'

class Toggle extends React.Component {
  static defaultProps = {};
  static propTypes = {
    id: PropTypes.string.isRequired
  };

  componentDidMount() {
    toggle()
  }

  render = () => {
    const { id, children } = this.props
    return (
      <div data-id={id} data-sprk-toggle='container'>
        {children}
      </div>
    )
  };
}
Toggle.Header = Header
Toggle.Content = Content
export default Toggle
