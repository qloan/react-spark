import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { sparkClassName } from '../../util'
import Icon from './../Icon/Icon'
import Stack from './../Stack'

class AccordionHeader extends React.Component {
  static defaultProps = {
    analytics: ''
  };
  static propTypes = {
    control: PropTypes.string.isRequired,
    analytics: PropTypes.string
  };

  get className() {
    const baseClass = sparkClassName('component', 'Accordion', 'summary')
    return classNames(baseClass)
  }

  render = () => {
    const { id, control, analytics, children } = this.props
    return (
      <a
        data-id={id}
        className={this.className}
        aria-controls={control}
        data-analytics={analytics}
        data-sprk-toggle='trigger'
        data-sprk-toggle-type='accordion'
        href='#'
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
