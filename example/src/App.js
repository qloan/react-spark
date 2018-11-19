/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import {
  Button,
  Dictionary,
  CheckboxGroup,
  TextInput,
  Link,
  Table,
  Select,
  Masthead,
  Alert,
  Modal
} from 'react-spark';

import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spin: false,
      showModal: false
    }
  }
  renderButtons() {
    return (
      <>
        <p>Default:</p>
        <Button>Default</Button>

        <p>Secondary:</p>
        <Button variant={'secondary'}>Secondary</Button>

        <p>Secondary:</p>
        <Button variant={'tertiary'}>Tertiary</Button>

        <p>Disabled:</p>
        <Button disabled>Disabled</Button>

        <p>Spinner:</p>
        <button
          onClick={() => {
            this.setState({ spin: !this.state.spin })
          }}
        >
          spin
        </button>
        <Button spinner={this.state.spin}>Spinner</Button>

        <p>Full Width at Small Viewport:</p>
        <Button
          fullWidthAtSmallViewport
          onClick={() => console.log('full-width button clicked')}
        >
          Button
        </Button>
      </>
    )
  }

  renderDictionaries = () => (
    <>
      <p>Standard</p>
      <Dictionary>
        <Dictionary.Item
          itemKey={'Email Address'}
          itemValue={'sparkdesignsystem@quickenloans.com'}
        />
        <Dictionary.Item
          itemKey={'Mailing Address'}
          itemValue={'123 Main Street, Detroit, MI, 48216'}
        />
        <Dictionary.Item itemKey={'Home Phone'} itemValue={'(123) 456-7890'} />
        <Dictionary.Item itemKey={'Cell Phone'} itemValue={'(098) 765-4321'} />
        <Dictionary.Item itemKey={'Work Phone'} itemValue={'(555) 555-5555'} />
        <Dictionary.Item itemKey={'Work Extension'} itemValue={'55555'} />
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
        <Dictionary.Item itemKey={'Home Phone'} itemValue={'(123) 456-7890'} />
        <Dictionary.Item itemKey={'Cell Phone'} itemValue={'(098) 765-4321'} />
        <Dictionary.Item itemKey={'Work Phone'} itemValue={'(555) 555-5555'} />
        <Dictionary.Item itemKey={'Work Extension'} itemValue={'55555'} />
      </Dictionary>
    </>
  );

  renderSelect = () => {
    const options = [
      { value: 34, text: 'First val' },
      { value: 34, text: 'Second val' }
    ]
    return (
      <div>
        <h3>Select:</h3>

        <Select
          id='select-normal'
          label='Select Label'
          width={100}
          options={options}
        />
      </div>
    )
  };

  renderInputs = () => (
    <>
      <h3>Text inputs</h3>

      <p>Text input:</p>
      <TextInput id='text-input-normal' label='Text Input Label' width={100} />

      <p>Text input with error:</p>
      <TextInput
        error={'There is an error on this field.'}
        id='text-input-error'
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

      <h3>Checkbox Group</h3>
      <p>Normal checkbox group:</p>
      <CheckboxGroup
        checkboxes={[
          { id: 'checkbox-normal-1', label: 'Checkbox Item 1' },
          { id: 'checkbox-normal-2', label: 'Checkbox Item 2' },
          { id: 'checkbox-normal-3', label: 'Checkbox Item 3' }
        ]}
        id={'checkbox-normal'}
        label='Checkbox Group Label'
      />

      <p>Checkbox group with error:</p>
      <CheckboxGroup
        checkboxes={[
          { id: 'checkbox-error-1', label: 'Checkbox Item 1' },
          { id: 'checkbox-error-2', label: 'Checkbox Item 2' },
          { id: 'checkbox-error-3', label: 'Checkbox Item 3' }
        ]}
        error='There is an error on this field.'
        id={'checkbox-error'}
        label='Checkbox Group Label'
      />

      <p>Disabled checkbox group:</p>
      <CheckboxGroup
        checkboxes={[
          { id: 'checkbox-disabled-1', label: 'Checkbox Item 1' },
          { id: 'checkbox-disabled-2', label: 'Checkbox Item 2' },
          { id: 'checkbox-disabled-3', label: 'Checkbox Item 3' }
        ]}
        disabled
        id={'checkbox-disabled'}
        label='Checkbox Group Label'
      />
    </>
  );

  renderLinks = () => (
    <>
      <p>Inline:</p>
      <Link href='#nogo'>Inline</Link>

      <p>Standalone:</p>
      <Link href='#nogo' variant='standalone'>
        Standalone
      </Link>

      <p>Disabled:</p>
      <Link href='#nogo' disabled>
        Disabled
      </Link>
    </>
  );

  renderTables = () => (
    <>
      <p>Standard</p>
      <Table>
        <thead>
          <tr>
            <th>Column Heading</th>
            <th>Column Heading</th>
            <th>Column Heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
        </tbody>
      </Table>

      <p>Standard, striped</p>
      <Table striped>
        <thead>
          <tr>
            <th>Column Heading</th>
            <th>Column Heading</th>
            <th>Column Heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
        </tbody>
      </Table>

      <p>Secondary</p>
      <Table variant='secondary'>
        <thead>
          <tr>
            <th>Column Heading</th>
            <th>Column Heading</th>
            <th>Column Heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
        </tbody>
      </Table>

      <p>Grouped columns</p>
      <Table variant='grouped-columns'>
        <thead>
          <tr>
            <th rowSpan='2'>Column Heading</th>
            <th colSpan='3'>Column Heading</th>
            <th rowSpan='2'>Column Heading</th>
          </tr>
          <tr>
            <Table.GroupedColumn>SubHeading</Table.GroupedColumn>
            <Table.GroupedColumn>SubHeading</Table.GroupedColumn>
            <Table.GroupedColumn>SubHeading</Table.GroupedColumn>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 4</td>
            <td>Data 5</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 4</td>
            <td>Data 5</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 4</td>
            <td>Data 5</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 4</td>
            <td>Data 5</td>
          </tr>
        </tbody>
      </Table>

      <p>Row comparison</p>
      <Table variant='row-comparison'>
        <thead>
          <tr>
            <Table.Th empty />
            <th>Column Heading</th>
            <th>Column Heading</th>
            <th>Column Heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Row Heading</th>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <th>Row Heading</th>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <th>Row Heading</th>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <th>Row Heading</th>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
        </tbody>
      </Table>

      <p>Secondary row comparison</p>
      <Table variant='secondary-row-comparison'>
        <tbody>
          <tr>
            <th>Row Heading</th>
            <td>Data</td>
            <td>Data</td>
            <td>
              <Button variant='secondary'>Learn More</Button>
            </td>
          </tr>
          <tr>
            <th>Row Heading</th>
            <td>Data</td>
            <td>Data</td>
            <td>
              <Button variant='secondary'>Learn More</Button>
            </td>
          </tr>
          <tr>
            <th>Row Heading</th>
            <td>Data</td>
            <td>Data</td>
            <td>
              <button
                className='sprk-c-Button sprk-c-Button--secondary'
                type='button'
              >
                Learn More
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );

  renderMasthead = () => {
    return (
      <div>
        <h3>Masthead:</h3>
        <Masthead
          id='main-nav'
          logoHref='#nogo'
          logoPath='https://seeklogo.com/images/G/generic-logo-EE8C8E244E-seeklogo.com.png'
          links={[
            { title: 'Personal Loans', href: '#nogog' },
            { title: 'About Us', href: '#sdfg' },
            { title: 'Reviews', href: '#dfg' },
            { title: 'Sign In', href: '#dfg', button: true },
            {
              title: 'See My Options',
              href: '#dgjrty',
              button: true,
              callToAction: true
            }
          ]}
        />
      </div>
    )
  };
  renderAlerts = () => (
    <>
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
    </>
  );

  renderModals() {
    return (
      <div>
        <p>Choice:</p>
        <button
          className='sprk-c-Button'
          type='button'
          onClick={() => {
            this.setState({ showModal: !this.state.showModal })
          }}
        >
          Open Choice Modal
        </button>
        <Modal type='choice' show={this.state.showModal}>
          This is some content that is in a Modal. There will also be a way to
          close the modal.
        </Modal>

        <p>Info:</p>
        <button
          className='sprk-c-Button'
          type='button'
          onClick={() => {
            this.setState({ showModal: !this.state.showModal })
          }}
        >
          Open Info Modal
        </button>
        <Modal modalType='info' show={this.state.showModal}>
          This is some content for info Modal. There will also be a way to close
          the modal.
        </Modal>

        <p>Wait:</p>
        <button
          className='sprk-c-Button'
          type='button'
          onClick={() => {
            this.setState({ showModal: !this.state.showModal })
          }}
        >
          Open Wait Modal
        </button>
        <Modal modalType='wait' show={this.state.showModal}>
          This type of modal can't be closed by the user but will close shortly
          for demonstration purposes.
        </Modal>
      </div>
    )
  }

  render() {
    return (
      <div className='sprk-o-Box'>
        <h1>React Spark</h1>
        <hr />

        <h2>Navs</h2>
        {this.renderMasthead()}

        <hr />

        <h2>Inputs</h2>
        {this.renderSelect()}
        {this.renderInputs()}
        <hr />

        <h2>Button</h2>
        {this.renderButtons()}
        <hr />

        <h2>Link</h2>
        {this.renderLinks()}
        <hr />

        <h2>Tables</h2>
        {this.renderTables()}
        <hr />

        <h2>Dictionaries</h2>
        {this.renderDictionaries()}

        <hr />

        <h2>Inputs</h2>
        {this.renderInputs()}

        <hr />

        <h2>Alerts</h2>
        {this.renderAlerts()}

        <hr />

        <h2>Modals</h2>
        {this.renderModals()}
      </div>
    )
  }
}
