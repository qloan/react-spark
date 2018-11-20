import React from 'react'
import { Alert } from 'react-spark'

const Alerts = () => (<>
  <h2>Alerts</h2>

  <p>Information:</p>
  <Alert
    alertType='info'
    dismissible={false}
    idString='alert-info-1'
    analyticsString='object.action.event'
  >
    This is an info Spark alert!
  </Alert>

  <p>Success:</p>
  <Alert
    alertType='success'
    dismissible={true}
    idString='alert-success-1'
    analyticsString='object.action.event'
  >
    Successful alert
  </Alert>

  <p>Fail:</p>
  <Alert
    alertType='fail'
    dismissible={true}
    idString='alert-fail-1'
    analyticsString='object.action.event'
  >
    Failed alert
  </Alert>
</>)

export default Alerts
