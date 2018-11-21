import React from 'react';
import { Accordion } from 'react-spark';

const acc1 = 'acc-1';
const acc2 = 'acc-2';

const Accordions = () => (
  <>
    <h2>Accordions</h2>

    <Accordion>
      {/* Test */}
      <Accordion.Item>
        <Accordion.Header control={acc1}>Header</Accordion.Header>
        <Accordion.Content id={acc1}>Content</Accordion.Content>
      </Accordion.Item>

      <Accordion.Item>
        <Accordion.Header control={acc2}>Header 2</Accordion.Header>
        <Accordion.Content id={acc2}>Content 2</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  </>
)

export default Accordions
