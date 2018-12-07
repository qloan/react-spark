import { dropdowns } from '@sparkdesignsystem/spark-core/components/dropdown'
import PropTypes from 'prop-types'
import React from 'react'
import Icon from '../Icon/Icon'
import Link from '../Link/Link'
import { sparkComponentClassName } from '../../util'

class DropdownLink extends React.Component {
  static defaultProps = {};

  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  };

  componentDidMount() {
    if (!window.initDropdowns) {
      dropdowns()
      window.initDropdowns = true
    }
  }

  render = () => {
    const { text, id } = this.props

    return (
      <Link
        variant='plain'
        masthead
        className={sparkComponentClassName('Masthead', 'link', 'big-nav')}
        href='#'
        aria-haspopup={true}
        role='combobox'
        data-sprk-dropdown-trigger={id}
      >
        {text}
        <Icon name='chevron-down' color='base' />
      </Link>
    )
  };
}

export default DropdownLink
