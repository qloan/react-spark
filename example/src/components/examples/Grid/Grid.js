import React from 'react'
import { Stack } from 'react-spark'

import './Grid.scss'

const Grid = () => (
  <div className='react-spark-grid-examples'>
    <h2>Grid</h2>

    <p>Stack:</p>
    <Stack>
      <Stack.Item />
      <Stack.Item />
    </Stack>

    <p>Center column:</p>
    <Stack centerColumn>
      <Stack.Item />
      <Stack.Item />
    </Stack>

    <p>Center row:</p>
    <Stack centerRow>
      <Stack.Item />
      <Stack.Item />
    </Stack>

    <p>With item spacing:</p>
    <Stack itemSpacing='medium'>
      <Stack.Item />
      <Stack.Item />
    </Stack>

    <p>With splitAt:</p>
    <Stack splitAt='medium'>
      <Stack.Item />
      <Stack.Item />
    </Stack>

    <p>End column:</p>
    <Stack endColumn>
      <Stack.Item />
      <Stack.Item />
    </Stack>

    <p>End row:</p>
    <Stack endRow>
      <Stack.Item />
      <Stack.Item />
    </Stack>

    <p>Two-column layout:</p>
    <Stack splitAt='tiny'>
      <Stack.Item breakpoint='tiny' width='half' />
      <Stack.Item breakpoint='tiny' width='half' />
    </Stack>

    <p>Three-column layout:</p>
    <Stack splitAt='tiny'>
      <Stack.Item breakpoint='tiny' width='third' />
      <Stack.Item breakpoint='tiny' width='third' />
      <Stack.Item breakpoint='tiny' width='third' />
    </Stack>

    <p>Four-column layout:</p>
    <Stack splitAt='tiny'>
      <Stack.Item breakpoint='tiny' width='fourth' />
      <Stack.Item breakpoint='tiny' width='fourth' />
      <Stack.Item breakpoint='tiny' width='fourth' />
      <Stack.Item breakpoint='tiny' width='fourth' />
    </Stack>

    <p>Five-column layout:</p>
    <Stack splitAt='tiny'>
      <Stack.Item breakpoint='tiny' width='fifth' />
      <Stack.Item breakpoint='tiny' width='fifth' />
      <Stack.Item breakpoint='tiny' width='fifth' />
      <Stack.Item breakpoint='tiny' width='fifth' />
      <Stack.Item breakpoint='tiny' width='fifth' />
    </Stack>

    <p>Six-column layout:</p>
    <Stack splitAt='tiny'>
      <Stack.Item breakpoint='tiny' width='sixth' />
      <Stack.Item breakpoint='tiny' width='sixth' />
      <Stack.Item breakpoint='tiny' width='sixth' />
      <Stack.Item breakpoint='tiny' width='sixth' />
      <Stack.Item breakpoint='tiny' width='sixth' />
      <Stack.Item breakpoint='tiny' width='sixth' />
    </Stack>

    <p>Stack object with split</p>
    <Stack itemSpacing='medium' splitAt='small'>
      <Stack.Item />
      <Stack.Item />
    </Stack>

    <p>75/25 layout:</p>
    <Stack splitAt='tiny'>
      <Stack.Item breakpoint='tiny' width='three-fourths' />
      <Stack.Item breakpoint='tiny' width='fourth' />
    </Stack>

    <p>60/40 layout:</p>
    <Stack splitAt='tiny'>
      <Stack.Item breakpoint='tiny' width='three-fifths' />
      <Stack.Item breakpoint='tiny' width='two-fifths' />
    </Stack>

    <p>Mixed column layout</p>

    <Stack splitAt='tiny'>
      <Stack.Item breakpoint='tiny' width='fourth'>
        <p className='sprk-b-TypeBodyOne'>fourth</p>
      </Stack.Item>
      <Stack.Item breakpoint='tiny' width='half'>
        <p className='sprk-b-TypeBodyOne'>half</p>
      </Stack.Item>
      <Stack.Item breakpoint='tiny' width='fourth'>
        <p className='sprk-b-TypeBodyOne'>fourth</p>
      </Stack.Item>
    </Stack>

    <Stack splitAt='tiny'>
      <Stack.Item breakpoint='tiny' width='sixth'>
        <p className='sprk-b-TypeBodyOne'>sixth</p>
      </Stack.Item>
      <Stack.Item breakpoint='tiny' width='sixth'>
        <p className='sprk-b-TypeBodyOne'>sixth</p>
      </Stack.Item>
      <Stack.Item breakpoint='tiny' width='sixth'>
        <p className='sprk-b-TypeBodyOne'>sixth</p>
      </Stack.Item>
      <Stack.Item breakpoint='tiny' width='flex'>
        <p className='sprk-b-TypeBodyOne'>flex</p>
      </Stack.Item>
    </Stack>

    <Stack splitAt='tiny'>
      <Stack.Item breakpoint='tiny' width='two-fifths'>
        <p className='sprk-b-TypeBodyOne'>two-fifths</p>
      </Stack.Item>
      <Stack.Item breakpoint='tiny' width='fifth'>
        <p className='sprk-b-TypeBodyOne'>fifth</p>
      </Stack.Item>
      <Stack.Item breakpoint='tiny' width='fifth'>
        <p className='sprk-b-TypeBodyOne'>fifth</p>
      </Stack.Item>
      <Stack.Item breakpoint='tiny' width='fifth'>
        <p className='sprk-b-TypeBodyOne'>fifth</p>
      </Stack.Item>
    </Stack>

    <Stack splitAt='tiny'>
      <Stack.Item breakpoint='tiny' width='half'>
        <Stack itemSpacing='medium' splitAt='tiny'>
          <Stack.Item breakpoint='tiny' width='flex'>
            <p className='sprk-b-TypeBodyOne'>Nested Item (flex)</p>
          </Stack.Item>
          <Stack.Item breakpoint='tiny' width='flex'>
            <p className='sprk-b-TypeBodyOne'>Nested Item (flex)</p>
          </Stack.Item>
        </Stack>
      </Stack.Item>
      <Stack.Item breakpoint='tiny' width='half'>
        <p className='sprk-b-TypeBodyOne'>half</p>
      </Stack.Item>
    </Stack>

    <Stack splitAt='tiny'>
      <Stack.Item breakpoint='tiny' width='two-fifths'>
        <p className='sprk-b-TypeBodyOne'>two-fifths</p>
      </Stack.Item>
      <Stack.Item breakpoint='tiny' width='three-fifths'>
        <p className='sprk-b-TypeBodyOne'>three-fifths</p>
      </Stack.Item>
    </Stack>
  </div>
)

export default Grid
