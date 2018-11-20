import React from 'react'
import { Button, Table } from 'react-spark'

const Tables = () => (<>
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
          <Button variant={'secondary'}>Learn More</Button>
        </td>
      </tr>
    </tbody>
  </Table>
</>)

export default Tables
