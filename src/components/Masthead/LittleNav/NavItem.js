import PropTypes from 'prop-types'
import React from 'react'
import Button from '../../Button'
import Link from '../../Link'
import Icon from '../../Icon/Icon'
import BUTTON_VARIANTS from '../../Button/variants'
import { sparkComponentClassName } from '../../../util'

class NavItem extends React.Component {
  static propTypes = {
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

  render = () => {
    const { buttonVariant, href, text, variant, icon } = this.props.link

    return (
      <li>
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
      </li>
    )
  };
}

export default NavItem
