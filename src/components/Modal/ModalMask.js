import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { sparkComponentClassName } from '../../util'

class ModalMask extends React.Component {
    static defaultProps = {};

    static propTypes = {
      maskRef: PropTypes.object.isRequired
    };

    get className() {
      const { className } = this.props
      const baseClass = sparkComponentClassName('ModalMask')
      return classNames(baseClass, {[className]: className})
    }

    render = () => {
      const { maskRef, ...props } = this.props
      return (

        <div
          {...props}
          data-sprk-modal-mask='true'
          className={this.className}
          tabIndex='-1'
          ref={maskRef}
        />
      )
    };
}

export default ModalMask
