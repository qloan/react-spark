import React from 'react'
import {
  CheckboxGroup,
  DateInput,
  DatePicker,
  RadioGroup,
  Select,
  TextArea,
  TextInput
} from 'react-spark'

class Inputs extends React.Component {
  state = {
    textInputWithValueValue: 'value'
  }

  handleTextInputChange = e => {
    this.setState({ textInputWithValueValue: e.value })
  }

  renderCheckboxes = () => (
    <>
      <h3>Checkbox Group</h3>
      <p>Normal checkbox group:</p>
      <CheckboxGroup
        checkboxes={[
          {
            id: 'checkbox-normal-1',
            label: 'Checkbox Item 1',
            name: 'checkbox-normal-1',
            value: 'foo'
          },
          {
            id: 'checkbox-normal-2',
            label: 'Checkbox Item 2',
            name: 'checkbox-normal-2',
            value: 'bar'
          },
          {
            id: 'checkbox-normal-3',
            label: 'Checkbox Item 3',
            name: 'checkbox-normal-3',
            value: 'baz'
          }
        ]}
        className='extra-class'
        data-extra-attribute
        id={'checkbox-normal'}
        label='Checkbox Group Label'
      />

      <p>Checkbox group with error:</p>
      <CheckboxGroup
        checkboxes={[
          {
            id: 'checkbox-error-1',
            label: 'Checkbox Item 1',
            name: 'checkbox-normal-1'
          },
          {
            id: 'checkbox-error-2',
            label: 'Checkbox Item 2',
            name: 'checkbox-normal-2'
          },
          {
            id: 'checkbox-error-3',
            label: 'Checkbox Item 3',
            name: 'checkbox-normal-3'
          }
        ]}
        error='There is an error on this field.'
        id={'checkbox-error'}
        label='Checkbox Group Label'
      />

      <p>Disabled checkbox group:</p>
      <CheckboxGroup
        checkboxes={[
          {
            id: 'checkbox-disabled-1',
            label: 'Checkbox Item 1',
            name: 'checkbox-normal-1'
          },
          {
            id: 'checkbox-disabled-2',
            label: 'Checkbox Item 2',
            name: 'checkbox-normal-2'
          },
          {
            id: 'checkbox-disabled-3',
            label: 'Checkbox Item 3',
            name: 'checkbox-normal-3'
          }
        ]}
        disabled
        id={'checkbox-disabled'}
        label='Checkbox Group Label'
      />
    </>
  )

  renderRadios = () => (
    <>
      <h3>Radio Group</h3>
      <RadioGroup
        radios={[
          {
            id: 'radio-normal-1',
            label: 'Radio Item 1',
            name: 'radio-normal-1',
            value: 'foo'
          },
          {
            id: 'radio-normal-2',
            label: 'Radio Item 2',
            name: 'radio-normal-1',
            value: 'bar'
          },
          {
            id: 'radio-normal-3',
            label: 'Radio Item 3',
            name: 'radio-normal-1',
            value: 'baz'
          }
        ]}
        className='extra-class'
        data-extra-attribute
        id={'radio-normal'}
        label='Radio Group Label'
      />

      <RadioGroup
        radios={[
          {
            id: 'radio-error-1',
            label: 'Radio Item 1',
            name: 'radio-error-1'
          },
          {
            id: 'radio-error-2',
            label: 'Radio Item 2',
            name: 'radio-error-1'
          },
          {
            id: 'radio-error-3',
            label: 'Radio Item 3',
            name: 'radio-error-1'
          }
        ]}
        error='There is an error on this field.'
        id={'radio-error'}
        label='Radio Group With Error'
      />

      <RadioGroup
        radios={[
          {
            id: 'radio-disabled-1',
            label: 'Radio Item 1',
            name: 'radio-disabled-1'
          },
          {
            id: 'radio-disabled-2',
            label: 'Radio Item 2',
            name: 'radio-disabled-1'
          },
          {
            id: 'radio-disabled-3',
            label: 'Radio Item 3',
            name: 'radio-disabled-1'
          }
        ]}
        disabled
        id={'radio-disabled'}
        label='Radio Group Disabled'
      />
    </>
  )

  renderDateInputs = () => (
    <>
      <h3>Date Inputs</h3>

      <p>Normal:</p>
      <DateInput
        className='extra-class'
        data-extra-attribute
        id='date-input-normal'
        label='Date'
        width={100}
      />

      <p>Error:</p>
      <DateInput
        className='extra-class'
        data-extra-attribute
        error='There is an error on this field.'
        id='date-input-normal'
        label='Date'
        width={100}
      />

      <p>Disabled:</p>
      <DateInput disabled id='date-input-disabled' label='Date' width={100} />

      <h3>Date Picker</h3>

      <p>Normal:</p>
      <DatePicker
        className='extra-class'
        data-extra-attribute
        id='date-picker-normal'
        label='Date'
        width={100}
      />

      <p>Error:</p>
      <DatePicker
        className='extra-class'
        data-extra-attribute
        error='There is an error on this field.'
        id='date-input-normal'
        label='Date'
        width={100}
      />

      <p>Disabled:</p>
      <DatePicker disabled id='date-picker-normal' label='Date' width={100} />
    </>
  )

  renderSelects = () => {
    const options = [
      { value: 34, text: 'First val' },
      { value: 34, text: 'Second val' }
    ]

    return (
      <>
        <h3>Select:</h3>

        <Select
          className='extra-class'
          data-extra-attribute
          id='select-normal'
          label='Select Label'
          options={options}
          width={100}
        />
      </>
    )
  }

  renderTextInputs = () => (
    <>
      <h3>Text inputs</h3>

      <p>Text input:</p>
      <TextInput
        className='extra-class'
        data-extra-attribute
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
    </>
  )

  renderTextAreas = () => (
    <>
      <h3>Text Areas</h3>

      <p>Text area:</p>
      <TextArea id='text-input-normal' label='TextArea Label' width={100} />

      <p>Text input with error:</p>
      <TextArea
        className='extra-class'
        data-extra-attribute
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
      {this.renderCheckboxes()}
      {this.renderRadios()}
      {this.renderSelects()}
      {this.renderTextAreas()}
      {this.renderDateInputs()}
    </>
  )
}

export default Inputs
