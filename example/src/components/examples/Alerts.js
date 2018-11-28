import React from 'react'
import { Alert } from 'react-spark'

const Alerts = () => (<>
  <h2>Alerts</h2>

  <p>Information:</p>
  <Alert
    alertType='info'
    analyticsString='object.action.event'
    className='extra-class'
    data-extra-attribute
    dismissible={false}
    idString='alert-info-1'
  >
    This is an info Spark alert!
  </Alert>

  <p>Success:</p>
  <Alert
    alertType='success'
    analyticsString='object.action.event'
    dismissible={true}
    idString='alert-success-1'
  >
    Successful alert
  </Alert>

  <p>Fail:</p>
  <Alert
    alertType='fail'
    analyticsString='object.action.event'
    dismissible={true}
    idString='alert-fail-1'
  >
    Failed alert
  </Alert>
</>)

export default Alerts
