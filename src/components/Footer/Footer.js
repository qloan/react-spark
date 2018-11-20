import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { sparkClassName } from '../../util'
import Box from '../Box/Box'

class Footer extends React.Component {
  static defaultProps = {};

  static propTypes = { id: PropTypes.string.isRequired };

  componentDidMount = () => {};

  get className() {
    const baseClass = sparkClassName('base', 'WideNavigation')
    return classNames(baseClass)
  }

  render = () => {
    const { children, id } = this.props

    return (
      <Box color='gray' padding='large'>
        <footer
          className='sprk-o-CenteredColumn sprk-o-Stack sprk-o-Stack--medium'
          role='contentinfo'
          data-id={id}
        />
      </Box>
    )
  };
}

export default Footer
