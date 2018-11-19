import React from 'react'
import { Button, Card, Link, Stack } from 'react-spark'

import img from '../../assets/images/card-img.jpg'

class Cards extends React.Component {
  renderImg = () => <img alt='Spark placeholder' src={img} />

  renderFourUpTeaser = () => (
    <Card>
      <Stack>
        <Stack.Item>
          <a href='#nogo'>
            {this.renderImg()}
          </a>
        </Stack.Item>
        <Stack.Item>
          <Card.Content>
            <Stack>
              <Stack.Item>
                <h4 className='sprk-b-TypeDisplaySix sprk-o-Stack__item'>
                  Title!
                </h4>
              </Stack.Item>
              <Stack.Item>
                <p className='sprk-b-TypeBodyTwo sprk-o-Stack__item'>
                  Placeholder text.
                </p>
              </Stack.Item>
              <Stack.Item>
                <Button>Button</Button>
              </Stack.Item>
            </Stack>
          </Card.Content>
        </Stack.Item>
      </Stack>
    </Card>
  )

  renderTeaser = () => (
    <Card>
      <Stack.Item>{this.renderImg()}</Stack.Item>
      <Card.Content>
        <Stack.Item>
          <h3 className='sprk-b-TypeDisplayFive'>Title</h3>
        </Stack.Item>
        <Stack.Item>
          <p className='sprk-b-TypeBodyTwo'>
            Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
            perpetua an pri, errem commune mea at, mei prima tantas
            signiferumque at. Numquam.
          </p>
        </Stack.Item>
        <Stack.Item>
          <a href='#nogo' className='sprk-c-Button'>Learn More</a>
        </Stack.Item>
      </Card.Content>
    </Card>
  )

  renderTeaserWithDifferentOrder = () => (
    <Card>
      <Card.Content>
        <div className='sprk-o-Stack__item'>
          <h3 className='sprk-b-TypeDisplayFive'>Title</h3>
        </div>
      </Card.Content>
      <div className='sprk-o-Stack__item'>{this.renderImg()}</div>
      <Card.Content>
        <div className='sprk-o-Stack__item'>
          <p className='sprk-b-TypeBodyTwo'>
            Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
            perpetua an pri, errem commune mea at, mei prima tantas
            signiferumque at. Numquam.
          </p>
        </div>
        <div className='sprk-o-Stack__item'>
          <a href='#nogo' className='sprk-c-Button'>Learn More</a>
        </div>
      </Card.Content>
    </Card>
  )

  renderThreeUpTeaser = () => (
    <Card>
      <Card.Content>
        <Stack>
          <Stack.Item>
            <h3 className='sprk-b-TypeDisplayFive'>Icons</h3>
          </Stack.Item>
          <Stack.Item>
            <p className='sprk-b-TypeBodyTwo'>
              A useful piece of a Design System.
            </p>
          </Stack.Item>
          <Stack.Item>
            <Link href='#nogo' variant='plain'>Learn More</Link>
          </Stack.Item>
        </Stack>
      </Card.Content>
    </Card>
  )

  renderTwoUpTeaser = () => (
    <Card>
      <Stack.Item>{this.renderImg()}</Stack.Item>
      <Card.Content>
        <Stack.Item>
          <h3 className='sprk-b-TypeDisplayFive'>Title</h3>
        </Stack.Item>
        <Stack.Item>
          <p className='sprk-b-TypeBodyTwo'>
            Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
            perpetua an pri, errem commune mea at, mei prima tantas
            signiferumque at. Numquam.
          </p>
        </Stack.Item>
        <Stack.Item>
          <Link variant='plain'>Learn More</Link>
        </Stack.Item>
      </Card.Content>
    </Card>
  )

  render = () => (<>
    <h2>Cards</h2>

    <p>Base:</p>
    <Card>
      <Card.Content />
    </Card>

    <p>Teaser:</p>
    {this.renderTeaser()}

    <p>Teaser with different element order:</p>
    {this.renderTeaserWithDifferentOrder()}

    <p>Card layout - two up:</p>
    <Stack itemSpacing='large' splitAt='large'>
      {[0, 1].map(i => (
        <Stack.Item breakpoint='large' key={i} width='flex'>
          {this.renderTwoUpTeaser()}
        </Stack.Item>
      ))}
    </Stack>

    <p>Card layout - three up:</p>
    <Stack itemSpacing='large' splitAt='large'>
      {[0, 1, 2].map(i => (
        <Stack.Item breakpoint='large' key={i} width='flex'>
          {this.renderThreeUpTeaser()}
        </Stack.Item>
      ))}
    </Stack>

    <p>Card layout - four up:</p>
    <Stack itemSpacing='large' splitAt='huge'>
      {[0, 1, 2, 3].map(i => (
        <Stack.Item breakpoint='huge' key={i} width='flex'>
          {this.renderFourUpTeaser()}
        </Stack.Item>
      ))}
    </Stack>
  </>)
}

export default Cards
