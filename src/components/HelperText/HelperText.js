import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { sparkBaseClassName } from '../../util'

class HelperText extends React.Component {
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
        <div className={sparkBaseClassName('HelperText')}>{children}</div>
      </Fragment>
    )
  }
}

export default HelperText
