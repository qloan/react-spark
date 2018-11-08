import React, { Component } from 'react'

import { Button, Link, Table } from 'react-spark'

import './App.scss'

export default class App extends Component {
  renderButtons = () => (<>
    <p>Default:</p>
    <Button>Default</Button>

    <p>Secondary:</p>
    <Button type={'secondary'}>Secondary</Button>

    <p>Secondary:</p>
    <Button type={'tertiary'}>Tertiary</Button>

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

  renderLinks = () => (<>
    <p>Inline:</p>
    <Link href='#nogo'>Inline</Link>

    <p>Standalone:</p>
    <Link href='#nogo' type='standalone'>Standalone</Link>

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
    <Table type='secondary'>
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
    <Table type='grouped-columns'>
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
    <Table type='row-comparison'>
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
    <Table type='secondary-row-comparison'>
      <tbody>
        <tr>
          <th>Row Heading</th>
          <td>Data</td>
          <td>Data</td>
          <td>
            <Button type='secondary'>Learn More</Button>
          </td>
        </tr>
        <tr>
          <th>Row Heading</th>
          <td>Data</td>
          <td>Data</td>
          <td>
            <Button type='secondary'>Learn More</Button>
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
    </>)
  }
}
