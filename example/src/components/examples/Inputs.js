import React from 'react'
import { CheckboxGroup, InputContainer, TextInput } from 'react-spark'

const Inputs = () => (<>
  <h3>Text inputs</h3>

  <p>Text input:</p>
  <InputContainer>
    <TextInput
      id='text-input-normal'
      label='Text Input Label'
      width={100}
    />
  </InputContainer>

  <p>Text input with error:</p>
  <InputContainer>
    <TextInput
      error={'There is an error on this field.'}
      id='text-input-error'
      label='Text Input Label'
      width={100}
    />
  </InputContainer>

  <p>Disabled text input:</p>
  <InputContainer>
    <TextInput
      disabled
      id='text-input-disabled'
      label='Text Input Label'
      width={100}
    />
  </InputContainer>

  <h3>Checkbox Group</h3>
  <p>Normal checkbox group:</p>
  <CheckboxGroup
    checkboxes={[
      {id: 'checkbox-normal-1', label: 'Checkbox Item 1'},
      {id: 'checkbox-normal-2', label: 'Checkbox Item 2'},
      {id: 'checkbox-normal-3', label: 'Checkbox Item 3'}
    ]}
    id={'checkbox-normal'}
    label='Checkbox Group Label'
  />

  <p>Checkbox group with error:</p>
  <CheckboxGroup
    checkboxes={[
      {id: 'checkbox-error-1', label: 'Checkbox Item 1'},
      {id: 'checkbox-error-2', label: 'Checkbox Item 2'},
      {id: 'checkbox-error-3', label: 'Checkbox Item 3'}
    ]}
    error='There is an error on this field.'
    id={'checkbox-error'}
    label='Checkbox Group Label'
  />

  <p>Disabled checkbox group:</p>
  <CheckboxGroup
    checkboxes={[
      {id: 'checkbox-disabled-1', label: 'Checkbox Item 1'},
      {id: 'checkbox-disabled-2', label: 'Checkbox Item 2'},
      {id: 'checkbox-disabled-3', label: 'Checkbox Item 3'}
    ]}
    disabled
    id={'checkbox-disabled'}
    label='Checkbox Group Label'
  />
</>)

export default Inputs
