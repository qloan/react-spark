import { bindToggleUIEvents } from '@sparkdesignsystem/spark-core'
import { hideMobileNavs } from '@sparkdesignsystem/spark-core'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import Icon from '../../Icon/Icon'
import List from '../../List/List'
import {
    sparkBaseClassName,
    sparkComponentClassName,
    sparkObjectClassName
} from '../../../util/index'

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
              className: PropTypes.string,
              onClick: PropTypes.func
          })
      ),
      target: PropTypes.string,
      text: PropTypes.string
  };

  handleMainClick(func, e) {
      if (!this.hasLinks) {
          hideMobileNavs()
      }
      if (typeof func === 'function') {
          func(e)
      }
  }

  handleSublinkClick(func, e) {
      hideMobileNavs()
      if (typeof func === 'function') {
          func(e)
      }
  }

  componentDidMount = () => {
      if (this.hasLinks) bindToggleUIEvents(this.liRef.current)
  };

  /**
   * @returns {boolean}
   */
  get hasLinks() {
      return !!(this.props.link.links && this.props.link.links.length)
  }

  getLiClassName = active => {
      const { buttonVariant } = this.props.link
      const activeClassName = sparkComponentClassName(
          'Accordion',
          'item',
          'active'
      )
      const boxClass = sparkObjectClassName('Box')
      return classnames(sparkComponentClassName('MastheadAccordion', 'item'), {
          [activeClassName]: active,
          [boxClass]: buttonVariant
      })
  };

  get linkClassName() {
      const { buttonVariant } = this.props.link
      const accordionClass = sparkComponentClassName(
          'MastheadAccordion',
          'summary'
      )
      const baseButtonClass = sparkComponentClassName('Button')
      const compactButtonClass = sparkComponentClassName(
          'Button',
          null,
          'compact'
      )
      const buttonVariantClass = sparkComponentClassName(
          'Button',
          null,
          buttonVariant
      )
      const stretchClass = sparkComponentClassName('Button', null, 'full@sm')
      return classnames({
          [accordionClass]: !buttonVariant,
          [baseButtonClass]: buttonVariant,
          [buttonVariantClass]: buttonVariant,
          [stretchClass]: buttonVariant,
          [compactButtonClass]: buttonVariant
      })
  }

  get spanClassName() {
      return [
          sparkBaseClassName('TypeBodyOne'),
          sparkComponentClassName('MastheadAccordion', 'heading')
      ].join(' ')
  }

  render = () => {
      const { active, href, links, text, target, className, onClick } = this.props.link
      let conditionalAnchorProps = {}
      let conditionalLiProps = {}

      if (this.hasLinks) {
          conditionalAnchorProps = {
              'aria-controls': this.props.id,
              'data-sprk-toggle': 'trigger',
              'data-sprk-toggle-type': 'accordion'
          }
          conditionalLiProps = {
              'data-sprk-toggle': 'container'
          }
      }

      return (
          <li
              className={classnames(this.getLiClassName(active), className)}
              ref={this.liRef}
              {...conditionalLiProps}
          >
              <a
                  className={this.linkClassName}
                  href={href}
                  target={target}
                  onClick={e => this.handleMainClick(onClick, e)}
                  {...conditionalAnchorProps}
              >
                  <span className={this.spanClassName}>{typeof text === 'function' ? text() : text}</span>
                  {this.hasLinks && (
                      <Icon
                          name='chevron-down'
                          size={Icon.size.L}
                          color='base'
                          className={sparkComponentClassName('MastheadAccordion', 'icon')}
                      />
                  )}
            </a>
              {this.hasLinks && (
                  <List
                      className={sparkComponentClassName('MastheadAccordion')}
                      variant='bare'
                      data-sprk-toggle='content'
                      id={this.props.id}
                  >
                {links.map((sublink, i) => (
                          <li
                              key={i}
                              className={sparkComponentClassName('MastheadAccordion', 'item')}
                          >
                              <a
                                  className={sparkComponentClassName(
                                      'MastheadAccordion',
                                      'summary'
                                  )}
                                  href={sublink.href}
                                  target={sublink.target}
                                  onClick={e => this.handleSublinkClick(sublink.onClick, e)}
                              >
                                  {sublink.text}
                            </a>
                  </li>
                      ))}
              </List>
              )}
        </li>
      )
  };
}

export default NarrowNavItem
