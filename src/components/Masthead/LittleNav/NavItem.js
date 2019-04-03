import classnames from 'classnames'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import Button from '../../Button'
import Link from '../../Link'
import Icon from '../../Icon/Icon'
import Dropdown from '../../Dropdown'
import BUTTON_VARIANTS from '../../Button/variants'
import { sparkComponentClassName, sparkBaseClassName, sparkClassName } from '../../../util'

class NavItem extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    right: PropTypes.bool,
    link: PropTypes.shape({
      buttonVariant: PropTypes.oneOf(
        Object.keys(BUTTON_VARIANTS).map(itm => BUTTON_VARIANTS[itm])
      ),
      href: PropTypes.string,
      text: PropTypes.string,
      variant: PropTypes.string,
      target: PropTypes.string,
      icon: PropTypes.string,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          href: PropTypes.string,
          onClick: PropTypes.func
        })
      )
    })
  };

  get hasLinks() {
    const { link } = this.props
    return !!(link.links && link.links.length)
  }

  get linkClassName() {
    return classnames(
      sparkComponentClassName('Masthead', 'link'),
      sparkBaseClassName('Link', null, 'plain')
    )
  }

  render = () => {
    const {
      buttonVariant,
      href,
      text,
      variant,
      icon,
      links,
      target,
      onClick
    } = this.props.link
    const { id, right } = this.props
    return (
      <li>
        {this.hasLinks ? (
          <Fragment>
            <Dropdown.DropdownLink
              variant='plain'
              href={href}
              text={text}
              icon={icon}
              target={target}
              id={id}
              className={sparkComponentClassName('Masthead', 'link')}
            />
            <Dropdown.DropdownLinksContainer id={id} className={right ? sparkClassName('utility', 'Right', null, 'zero') : ''}>
              <Dropdown.DropdownLinks links={links} />
            </Dropdown.DropdownLinksContainer>
          </Fragment>
        ) : (
          <Fragment>
            {buttonVariant ? (
              <Button
                href={href}
                variant={buttonVariant}
                onClick={onClick}
                className={sparkComponentClassName('Button', null, 'compact')}
              >
                {text}
              </Button>
            ) : (
              <Link
                href={href}
                variant={variant}
                className={this.linkClassName}
                target={target}
                style={{ textDecoration: 'none' }}
                onClick={onClick}
              >
                {text || <Icon name={icon} size={Icon.size.L} color='base' />}
              </Link>
            )}
          </Fragment>
        )}
      </li>
    )
  };
}

export default NavItem
