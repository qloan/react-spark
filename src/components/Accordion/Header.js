import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { sparkComponentClassName } from '../../util'
import Icon from '../Icon'
import Stack from '../Stack'

class AccordionHeader extends React.Component {
  static defaultProps = {
    analytics: '',
    children: null
  };

  static propTypes = {
    analytics: PropTypes.string,
    children: PropTypes.node,
    control: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  };

  get className() {
    const { className } = this.props
    const baseClass = sparkComponentClassName('Accordion', 'summary')
    return classNames(baseClass, { [className]: className })
  }

  render = () => {
    const {
      analytics,
      id,
      children,
      className,
      control,
      ...props
    } = this.props

    return (
      <a
        aria-controls={control}
        className={this.className}
        data-analytics={analytics}
        data-id={id}
        data-sprk-toggle='trigger'
        data-sprk-toggle-type='accordion'
        href='#'
        {...props}
      >
        {children}
        <Icon
          name='chevron-up-circle-two-color'
          size='l'
          toggle='accordionIconUseElement'
          variant='Accordion'
        />
      </a>
    )
  };
}

export default AccordionHeader
