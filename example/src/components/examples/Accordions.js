import React from 'react'
import { Accordion } from 'react-spark'
// import SparkSVGs from './../../assets/images/D-SparkCoreIcons.svg'

const item1 = 'acc-1'
const item2 = 'acc-2'
const item3 = 'acc-3'
const item4 = 'acc-2'

const Accordions = () => (
  <>
    <h2>Accordions</h2>

    {/* <p>full width</p>
    <Accordion >
      <Accordion.Item>
        <Accordion.Header control={item1}>
          <h3>Header</h3>
        </Accordion.Header>
        <Accordion.Content id={item1}>Content</Accordion.Content>
      </Accordion.Item>

      <Accordion.Item>
        <Accordion.Header control={item2}>
          <h3>Header 2</h3>
        </Accordion.Header>
        <Accordion.Content id={item2}>Content 2</Accordion.Content>
      </Accordion.Item>
    </Accordion> */}

    <h5>With Padding</h5>
    <Accordion padding >
      <Accordion.Item>
        <Accordion.Header control={item3}>
          <h3>Header</h3>
        </Accordion.Header>
        <Accordion.Content id={item3}>Content</Accordion.Content>
      </Accordion.Item>

      <Accordion.Item>
        <Accordion.Header control={item4}>
          <h3>Header 2</h3>
        </Accordion.Header>
        <Accordion.Content id={item4}>Content 2</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  </>
)

export default Accordions
