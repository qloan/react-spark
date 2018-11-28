import React from 'react'
import {
  CheckboxGroup,
  Select,
  TextArea,
  TextInput
} from 'react-spark'

class Inputs extends React.Component {
  state = {
    textInputWithValueValue: 'value'
  }

  handleTextInputChange = e => {
    this.setState({textInputWithValueValue: e.value})
  }

  renderCheckboxes = () => (
    <>
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
    </>
  )

  renderSelects = () => {
    const options = [
      {value: 34, text: 'First val'},
      {value: 34, text: 'Second val'}
    ]

    return (
      <>
        <h3>Select:</h3>

        <Select
          id='select-normal'
          label='Select Label'
          width={100}
          options={options}
        />
      </>
    )
  }

  renderTextInputs = () => (
    <>
      <h3>Text inputs</h3>

      <p>Text input:</p>
      <TextInput
        id='text-input-normal'
        label='Text Input Label'
        width={100}
      />

      <p>Text input with value:</p>
      <TextInput
        id='text-input-with-value'
        label='Text Input Label'
        onChange={this.handleTextInputChange}
        value={this.state.textInputWithValueValue}
        width={100}
      />

      <p>Text input with error:</p>
      <TextInput
        error={'There is an error on this field.'}
        id='text-input-error'
        label='Text Input Label'
        width={100}
      />

      <p>Text input with helper text:</p>
      <TextInput
        helper={'This is helper text for this input.'}
        id='text-input-helper'
        label='Text Input Label'
        width={100}
      />

      <p>Disabled text input:</p>
      <TextInput
        disabled
        id='text-input-disabled'
        label='Text Input Label'
        width={100}
      />

      <p>Monetary Text Input:</p>
      <TextInput
        id='text-input-monetary'
        label='Monetary Text Input'
        width={100}
        type={'tel'}
        variant={'monetary'}
      />

      {/* <div className='sprk-b-InputContainer' data-sprk-input='monetary'>
        <div className='sprk-b-TextInputIconContainer sprk-b-TextInputIconContainer--monetary'>
          <input className='sprk-b-TextInput sprk-b-TextInput--monetary  sprk-u-Width-100' pattern='(^\$?(\d+|\d{1,3}(,\d{3})*)(\.\d+)?$)|^$' id='monetary-normal' data-id='monetary-normal' type='tel' aria-describedby='monetary-normal--error-container' data-sprk-input='text' />
          <div className='sprk-b-InputContainer__input-border' />
          <label htmlFor='monetary-normal' className='sprk-b-Label sprk-b-Label--monetary'>Payment</label>
        </div>
        <div className='sprk-b-ErrorContainer' id='monetary-normal--error-container' />
      </div> */}
    </>
  )

  renderTextAreas = () => (
    <>
      <h3>Text Areas</h3>

      <p>Text area:</p>
      <TextArea id='text-input-normal' label='TextArea Label' width={100} />

      <p>Text input with error:</p>
      <TextArea
        error={'There is an error on this field.'}
        id='text-input-error'
        label='TextArea Label'
        width={100}
      />

      <p>Disabled text area:</p>
      <TextArea
        disabled
        id='text-input-disabled'
        label='TextArea Label'
        width={100}
      />
    </>
  )

  render = () => (
    <>
      <h2>Inputs</h2>

      {/* TODO: Add table of contents */}
      {this.renderTextInputs()}
      {this.renderTextAreas()}
      {this.renderSelects()}
      {this.renderCheckboxes()}
    </>
  )
}

export default Inputs
