import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { sparkClassName } from '../../util';

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
      <div className='sprk-o-Box sprk-o-Box--large sprk-u-BackgroundColor--gray-tint-50'>
        <footer
          className='sprk-o-CenteredColumn sprk-o-Stack sprk-o-Stack--medium'
          role='contentinfo'
          data-id={id}
        />
      </div>
    )
  };
}

export default Footer
