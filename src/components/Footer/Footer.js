import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { sparkClassName } from '../../util'
import Box from '../Box/Box'
import Stack from '../Stack/Stack'

class Footer extends React.Component {
  static defaultProps = {};

  static propTypes = {
    id: PropTypes.string.isRequired
  };

  render = () => {
    const { children, id } = this.props

    return (
      <Box color='gray' padding='medium'>
        <footer role='contentinfo' data-id={id}>
          <Stack splitAt='medium'>
            <Stack.Item breakpoint='medium' width='fifth' />
            <Stack.Item breakpoint='medium' width='three-fifths'>
              {children}
            </Stack.Item>
          </Stack>
        </footer>
      </Box>
    )
  };
}

export default Footer
