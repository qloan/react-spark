import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkComponentClassName } from '../../util'
import Icon from '../Icon'
import Type from '../Type'

class AccordionHeader extends React.Component {
  static defaultProps = {
    children: null,
    className: null,
    element: 'h3'
  }

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    control: PropTypes.string.isRequired,
    element: PropTypes.string
  }

  get className () {
    const { className } = this.props

    return classNames(
      sparkComponentClassName('Accordion', 'summary'),
      { [className]: className }
    )
  }

  render = () => {
    const {
      children,
      className,
      control,
      element,
      ...props
    } = this.props

    return (
      <a
        aria-controls={control}
        className={this.className}
        data-sprk-toggle='trigger'
        data-sprk-toggle-type='accordion'
        href='#'
        {...props}
      >
        <Type.DisplaySeven
          className={sparkComponentClassName('Accordion', 'heading')}
          element={element}
        >
          {children}
        </Type.DisplaySeven>
        <Icon
          name='chevron-up-circle-two-color'
          size='l'
          toggle='accordionIconUseElement'
          variant='Accordion'
        />
      </a>
    )
  }
}

export default AccordionHeader
