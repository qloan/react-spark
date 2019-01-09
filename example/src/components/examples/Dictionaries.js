import React from 'react'
import { Dictionary } from 'react-spark'

const Dictionaries = () => (<>
  <h2>Dictionaries</h2>

  <p>Standard</p>
  <Dictionary className='extra-class' data-extra-attribute>
    <Dictionary.Item
      className='extra-class'
      data-extra-attribute
      itemKey={'Email Address'}
      itemValue={'sparkdesignsystem@quickenloans.com'}
    />
    <Dictionary.Item
      itemKey={'Mailing Address'}
      itemValue={'123 Main Street, Detroit, MI, 48216'}
    />
    <Dictionary.Item
      itemKey={'Home Phone'}
      itemValue={'(123) 456-7890'}
    />
    <Dictionary.Item
      itemKey={'Cell Phone'}
      itemValue={'(098) 765-4321'}
    />
    <Dictionary.Item
      itemKey={'Work Phone'}
      itemValue={'(555) 555-5555'}
    />
    <Dictionary.Item
      itemKey={'Work Extension'}
      itemValue={'55555'}
    />
  </Dictionary>

  <p>Striped</p>
  <Dictionary variant='striped'>
    <Dictionary.Item
      itemKey={'Email Address'}
      itemValue={'sparkdesignsystem@quickenloans.com'}
    />
    <Dictionary.Item
      itemKey={'Mailing Address'}
      itemValue={'123 Main Street, Detroit, MI, 48216'}
    />
    <Dictionary.Item
      itemKey={'Home Phone'}
      itemValue={'(123) 456-7890'}
    />
    <Dictionary.Item
      itemKey={'Cell Phone'}
      itemValue={'(098) 765-4321'}
    />
    <Dictionary.Item
      itemKey={'Work Phone'}
      itemValue={'(555) 555-5555'}
    />
    <Dictionary.Item
      itemKey={'Work Extension'}
      itemValue={'55555'}
    />
  </Dictionary>
</>)

export default Dictionaries
