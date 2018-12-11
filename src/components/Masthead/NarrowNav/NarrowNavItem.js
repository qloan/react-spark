import { bindToggleUIEvents } from "@sparkdesignsystem/spark-core/components/toggle";
import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import Icon from "../../Icon/Icon";
import {
  sparkClassName,
  sparkBaseClassName,
  sparkComponentClassName
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
    const activeClassName = sparkComponentClassName(
      "Accordion",
      "item",
      "active"
    );

    return classnames(sparkComponentClassName("Accordion", "item"), {
      [activeClassName]: active
    });
  };

  get subMenuLinkClassName() {
    return [
      sparkBaseClassName("Link"),
      sparkBaseClassName("Link", null, "standalone"),
      sparkClassName("utility", "pam")
    ].join(" ");
  }

  get spanClassName() {
    return [
      sparkBaseClassName("TypeBodyTwo"),
      sparkComponentClassName("Accordion", "heading")
    ].join(" ");
  }

  get subMenuUlClassName() {
    return [
      sparkBaseClassName("List"),
      sparkBaseClassName("List", null, "bare"),
      sparkComponentClassName("Accordion", "details")
    ].join(" ");
  }

  render = () => {
    const { active, href, links, text, target, onClick } = this.props.link;
    const id = this.props.id;
    let conditionalAnchorProps = {};

    if (this.hasLinks) {
      conditionalAnchorProps = {
        ...conditionalAnchorProps,
        "aria-controls": id,
        "data-sprk-toggle": "trigger",
        "data-sprk-toggle-type": "accordion"
      };
    }

    return (
      <li className={this.getLiClassName(active)} ref={this.liRef}>
        <a
          className={sparkComponentClassName("Accordion", "summary")}
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
          <ul
            className={this.subMenuUlClassName}
            data-sprk-toggle="content"
            id={id}
          >
            {links.map((sublink, i) => (
              <li key={i}>
                <a
                  className={this.subMenuLinkClassName}
                  href={sublink.href}
                  target={sublink.target}
                  onClick={sublink.onClick}
                >
                  {sublink.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };
}

export default NarrowNavItem;
