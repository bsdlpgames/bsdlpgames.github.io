import React from 'react'
import logo from '../logo.jpg'

export default () => (
  <nav className='pa3 pa4-ns mb4'>
    <img alt='avatar' className='br-100 mr3 h3 w3 dib v-mid' src={logo} />
    <a className='link b f6 f5-ns ttu near-white hover-near-black hover-bg-near-white dib mr3' href='/' title='bsdlp'>bsdlp</a>
    <a className='link f6 f5-ns ttu near-white hover-near-black hover-bg-near-white dib mr3' href='https://twitch.tv/bsdlp' title='twitch'>twitch</a>
    <a className='link f6 f5-ns ttu near-white hover-near-black hover-bg-near-white dib mr3' href='https://twitter.com/bsdlp' title='twitter'>twitter</a>
  </nav>
)