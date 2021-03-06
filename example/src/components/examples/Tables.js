import React from 'react'
import { Button, Stack, Table } from 'react-spark'

const Tables = () => (<>
  <h1>Tables</h1>

  <p>Standard</p>
  <Table className='extra-class' data-extra-attribute>
    <thead>
      <tr>
        <th>Column Heading</th>
        <th>Column Heading</th>
        <th>Column Heading</th>
      </tr>
    </thead>
    <tbody>
      {[...Array(4).keys()].map(i => (
        <tr key={i}>
          {[...Array(3).keys()].map(j => (
            <td key={j}>Data {j + 1}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </Table>

  <p>Striped</p>
  <Table striped>
    <thead>
      <tr>
        <th>Column Heading</th>
        <th>Column Heading</th>
        <th>Column Heading</th>
      </tr>
    </thead>
    <tbody>
      {[...Array(4).keys()].map(i => (
        <tr key={i}>
          {[...Array(3).keys()].map(j => (
            <td key={j}>Data {j + 1}</td>
          ))}
        </tr>
      ))}
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
      {[...Array(4).keys()].map(i => (
        <tr key={i}>
          {[...Array(3).keys()].map(j => (
            <td key={j}>Data {j + 1}</td>
          ))}
        </tr>
      ))}
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
        <Table.Th
          className='extra-class'
          data-extra-attribute
          groupedColumn
        >
          SubHeading
        </Table.Th>
        <Table.Th groupedColumn>SubHeading</Table.Th>
        <Table.Th groupedColumn>SubHeading</Table.Th>
      </tr>
    </thead>
    <tbody>
      {[...Array(4).keys()].map(i => (
        <tr key={i}>
          {[...Array(5).keys()].map(j => (
            <td key={j}>Data {j + 1}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </Table>

  <p>Row comparison</p>
  <Table variant='row-comparison'>
    <thead>
      <tr>
        <Table.Th className='extra-class' data-extra-attribute empty />
        <th>Column Heading</th>
        <th>Column Heading</th>
        <th>Column Heading</th>
      </tr>
    </thead>
    <tbody>
      {[...Array(4).keys()].map(i => (
        <tr key={i}>
          <th>Row Heading</th>
          {[...Array(3).keys()].map(j => (
            <td key={j}>Data {j + 1}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </Table>

  <p>Secondary row comparison</p>
  <Table variant='secondary-row-comparison'>
    <tbody>
      {[...Array(4).keys()].map(i => (
        <tr key={i}>
          <th>Row Heading</th>
          <td>Data</td>
          <td>Data</td>
          <td>
            <Stack endColumn>
              <Stack.Item>
                <Button variant='secondary'>Learn More</Button>
              </Stack.Item>
            </Stack>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
</>)

export default Tables
