import React from 'react'
import { Button, Card, Icon, Link, Stack, Type } from 'react-spark'

import img from '../../assets/images/desktop.jpg'

class Cards extends React.Component {
  renderImg = () => <img alt='Spark placeholder' src={img} />

  renderFourUpTeaser = () => (
    <Card>
      <Card.Content>
        <Stack itemSpacing='large'>
          <Stack.Item>
            <Type.DisplaySix>Card Title</Type.DisplaySix>
          </Stack.Item>
          <Stack.Item>
            <Type.BodyTwo>
              Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi
              perpetua.
            </Type.BodyTwo>
          </Stack.Item>
          <Stack.Item>
            <Button>Button</Button>
          </Stack.Item>
        </Stack>
      </Card.Content>
    </Card>
  )

  renderHighlightedHeader = () => (
    <Card>
      <Card.Header>
        <Stack itemSpacing='medium'>
          <Stack.Item>
            <Type.DisplaySeven className='sprk-u-Color--white'>
              Description
            </Type.DisplaySeven>
          </Stack.Item>
          <Stack.Item>
            <Type.DisplayFive className='sprk-u-Color--white'>
              Card Title
            </Type.DisplayFive>
          </Stack.Item>
        </Stack>
      </Card.Header>
      <Card.Content>
        <Type.BodyTwo>
          Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi perpetua
          an pri, errem commune mea at, mei prima tantas signiferumque at.
          Numquam.
        </Type.BodyTwo>
      </Card.Content>
    </Card>
  )

  renderTeaser = () => (
    <Card
      imgAlt='Spark placeholder'
      imgSrc={img}
    >
      <Card.Content>
        <Stack itemSpacing='large'>
          <Stack.Item>
            <Type.DisplayFive>Title</Type.DisplayFive>
          </Stack.Item>
          <Stack.Item>
            <Type.BodyTwo>
              Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
              perpetua an pri, errem commune mea at, mei prima tantas
              signiferumque at. Numquam.
            </Type.BodyTwo>
          </Stack.Item>
          <Stack.Item>
            <Button href='#'>Learn More</Button>
          </Stack.Item></Stack>
      </Card.Content>
    </Card>
  )

  renderTeaserWithDifferentOrder = () => (
    <Card>
      <Card.Content>
        <Type.DisplayFive>Title</Type.DisplayFive>
      </Card.Content>
      {this.renderImg()}
      <Card.Content>
        <Stack itemSpacing='large'>
          <Stack.Item>
            <Type.BodyTwo>
              Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
              perpetua
              an pri, errem commune mea at, mei prima tantas signiferumque at.
              Numquam.
            </Type.BodyTwo>
          </Stack.Item>
          <Stack.Item>
            <Button href='#'>Learn More</Button>
          </Stack.Item>
        </Stack>
      </Card.Content>
    </Card>
  )

  renderThreeUpTeaser = () => (
    <Card>
      <Card.Content>
        <Stack className='sprk-u-TextAlign--center' itemSpacing='large'>
          <Stack.Item className='sprk-u-AbsoluteCenter'>
            <Icon name='call-team-member' size='xxl' />
          </Stack.Item>
          <Stack.Item>
            <Type.DisplayFive>Icon Title</Type.DisplayFive>
          </Stack.Item>
          <Stack.Item>
            <Type.BodyTwo>
              Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi
              perpetua an pri, errem communemea at, mei prima tantas
              signiferumque at.
            </Type.BodyTwo>
          </Stack.Item>
          <Stack.Item>
            <Link hasIcon href='#' variant='simple'>
              Learn More
              <Icon name='chevron-right' />
            </Link>
          </Stack.Item>
        </Stack>
      </Card.Content>
    </Card>
  )

  renderTwoUpTeaser = () => (
    <Card
      imgAlt='Spark placeholder'
      imgSrc={img}
    >
      <Card.Content>
        <Stack itemSpacing='large'>
          <Stack.Item>
            <Type.DisplayFive>Title</Type.DisplayFive>
          </Stack.Item>
          <Stack.Item>
            <Type.BodyTwo>
              Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
              perpetua an pri, errem commune mea at, mei prima tantas
              signiferumque at. Numquam.
            </Type.BodyTwo>
          </Stack.Item>
          <Stack.Item>
            <Link hasIcon href='#' variant='simple'>
              Learn More
              <Icon name='chevron-right' />
            </Link>
          </Stack.Item>
        </Stack>
      </Card.Content>
    </Card>
  )

  render = () => (
    <Stack itemSpacing='large'>
      <Stack.Item>
        <Type.DisplayTwo>Cards</Type.DisplayTwo>
      </Stack.Item>

      <Stack.Item>
        <Type.DisplayThree>Base</Type.DisplayThree>
        <Card className='extra-class' data-extra-attribute>
          <Card.Content className='extra-class' data-extra-attribute />
        </Card>
      </Stack.Item>

      <Stack.Item>
        <Type.DisplayThree>Standout</Type.DisplayThree>
        <Card standout>
          <Card.Content />
        </Card>
      </Stack.Item>

      <Stack.Item>
        <Type.DisplayThree>Highlighted header</Type.DisplayThree>
        {this.renderHighlightedHeader()}
      </Stack.Item>

      <Stack.Item>
        <Type.DisplayThree>Teaser</Type.DisplayThree>
        {this.renderTeaser()}
      </Stack.Item>

      <Stack.Item>
        <Type.DisplayThree>
          Teaser with different element order
        </Type.DisplayThree>
        {this.renderTeaserWithDifferentOrder()}
      </Stack.Item>

      <Stack.Item>
        <Type.DisplayThree>Card layout - two up</Type.DisplayThree>
        <Stack itemSpacing='large' splitAt='large'>
          {[0, 1].map(i => (
            <Stack.Item breakpoint='large' key={i} width='flex'>
              {this.renderTwoUpTeaser()}
            </Stack.Item>
          ))}
        </Stack>
      </Stack.Item>

      <Stack.Item>
        <Type.DisplayThree>Card layout - three up</Type.DisplayThree>
        <Stack itemSpacing='large' splitAt='large'>
          {[0, 1, 2].map(i => (
            <Stack.Item breakpoint='large' key={i} width='flex'>
              {this.renderThreeUpTeaser()}
            </Stack.Item>
          ))}
        </Stack>
      </Stack.Item>

      <Stack.Item>
        <Type.DisplayThree>Card layout - four up</Type.DisplayThree>
        <Stack itemSpacing='large' splitAt='huge'>
          {[0, 1, 2, 3].map(i => (
            <Stack.Item breakpoint='huge' key={i} width='flex'>
              {this.renderFourUpTeaser()}
            </Stack.Item>
          ))}
        </Stack>
      </Stack.Item>
    </Stack>
  )
}

export default Cards
