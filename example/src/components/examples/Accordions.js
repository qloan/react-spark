import React from 'react'
import { Accordion, List, Type } from 'react-spark'

class Accordions extends React.Component {
  item1 = 'acc-1';
  item2 = 'acc-2';
  item3 = 'acc-3';

  render = () => (
    <>
      <h2>Accordions</h2>

      <Accordion className='extra-class' data-extra-attribute>
        <Accordion.Item>
          <Accordion.Header control={this.item1}>
            This is an accordion heading
          </Accordion.Header>
          <Accordion.Content id={this.item1}>
            <Type.BodyTwo>
              This is an example of multiple HTML elements used for the
              content in an accordion item.
            </Type.BodyTwo>
            <List variant='indented'>
              <li>List Item One</li>
              <li>List Item Two</li>
              <li>List Item Three</li>
            </List>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item className='extra-class' data-extra-attribute>
          <Accordion.Header
            className='extra-class'
            control={this.item2}
            data-extra-attribute
          >
            This is an accordion heading
          </Accordion.Header>
          <Accordion.Content
            className='extra-class'
            data-extra-attribute
            id={this.item2}
          >
            <Type.BodyTwo>
              This is an example of accordion content. This is an example of
              accordion content. This is an example of accordion content. This
              is an example of accordion content.
            </Type.BodyTwo>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header control={this.item3}>
            This is an accordion heading
          </Accordion.Header>
          <Accordion.Content id={this.item3}>
            <Type.BodyTwo>
              This is an example of accordion content. This is an example of
              accordion content. This is an example of accordion content. This
              is an example of accordion content.
            </Type.BodyTwo>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default Accordions
