import React from 'react';
import { Accordion } from 'react-spark';
// import SparkSVGs from './../../assets/images/D-SparkCoreIcons.svg'

const item1 = 'acc-1';
const item2 = 'acc-2';

const Accordions = () => (
  <>
    <h2>Accordions</h2>

    <p>full width</p>
    <Accordion>
      <Accordion.Item>
        <Accordion.Header control={item1} id='head1'>
          <h3>Header</h3>
        </Accordion.Header>
        <Accordion.Content id={item1}>Content</Accordion.Content>
      </Accordion.Item>

      <Accordion.Item>
        <Accordion.Header control={item2} id='head2'>
          <h3>Header 2</h3>
        </Accordion.Header>
        <Accordion.Content id={item2}>Content 2</Accordion.Content>
      </Accordion.Item>
    </Accordion>

    <p>padding</p>
    <Accordion padding>
      <Accordion.Item>
        <Accordion.Header control={item1} id='head1'>
          <h3>Header</h3>
        </Accordion.Header>
        <Accordion.Content id={item1}>Content</Accordion.Content>
      </Accordion.Item>

      <Accordion.Item>
        <Accordion.Header control={item2} id='head2'>
          <h3>Header 2</h3>
        </Accordion.Header>
        <Accordion.Content id={item2}>Content 2</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  </>
)

export default Accordions
