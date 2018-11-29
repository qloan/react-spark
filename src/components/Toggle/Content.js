import React from 'react'
import classNames from 'classnames'
import { sparkBaseClassName, sparkClassName } from '../../util'

class ToggleContent extends React.Component {
  get className() {
    const {className} = this.props

    return classNames(
      sparkBaseClassName('TypeBodyFour'),
      sparkClassName('utility', 'pts'),
      sparkClassName('utility', 'pbs'),
      {[className]: className}
    )
  }

  render = () => {
    const {children, className, ...props} = this.props

    return (
      <div data-sprk-toggle='content'>
        <div className={this.className} {...props}>{children}</div>
      </div>
    )
  }
}

export default ToggleContent
