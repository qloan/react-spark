import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import Button from '../../Button'
import Link from '../../Link'
import Icon from '../../Icon/Icon'
import Dropdown from '../../Dropdown'
import BUTTON_VARIANTS from '../../Button/variants'
import { sparkComponentClassName } from '../../../util'

class NavItem extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    link: PropTypes.shape({
      buttonVariant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
      href: PropTypes.string,
      text: PropTypes.string,
      variant: PropTypes.string,
      icon: PropTypes.string,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          href: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired
        })
      )
    })
  };

  get hasLinks() {
    const { link } = this.props
    return !!(link.links && link.links.length)
  }

  render = () => {
    const { buttonVariant, href, text, variant, icon, links } = this.props.link
    const { id } = this.props
    return (
      <li>
        {this.hasLinks ? (
          <Fragment>
            <Dropdown.DropdownLink
              variant='plain'
              masthead
              href={href}
              text={text}
              icon={icon}
              id={id}
              className={sparkComponentClassName('Masthead', 'link')}
            />
            <Dropdown.DropdownLinksContainer id={id}>
              <Dropdown.DropdownLinks links={links} />
            </Dropdown.DropdownLinksContainer>
          </Fragment>
        ) : (
          <Fragment>
            {buttonVariant ? (
              <Button
                href={href}
                variant={buttonVariant}
                className={sparkComponentClassName('Button', null, 'compact')}
              >
                {text}
              </Button>
            ) : (
              <Link href={href} plain variant={variant} masthead>
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
