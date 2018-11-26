import PropTypes from 'prop-types'
import React from 'react'
import Box from '../Box/Box'
import Stack from '../Stack/Stack'

class Footer extends React.Component {
  static defaultProps = {};

  static propTypes = {
    id: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
  };

  render = () => {
    const { children, id, size } = this.props

    return (
      <Box color='gray' padding={size}>
        <footer role='contentinfo' data-id={id}>
          {children}
        </footer>
      </Box>
    )
  };
}

export default Footer
