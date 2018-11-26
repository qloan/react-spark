import React from 'react'
import { Icon } from 'react-spark'

const Icons = () => (
  <>
    <h2>Icons</h2>

    <p>Small</p>
    <Icon name='chevron-down-circle' />

    <p>Large</p>
    <Icon name='application' size={Icon.size.L} />

    <p>X Large</p>
    <Icon name='blog' size={Icon.size.XL} />

    <p>XX Large</p>
    <Icon name='call-team-member' size={Icon.size.XXL} />
  </>
)

export default Icons
