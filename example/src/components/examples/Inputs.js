import React from 'react'
import {
  CheckboxGroup,
  DateInput,
  DatePicker,
  RadioGroup,
  Divider,
  Link,
  List,
  PasswordInput,
  MoneyInput,
  Select,
  SsnInput,
  TextArea,
  TextInput,
  Type,
  PhoneNumberInput
} from 'react-spark'

class Inputs extends React.Component {
  state = {
    dateInputValue: '01/23/2018',
    datePickerValue: '',
    monetaryInputValue: '3453',
    phoneNumberInputValue: '4531231234',
    ssnInputValue: '',
    textInputWithValueValue: 'value'
  };

  handleDateInputChange = event => {
    this.setState({ dateInputValue: event.target.value })
  };

  handleDatePickerChange = event => {
    this.setState({ datePickerValue: event.target.value })
  };

  handleMonetaryInputChange = event => {
    this.setState({ monetaryInputValue: event.target.value })
  };

  handlePhoneNumberInputChange = event => {
    this.setState({ phoneNumberInputValue: event.target.value })
  };

  handleSsnInputChange = event => {
    this.setState({ ssnInputValue: event.target.value })
  };

  handleTextInputChange = event => {
    this.setState({ textInputWithValueValue: event.target.value })
  };

  renderCheckboxes = () => (
    <div id='checkboxes'>
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
    </div>
  );

  renderRadios = () => (
    <div id='radios'>
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
            name: 'radio-error-1',
            value: '1'
          },
          {
            id: 'radio-error-2',
            label: 'Radio Item 2',
            name: 'radio-error-1',
            value: '2'
          },
          {
            id: 'radio-error-3',
            label: 'Radio Item 3',
            name: 'radio-error-1',
            value: '3'
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
            name: 'radio-disabled-1',
            value: '4'
          },
          {
            id: 'radio-disabled-2',
            label: 'Radio Item 2',
            name: 'radio-disabled-1',
            value: '5'
          },
          {
            id: 'radio-disabled-3',
            label: 'Radio Item 3',
            name: 'radio-disabled-1',
            value: '6'
          }
        ]}
        disabled
        id={'radio-disabled'}
        label='Radio Group Disabled'
      />
    </div>
  );

  renderDateInputs = () => (
    <div id='date-inputs'>
      <h3>Date Inputs</h3>

      <p>Normal:</p>
      <DateInput
        className='extra-class'
        data-extra-attribute
        id='date-input-normal'
        label='Date'
        onChange={this.handleDateInputChange}
        value={this.state.dateInputValue}
        width={100}
      />

      <p>Error:</p>
      <DateInput
        className='extra-class'
        data-extra-attribute
        error='There is an error on this field.'
        id='date-input-error'
        label='Date'
        width={100}
      />

      <p>Disabled:</p>

      <DateInput disabled id='date-input-disabled' label='Date' width={100} />

      <h3>Date Picker</h3>

      <Type.BodyOne>
        WARNING: Input/change events don't yet work on{' '}
        <code>&lt;DatePicker&gt;</code>.
      </Type.BodyOne>

      <p>Normal:</p>
      <DatePicker
        className='extra-class'
        data-extra-attribute
        id='date-picker-normal'
        label='Date'
        onChange={this.handleDatePickerChange}
        value={this.state.datePickerValue}
        width={100}
      />

      <p>Error:</p>
      <DatePicker
        className='extra-class'
        data-extra-attribute
        error='There is an error on this field.'
        id='date-picker-error'
        label='Date'
        width={100}
      />

      <p>Disabled:</p>

      <DatePicker disabled id='date-picker-disabled' label='Date' width={100} />
    </div>
  );

  renderMonetaryInputs = () => (
    <div id='monetary-inputs'>
      <h3>Monetary Input</h3>

      <p>Normal monetary input:</p>
      <MoneyInput
        className='extra-class'
        data-extra-attribute
        id='monetary-normal'
        label='Payment'
        onChange={this.handleMonetaryInputChange}
        value={this.state.monetaryInputValue}
      />

      <p>Monetary input with error:</p>
      <MoneyInput
        error='There is an error on this field.'
        id='monetary-error'
        label='Payment'
      />

      <p>Disabled monetary input:</p>
      <MoneyInput disabled id='monetary-disabled' label='Payment' />
    </div>
  );

  renderSelects = () => {
    const options = [
      { value: 34, text: 'First val' },
      { value: 34, text: 'Second val' }
    ]

    return (
      <div id='selects'>
        <h3>Select:</h3>

        <Select
          className='extra-class'
          data-extra-attribute
          id='select-normal'
          label='Select Label'
          options={options}
          width={100}
        />
      </div>
    )
  };

  renderSsns = () => (
    <div id='ssn-inputs'>
      <h3>SSN Inputs</h3>

      <p>Normal SSN input:</p>
      <SsnInput
        className='extra-class'
        data-extra-attribute
        id='ssn-normal'
        onChange={this.handleSsnInputChange}
        value={this.state.ssnInputValue}
        error
      />

      <p>SSN input with error:</p>
      <SsnInput
        // className='extra-class'
        // data-extra-attribute
        error
        id='ssn-error'
      />

      <p>Disabled SSN input:</p>
      <SsnInput
        className='extra-class'
        data-extra-attribute
        disabled
        id='ssn-disabled'
      />

      <p>SSN input with helper text:</p>
      <SsnInput
        helper='helper text'
        id='ssn-helper'
      />
    </div>
  );

  renderTextInputs = () => (
    <div id='text-inputs'>
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
    </div>
  );

  renderTextAreas = () => (
    <div id='text-areas'>
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
    </div>
  );

  renderToc = () => (
    <>
      <h3>Table of Contents</h3>

      <List element='ul'>
        <li>
          <Link href='#text-inputs'>Text inputs</Link>
        </li>
        <li>
          <Link href='#checkboxes'>Checkboxes</Link>
        </li>
        <li>
          <Link href='#radios'>Radios</Link>
        </li>
        <li>
          <Link href='#selects'>Selects</Link>
        </li>
        <li>
          <Link href='#text-areas'>Text areas</Link>
        </li>
        <li>
          <Link href='#ssn-inputs'>SSN inputs</Link>
        </li>
        <li>
          <Link href='#monetary-inputs'>Monetary inputs</Link>
        </li>
        <li>
          <Link href='#date-inputs'>Date inputs</Link>
        </li>
        <li>
          <Link href='#password-inputs'>Password inputs</Link>
        </li>
        <li>
          <Link href='#phone-inputs'>Phone inputs</Link>
        </li>
      </List>
    </>
  );

  renderPasswords = () => (
    <div id='password-inputs'>
      <h3>Password inputs</h3>
      <p>Normal Password Field:</p>
      <PasswordInput id='password-input' name='password-normal' />

      <p>Disabled Password Field:</p>
      <PasswordInput
        disabled
        id='password-input-disabled'
        name='password-normal-disabled'
      />
    </div>
  );
  renderPhoneNumbers = () => (
    <div id='phone-inputs'>
      <h3>Phone inputs</h3>
      <p>Normal Phone Field</p>
      <br />
      <PhoneNumberInput
        id='phone-normal'
        name='phone-normal'
        label='Phone Number'
        value={this.state.phoneNumberInputValue}
        onChange={this.handlePhoneNumberInputChange}
      />
      <p>Disabled Phone Field</p>
      <br />
      <PhoneNumberInput
        disabled
        id='phone-disabled'
        name='phone-disabled'
        label='Phone Number'
      />
    </div>
  );

  render = () => (
    <>
      <h2>Inputs</h2>

      <Divider />
      {this.renderToc()}
      <Divider />

      {this.renderTextInputs()}
      {this.renderCheckboxes()}
      {this.renderRadios()}
      {this.renderSelects()}
      {this.renderTextAreas()}
      {this.renderSsns()}
      {this.renderMonetaryInputs()}
      {this.renderDateInputs()}
      {this.renderPasswords()}
      {this.renderPhoneNumbers()}
    </>
  );
}

export default Inputs
