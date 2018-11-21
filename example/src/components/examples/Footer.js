import React from 'react'
import { Footer, Stack, Link, Divider, Accordion } from 'react-spark'

const FooterExample = () => (
  <>
    <h2>Footer</h2>
    <br />
    <Footer id='footer' size='medium'>
      <Stack splitAt='tiny'>
        <Stack.Item breakpoint='tiny' width='third'>
          <Stack.Item>
            <h6>COMPANY NAME</h6>
            <br />
          </Stack.Item>
        </Stack.Item>
        <Stack.Item breakpoint='tiny' width='third'>
          <Stack.Item>
            <h6>OUR PRODUCTS</h6>
          </Stack.Item>
        </Stack.Item>
        <Stack.Item breakpoint='tiny' width='third'>
          <Stack.Item>
            <h6>MORE PRODUCTS</h6>
          </Stack.Item>
        </Stack.Item>
      </Stack>
      <Stack centerColumn splitAt='tiny'>
        <Stack.Item breakpoint='tiny' width='third'>
          <Stack.Item>
            <Link href='#nogo'>Link 1</Link>
          </Stack.Item>
          <Stack.Item>
            <Link href='#nogo'>Link 2</Link>
          </Stack.Item>
          <Stack.Item>
            <Link href='#nogo'>Link 3</Link>
          </Stack.Item>
        </Stack.Item>
        <Stack.Item breakpoint='tiny' width='third'>
          <Stack.Item>
            <Link href='#nogo'>Product 1</Link>
          </Stack.Item>
          <Stack.Item>
            <Link href='#nogo'>Product 2</Link>
          </Stack.Item>
        </Stack.Item>
        <Stack.Item breakpoint='tiny' width='third'>
          <Stack.Item>
            <Link href='#nogo'>Product 4</Link>
          </Stack.Item>
        </Stack.Item>
      </Stack>

      <Stack>
        <Stack.Item>
          <Divider />
        </Stack.Item>
      </Stack>

      <Stack endColumn>
        <Stack.Item>
          <Link href='#nogo'>FB</Link>
          <Link href='#nogo'>IG</Link>
          <Link href='#nogo'>TW</Link>
          <Link href='#nogo'>YT</Link>
        </Stack.Item>
      </Stack>

      <Stack beginColumn>
        <Stack.Item>
          <Accordion>
            <Accordion.Item>
              <Accordion.Header control='disclamer'>
                <h6>DISCLAMER</h6>
              </Accordion.Header>
              <Accordion.Content id='disclamer'>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </Stack.Item>
      </Stack>
    </Footer>
  </>
)

export default FooterExample
