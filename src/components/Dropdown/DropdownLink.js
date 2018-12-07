import { dropdowns } from '@sparkdesignsystem/spark-core/components/dropdown'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import Icon from '../Icon/Icon'
import Link from '../Link/Link'

class DropdownLink extends React.Component {
  static defaultProps = {};

  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string,
    className: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.string
  };

  componentDidMount() {
    if (!window.initDropdowns) {
      dropdowns()
      window.initDropdowns = true
    }
  }

  render = () => {
    const { text, icon, id, className, href } = this.props

    return (
      <Link
        variant='plain'
        aria-haspopup={true}
        role='combobox'
        data-sprk-dropdown-trigger={id}
        className={className}
        href={href}
      >
        {icon ? (
          <Icon name={icon} size={Icon.size.L} color='base' />
        ) : (
          <Fragment>
            {text} <Icon name='chevron-down' color='base' />
          </Fragment>
        )}
      </Link>
    )
  };
}

export default DropdownLink
