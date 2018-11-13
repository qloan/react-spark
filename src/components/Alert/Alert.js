import classNames from "classnames";
import { alerts } from '@sparkdesignsystem/spark-core/components/alerts'
import PropTypes from "prop-types";
import React, {Component} from "react";
import ALERT_VARIANTS from "./variants";
import { sparkClassName, sparkComponentClassName } from "../../util";

class Alert extends Component {
  static defaultProps = {
    variant: "information",
    dismissible: true,
    isDisplayed: true
  };

  static propTypes = {
    type: PropTypes.string.isRequired,
    isDisplayed: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    dismissible: PropTypes.bool,
    variant: PropTypes.oneOf(Object.values(ALERT_VARIANTS))
  }

  ref = React.createRef()

  get className() {
    const { variant } = this.props

    const baseClass = sparkComponentClassName('Alert')
    const variantClass = sparkComponentClassName('Alert', null, variant)

    return classNames(
      baseClass,
      {
        [variantClass]: variant !== ALERT_VARIANTS.INFORMATION,
      }
    )
  }

  componentDidMount = () => {
    const {isDisplayed} = this.props

    if (isDisplayed) {
      alerts(this.ref.current, {})
    }
  }

  render = () => {
      const {isDisplayed, type, inline, children} = this.props;
      const base = `alert alert-${type}`;
      const className = inline ? `${base} inline` : base;

      if (!isDisplayed) {
          return null;
      }

      return <div
            id="alertContainer"
            className={this.className}
            role="alert">
            {children}
        </div>;

    }
}

export default Alert;
