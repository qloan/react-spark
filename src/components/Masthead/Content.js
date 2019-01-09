import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import Stack from './../Stack/Stack'

import {
  sparkComponentClassName,
  sparkObjectClassName,
  sparkClassName
} from '../../util'

class Content extends React.Component {
  static defaultProps = {
    children: null
  };

  static propTypes = {
    children: PropTypes.node
  };

  get className() {
    const { className } = this.props
    return classnames(
      sparkComponentClassName('Masthead', 'content'),
      sparkObjectClassName('Stack'),
      sparkClassName('object', 'Stack', null, 'split@xxs'),
      { [className]: className }
    )
  }

  render = () => {
    const { children, className, ...props } = this.props

    return (
      <Stack.Item className={this.className} {...props}>
        {children}
      </Stack.Item>
    )
  };
}

export default Content
