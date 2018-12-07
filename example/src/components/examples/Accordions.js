import React from 'react';
import { Accordion } from 'react-spark';

class Accordions extends React.Component {
  item1 = 'acc-1';
  item2 = 'acc-2';
  item3 = 'acc-2';
  item4 = 'acc-3';

  render = () => (
    <>
      <h2>Accordions</h2>

      <Accordion padding className='extra-class' data-extra-attribute>
        <Accordion.Item className='extra-class' data-extra-attribute>
          <Accordion.Header
            className='extra-class'
            control={this.item1}
            data-extra-attribute
          >
            <h3>Header</h3>
          </Accordion.Header>
          <Accordion.Content
            className='extra-class'
            data-extra-attribute
            id={this.item1}
          >
            Content
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Header control={this.item2}>
            <h3>Header 2</h3>
          </Accordion.Header>
          <Accordion.Content id={this.item2}>Content 2</Accordion.Content>
        </Accordion.Item>
      </Accordion>
      <br />
      <br />
      <Accordion padding className='extra-class' data-extra-attribute>
        <Accordion.Item className='extra-class' data-extra-attribute>
          <Accordion.Header
            className='extra-class'
            control={this.item3}
            data-extra-attribute
          >
            <h3>Header</h3>
          </Accordion.Header>
          <Accordion.Content
            className='extra-class'
            data-extra-attribute
            id={this.item3}
          >
            Content
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Header control={this.item4}>
            <h3>Header 2</h3>
          </Accordion.Header>
          <Accordion.Content id={this.item4}>Content 2</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default Accordions
