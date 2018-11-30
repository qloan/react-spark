import React from 'react'
import { Link } from 'react-spark'

const Links = () => (<>
  <h2>Links</h2>

  <p>Inline:</p>
  <Link className='extra-class' data-extra-attribute href='#'>Inline</Link>

  <p>Plain:</p>
  <Link href='#' variant='plain'>Plain</Link>

  <p>Standalone:</p>
  <Link href='#' variant='standalone'>Standalone</Link>

  <p>Disabled:</p>
  <Link href='#' disabled>Disabled</Link>
</>)

export default Links
