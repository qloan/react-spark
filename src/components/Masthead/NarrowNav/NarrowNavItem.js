import { bindToggleUIEvents } from "@sparkdesignsystem/spark-core/components/toggle";
import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import Icon from "../../Icon/Icon";
import Link from "../../Link/Link";
import List from "../../List/List";
import {
  sparkClassName,
  sparkBaseClassName,
  sparkComponentClassName,
  sparkObjectClassName
} from "../../../util/index";

class NarrowNavItem extends React.Component {
  liRef = React.createRef();

  static propTypes = {
    active: PropTypes.bool,
    href: PropTypes.string,
    onClick: PropTypes.func,
    id: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        href: PropTypes.string,
        target: PropTypes.string,
        onClick: PropTypes.func
      })
    ),
    target: PropTypes.string,
    text: PropTypes.string
  };

  componentDidMount = () => {
    if (this.hasLinks) bindToggleUIEvents(this.liRef.current);
  };

  /**
   * @returns {boolean}
   */
  get hasLinks() {
    return !!(this.props.link.links && this.props.link.links.length);
  }

  getLiClassName = active => {
    const { buttonVariant } = this.props.link;
    const activeClassName = sparkComponentClassName(
      "Accordion",
      "item",
      "active"
    );
    const boxClass = sparkObjectClassName("Box");
    return classnames(sparkComponentClassName("Accordion", "item"), {
      [activeClassName]: active,
      [boxClass]: buttonVariant
    });
  };

  get linkClassName() {
    const { buttonVariant } = this.props.link;
    const accordionClass = sparkComponentClassName("Accordion", "summary");
    const baseButtonClass = sparkComponentClassName("Button");
    const compactButtonClass = sparkComponentClassName(
      "Button",
      null,
      "compact"
    );
    const buttonVariantClass = sparkComponentClassName(
      "Button",
      null,
      buttonVariant
    );
    const stretchClass = sparkComponentClassName("Button", null, "full@sm");
    return classnames({
      [accordionClass]: !buttonVariant,
      [baseButtonClass]: buttonVariant,
      [buttonVariantClass]: buttonVariant,
      [stretchClass]: buttonVariant,
      [compactButtonClass]: buttonVariant
    });
  }

  get spanClassName() {
    return [
      sparkBaseClassName("TypeBodyTwo"),
      sparkComponentClassName("Accordion", "heading")
    ].join(" ");
  }

  render = () => {
    const { active, href, links, text, target, onClick } = this.props.link;
    let conditionalAnchorProps = {};

    if (this.hasLinks) {
      conditionalAnchorProps = {
        "aria-controls": this.props.id,
        "data-sprk-toggle": "trigger",
        "data-sprk-toggle-type": "accordion"
      };
    }

    return (
      <li
        className={this.getLiClassName(active)}
        ref={this.liRef}
        data-sprk-toggle="container"
      >
        <a
          className={this.linkClassName}
          href={href}
          target={target}
          onClick={onClick}
          {...conditionalAnchorProps}
        >
          <span className={this.spanClassName}>{text}</span>
          {this.hasLinks && (
            <Icon name="chevron-down" size={Icon.size.L} color="base" />
          )}
        </a>
        {this.hasLinks && (
          <List
            className={sparkComponentClassName("Accordion", "details")}
            variant="bare"
            data-sprk-toggle="content"
            id={this.props.id}
          >
            {links.map((sublink, i) => (
              <li key={i}>
                <Link
                  className={sparkClassName("utility", "pam")}
                  variant="standalone"
                  href={sublink.href}
                  target={sublink.target}
                  onClick={sublink.onClick}
                >
                  {sublink.text}
                </Link>
              </li>
            ))}
          </List>
        )}
      </li>
    );
  };
}

export default NarrowNavItem;
