import React from 'react'
import { Icon, Link, Stack, Type } from 'react-spark'

const Links = () => (
  <Stack itemSpacing='large'>
    <Stack.Item>
      <Type.DisplayOne>Links</Type.DisplayOne>
    </Stack.Item>

    <Stack.Item>
      <Type.DisplayThree>Base Link</Type.DisplayThree>
      <Link
        className='extra-class'
        data-extra-attribute
        href='#'
      >
        Base Link
      </Link>
    </Stack.Item>

    <Stack.Item>
      <Type.DisplayThree>Simple Link</Type.DisplayThree>
      <Link href='#' variant='simple'>Simple Link</Link>
    </Stack.Item>

    <Stack.Item>
      <Type.DisplayThree>Icon with Text Link</Type.DisplayThree>
      <Link
        className='sprk-u-mrs'
        hasIcon
        href='#'
        variant='simple'
      >
        <Icon name='communication' size='l' />
        Message Us
      </Link>
    </Stack.Item>

    <Stack.Item>
      <Type.DisplayThree>Disabled</Type.DisplayThree>
      <Link href='#' disabled>Disabled</Link>
    </Stack.Item>
  </Stack>
)

export default Links
