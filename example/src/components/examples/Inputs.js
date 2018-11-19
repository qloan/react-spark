import React from 'react'
import {
  CheckboxGroup,
  InputContainer,
  Select,
  TextInput
} from 'react-spark'

class Inputs extends React.Component {
  renderCheckboxes = () => (<>
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

  renderSelects = () => {
    const options = [
      {value: 34, text: 'First val'},
      {value: 34, text: 'Second val'}
    ]

    return (<>
      <h3>Select:</h3>

      <Select
        id='select-normal'
        label='Select Label'
        width={100}
        options={options}
      />
    </>)
  }

  renderTextInputs = () => (<>
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
  </>)

  render = () => (<>
    <h2>Inputs</h2>

    {/* TODO: Add table of contents */}
    {this.renderTextInputs()}
    {this.renderSelects()}
    {this.renderCheckboxes()}
  </>)
}

export default Inputs
