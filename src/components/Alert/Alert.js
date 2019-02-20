import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import ALERT_VARIANTS from './variants'
import { sparkComponentClassName } from '../../util'
import Icon from '../Icon/index'
import _ from 'lodash';

class Alert extends React.Component {
  static defaultProps = {
    type: ALERT_VARIANTS.INFORMATION,
    dismissible: false
  };

  static propTypes = {
    type: PropTypes.oneOf(
      Object.keys(ALERT_VARIANTS).map(itm => ALERT_VARIANTS[itm])
    ),
    dismissible: PropTypes.bool.isRequired,
    idString: PropTypes.string,
    analyticsString: PropTypes.string,
    children: PropTypes.node.isRequired,
    handleAlertDismissed: PropTypes.func
  };

  ref = React.createRef();

  get className() {
    const { type, className } = this.props;
    const baseClass = sparkComponentClassName('Alert');
    const variantClass = sparkComponentClassName('Alert', null, type);

    return classnames(baseClass, variantClass, { [className]: className })
  }

  dismissAlert = () => {
    let alert = this.ref.current;
    alert.classList.add('sprk-u-Display--none');
    // Notify parent component that alert was dismissed
    this.props.handleAlertDismissed && this.props.handleAlertDismissed(_.includes(alert.classList, 'sprk-u-Display--none'));
  };

  render = () => {
    const {
      type,
      analyticsString,
      children,
      className,
      dismissible,
      idString,
      variant,
      handleAlertDismissed,
      ...rest
    } = this.props;

    return (
      <div className={this.className} {...rest} ref={this.ref}>
        <div className={sparkComponentClassName('Alert', 'content')}>
          {type === ALERT_VARIANTS.INFORMATION && (
            <Icon name='bell' size={Icon.size.L} />
          )}
          {type === ALERT_VARIANTS.SUCCESS && (
            <Icon name='check-mark' size={Icon.size.L} />
          )}
          {type === ALERT_VARIANTS.FAIL && (
            <Icon name='exclamation' size={Icon.size.L} />
          )}
          {children}
        </div>
        {
          dismissible &&
          <button className="sprk-c-Alert__icon sprk-c-Alert__icon--dismiss" type="button" title="Dismiss"
                  data-sprk-alert="dismiss" onClick={this.dismissAlert}>
            <svg className="sprk-c-Icon sprk-c-Icon--stroke-current-color" viewBox="0 0 64 64" aria-hidden="true">
              <use xlinkHref="#close">
                <symbol viewBox="0 0 64 64" id="close" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M21.8 21.8l20.4 20.4m0-20.4L21.8 42.2"/>
                </symbol>
              </use>
            </svg>
          </button>
        }
      </div>
    )
  };
}

export default Alert
