import React from 'react'
import { Link } from 'react-spark'

const Links = () => (<>
  <p>Inline:</p>
  <Link href='#nogo'>Inline</Link>

  <p>Standalone:</p>
  <Link href='#nogo' variant='standalone'>Standalone</Link>

  <p>Disabled:</p>
  <Link href='#nogo' disabled>Disabled</Link>
</>)

export default Links
