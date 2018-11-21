import React from 'react'
import { Link } from 'react-spark'

const Links = () => (<>
  <p>Inline:</p>
  <Link href='#'>Inline</Link>

  <p>Plain:</p>
  <Link href='#' variant='plain'>Plain</Link>

  <p>Standalone:</p>
  <Link href='#' variant='standalone'>Standalone</Link>

  <p>Disabled:</p>
  <Link href='#' disabled>Disabled</Link>
</>)

export default Links
