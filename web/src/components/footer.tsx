import React from 'react'

import { Newsletter } from 'src/components/newsletter'

export const Footer = () => {
  return (
    <div className='container--xl mxa x p1 outer'>
      <div className='f x jcb ais'>
        <div className='footer__newsletter'>
          <h5 className='small mb05 caps'>Newsletter Signup</h5>
          <p className='mt0 mb1 p0 small'>Join the Dillydally Society</p>
          <Newsletter />
        </div>
      </div>
    </div>
  )
}
