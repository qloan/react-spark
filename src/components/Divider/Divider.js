import PropTypes from 'prop-types'
import React from 'react'
import { sparkComponentClassName } from '../../util'

class Divider extends React.Component {
  static defaultProps = {
    dataId: null
  }

  static propTypes = {
    dataId: PropTypes.string
  }

  render = () => {
    const {dataId, ...props} = this.props

    return (
      <span
        className={sparkComponentClassName('Divider')}
        data-id={dataId}
        {...props}
      />
    )
  }
}

export default Divider
