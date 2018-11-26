import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { sparkClassName } from '../../util'

class Divider extends React.Component {
  static defaultProps = {
    id: 'divider'
  };
  static propTypes = {
    id: PropTypes.string
  };

  get calssName() {
    const baseClass = sparkClassName('component', 'Divider')
    return classNames(baseClass)
  }

  render = () => {
    const { id } = this.props
    return <span className={this.calssName} data-id={id} />
  };
}

export default Divider
