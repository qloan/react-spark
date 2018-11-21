import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { sparkClassName } from '../../util'

class AccordionHeader extends React.Component {
  static defaultProps = {
    analytics: ''
  };
  static propTypes = {
    control: PropTypes.string.isRequired,
    analytics: PropTypes.string
  };

  get calssName() {
    const baseClass = sparkClassName('component', 'Accordion', 'summary')
    return classNames(baseClass)
  }

  render = () => {
    const { control, analytics, children } = this.props
    return (
      <a
        className={this.calssName}
        aria-controls={control}
        data-analytics={analytics}
        data-sprk-toggle='trigger'
      >
        {children}
      </a>
    )
  };
}

export default AccordionHeader
