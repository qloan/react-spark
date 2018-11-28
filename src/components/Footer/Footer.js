import PropTypes from 'prop-types'
import React from 'react'

import Box from '../Box/Box'

class Footer extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
  }

  render = () => {
    const {children, className, id, size, ...props} = this.props

    return (
      <Box className={className} color='gray' padding={size} {...props}>
        <footer role='contentinfo' data-id={id}>
          {children}
        </footer>
      </Box>
    )
  }
}

export default Footer
