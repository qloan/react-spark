import React from 'react';
import { Footer, Stack, Link, List, Divider, Toggle, Icon } from 'react-spark';

import logo from '../../assets/images/logo.png';

const FooterExample = () => (
  <div>
    <h2>Footer</h2>
    <br />

    <Footer id='footer' size='medium' padding='large'>
      <Stack itemSpacing='medium' splitAt='medium'>
        <Stack.Item
          breakpoint='medium'
          width='fourth'
          className='sprk-o-Stack sprk-o-Stack--large sprk-o-Box'
        >
          <h3 className='sprk-o-Stack__item sprk-b-TypeBodyOne sprk-u-TextTransform--uppercase'>
            OUR SISTER COMPANIES
          </h3>
          <Link href='#nogo' variant='plain'>
            <img src={logo} width='150' />
          </Link>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <br />
          <Link href='#nogo' variant='plain'>
            <img src={logo} width='150' />
          </Link>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <br />
          <Link href='#nogo' variant='plain'>
            <img src={logo} width='150' />
          </Link>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <br />
          <Link href='#nogo' variant='plain'>
            <img src={logo} width='150' />
          </Link>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <br />
        </Stack.Item>
        <Stack.Item
          breakpoint='medium'
          width='fourth'
          className='sprk-o-Stack sprk-o-Stack--large sprk-o-Box'
        >
          <h3 className='sprk-o-Stack__item sprk-b-TypeBodyOne sprk-u-TextTransform--uppercase'>
            MY COMPANY
          </h3>
          <List variant='bare' size='medium'>
            <li className='sprk-o-Stack__item'>
              <Link href='#nogo' variant='plain'>
                About Us
              </Link>
            </li>
            <li className='sprk-o-Stack__item'>
              <Link href='#nogo' variant='plain'>
                Talk To Us
              </Link>
            </li>
            <li className='sprk-o-Stack__item'>
              <Link href='#nogo' variant='plain'>
                FAQ
              </Link>
            </li>
          </List>
          <br />
          <h3 className='sprk-o-Stack__item sprk-b-TypeBodyOne sprk-u-TextTransform--uppercase'>
            CONNECT WITH US
          </h3>
          <List
            variant='bare'
            size='medium'
            className='sprk-o-Stack__item--flex@m sprk-o-Stack sprk-o-Stack--split@xxs'
          >
            <li className='sprk-o-Stack__item'>
              <Link href='#nogo' variant='plain'>
                <Icon name='facebook' size='l' />
              </Link>
            </li>
            <li className='sprk-o-Stack__item'>
              <Link href='#nogo' variant='plain'>
                <Icon name='instagram' size='l' />
              </Link>{' '}
            </li>
            <li className='sprk-o-Stack__item'>
              <Link href='#nogo' variant='plain'>
                <Icon name='twitter' size='l' />
              </Link>{' '}
            </li>
            <li className='sprk-o-Stack__item'>
              <Link href='#nogo' variant='plain'>
                <Icon name='feedback' size='l' />
              </Link>
            </li>
          </List>
        </Stack.Item>
        <Stack.Item
          breakpoint='medium'
          width='fourth'
          className='sprk-o-Stack sprk-o-Stack--large sprk-o-Box'
        >
          <h3 className='sprk-o-Stack__item sprk-b-TypeBodyOne sprk-u-TextTransform--uppercase'>
            EXTRA STUFF
          </h3>
          <List variant='bare' size='medium'>
            <li className='sprk-o-Stack__item'>
              <Link href='#nogo' variant='plain'>
                How To
              </Link>
            </li>
            <li className='sprk-o-Stack__item'>
              <Link href='#nogo' variant='plain'>
                Calculator
              </Link>
            </li>
            <li className='sprk-o-Stack__item'>
              <Link href='#nogo' variant='plain'>
                Fee Schedule
              </Link>
            </li>
          </List>
        </Stack.Item>
        <Stack.Item
          breakpoint='medium'
          width='fourth'
          className='sprk-o-Stack sprk-o-Stack--large sprk-o-Box'
        >
          <h3 className='sprk-o-Stack__item sprk-b-TypeBodyOne sprk-u-TextTransform--uppercase'>
            LEGAL
          </h3>
          <List variant='bare' size='medium'>
            <li className='sprk-o-Stack__item'>
              <Link href='#nogo' variant='plain'>
                Terms Of Use
              </Link>
            </li>
            <li className='sprk-o-Stack__item'>
              <Link href='#nogo' variant='plain'>
                Technology and Privacy
              </Link>
            </li>
            <li className='sprk-o-Stack__item'>
              <Link href='#nogo' variant='plain'>
                Disclosures and Licenses
              </Link>
            </li>
          </List>
        </Stack.Item>
      </Stack>
      <Stack>
        <Stack.Item className='sprk-o-Stack sprk-o-Stack--large sprk-o-Box'>
          <Divider />
          <Toggle id='disclaimerContainer'>
            <Toggle.Header>My Disclaimer</Toggle.Header>
            <Toggle.Content>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Toggle.Content>
          </Toggle>
        </Stack.Item>
      </Stack>
    </Footer>
  </div>
)

export default FooterExample
