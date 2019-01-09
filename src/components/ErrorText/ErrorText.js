import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import Icon from '../Icon'
import { sparkBaseClassName } from '../../util'

class ErrorText extends React.Component {
  static defaultProps = {
    children: null
  }

  static propTypes = {
    children: PropTypes.node
  }

  render = () => {
    const { children } = this.props

    return (
      <Fragment>
        <Icon name='exclamation-filled-circle' select />
        <div className={sparkBaseClassName('ErrorText')}>{children}</div>
      </Fragment>
    )
  }
}

export default ErrorText
