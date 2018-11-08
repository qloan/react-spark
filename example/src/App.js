import React, { Component } from 'react'
import {
  Button,
  Dictionary,
  TextInput,
  InputContainer,
  Link,
  Table
} from 'react-spark'

import './App.scss'

export default class App extends Component {
  renderButtons = () => (<>
    <p>Default:</p>
    <Button>Default</Button>

    <p>Secondary:</p>
    <Button variant={'secondary'}>Secondary</Button>

    <p>Secondary:</p>
    <Button variant={'tertiary'}>Tertiary</Button>

    <p>Disabled:</p>
    <Button disabled>Disabled</Button>

    <p>Spinner:</p>
    <Button spinner>Spinner</Button>

    <p>Full Width at Small Viewport:</p>
    <Button
      fullWidthAtSmallViewport
      onClick={() => console.log('full-width button clicked')}
    >
      Button
    </Button>
  </>)

  renderDictionaries = () => (<>
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

  renderInputs = () => (<>
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

  renderLinks = () => (<>
    <p>Inline:</p>
    <Link href='#nogo'>Inline</Link>

    <p>Standalone:</p>
    <Link href='#nogo' variant='standalone'>Standalone</Link>

    <p>Disabled:</p>
    <Link href='#nogo' disabled>Disabled</Link>
  </>)

  renderTables = () => (<>
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
            <button className='sprk-c-Button sprk-c-Button--secondary' type='button'>Learn
              More
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  </>)

  render = () => {
    return (<>
      <h1>React Spark</h1>

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

      <h2>Inputs</h2>
      {this.renderInputs()}
    </>)
  }
}
