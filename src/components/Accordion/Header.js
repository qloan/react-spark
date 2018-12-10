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
        aria-expanded='false'
        className={this.className}
        data-analytics={analytics}
        data-id={id}
        data-sprk-toggle='trigger'
        data-sprk-toggle-type='accordion'
        href='#'
        {...props}
      >
        <Stack>
          <Stack.Item>{children}</Stack.Item>
        </Stack>
        <Stack endColumn>
          <Stack.Item>
            <Icon
              name='chevron-down-circle'
              size='l'
              toggle='accordionIconUseElement'
              variant='Accordion'
            />
          </Stack.Item>
        </Stack>
      </a>
    )
  };
}

export default AccordionHeader
