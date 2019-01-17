import PropTypes from 'prop-types';
import classnames from 'classnames';
import React from 'react';
import Box from '../Box/Box';
import { sparkClassName } from '../../util';

class Footer extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
  };

  get className() {
    return classnames(
      sparkClassName('object', 'CenteredColumn'),
      sparkClassName('object', 'Stack'),
      sparkClassName('object', 'Stack', null, 'misc-b')
    )
  }

  render = () => {
    const { children, className, id, padding, ...props } = this.props

    return (
      <Box className={className} color='gray' padding={padding} {...props}>
        <footer role='contentinfo' data-id={id} className={this.className}>
          {children}
        </footer>
      </Box>
    )
  };
}

export default Footer
