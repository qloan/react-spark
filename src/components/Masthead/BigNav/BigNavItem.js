import classnames from "classnames";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Link from "../../Link/Link";
import Dropdown from "../../Dropdown";
import { sparkComponentClassName, sparkObjectClassName } from "../../../util";

class WideNavigationItem extends React.Component {
  static defaultProps = {
    active: false
  };

  static propTypes = {
    active: PropTypes.bool,
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  };

  getClassName = active => {
    const activeClassName = sparkComponentClassName(
      "Masthead",
      "big-nav-item",
      "active"
    );

    return classnames(
      sparkComponentClassName("Masthead", "big-nav-item"),
      sparkObjectClassName("Stack", "item"),
      sparkObjectClassName("Stack", "item", "flex@xxs"),
      { [activeClassName]: active }
    );
  };

  get dropdownlinkClassName() {
    return classnames(
      sparkComponentClassName("Masthead", "link"),
      sparkComponentClassName("Masthead", "link", "big-nav")
    );
  }
  get linkClassName() {
    return classnames(
      sparkComponentClassName("Masthead", "link"),
      sparkComponentClassName("Masthead", "link", "big-nav")
    );
  }

  /**
   * @returns {boolean}
   */
  get hasLinks() {
    return !!(this.props.links && this.props.links.length);
  }

  get toggleId() {
    return this.props.id + "-nav-item-toggle";
  }

  render = () => {
    const { active, href, text, links } = this.props;

    return (
      <li className={this.getClassName(active)}>
        {this.hasLinks ? (
          <Fragment>
            <Dropdown.DropdownLink
              className={this.dropdownlinkClassName}
              href={href}
              text={text}
              id={this.toggleId}
            />
            <Dropdown.DropdownLinksContainer id={this.toggleId}>
              <Dropdown.DropdownLinks links={links} />
            </Dropdown.DropdownLinksContainer>
          </Fragment>
        ) : (
          <Link variant="plain" className={this.linkClassName} href={href}>
            {text}
          </Link>
        )}
      </li>
    );
  };
}

export default WideNavigationItem;
