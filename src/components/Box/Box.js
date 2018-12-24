import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { sparkObjectClassName, sparkClassName } from "../../util";
import PADDING_SIZES from "./paddingSizes";

class Box extends React.Component {
  static defaultProps = {
    children: null,
    padding: null
  };

  static propTypes = {
    children: PropTypes.node,
    padding: PropTypes.oneOf(Object.values(PADDING_SIZES)),
    color: PropTypes.string
  };

  get className() {
    const { className, color, padding } = this.props;
    const block = "Box";
    const paddingSizeClassName = sparkObjectClassName(block, null, padding);
    const colorClassName = sparkClassName(
      "utility",
      "BackgroundColor",
      null,
      `${color}`
    );

    return classNames(
      sparkObjectClassName(block),
      { [paddingSizeClassName]: padding },
      { [colorClassName]: Boolean(color) },
      { [className]: className }
    );
  }

  render = () => {
    const { children, className, ...props } = this.props;

    return (
      <div className={this.className} {...props}>
        {children}
      </div>
    );
  };
}

export default Box;
