import React from 'react'
import { Alert } from 'react-spark'

const Alerts = () => (<>
  <h2>Alerts</h2>

  <p>Information:</p>
  <Alert
    className='extra-class'
    data-extra-attribute
    dismissible={false}
    type='info'
  >
    This is an info Spark alert!
  </Alert>

  <p>Success:</p>
  <Alert
    dismissible={true}
    type='success'
  >
    Successful alert
  </Alert>

  <p>Fail:</p>
  <Alert
    dismissible={true}
    type='fail'
  >
    Failed alert
  </Alert>
</>)

export default Alerts
