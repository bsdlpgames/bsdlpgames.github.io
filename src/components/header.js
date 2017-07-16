import React from 'react'
import {
  NavLink
} from 'react-router-dom'
import logo from '../logo.jpg'

export default () => (
  <nav className='pa3 pa4-ns mb4'>
    <img alt='avatar' className='br-100 mr3 h3 w3 dib v-mid' src={logo} />
    <NavLink activeClassName='b' className='link f6 f5-ns ttu near-white hover-near-black hover-bg-near-white dib mr3' to='/'>bsdlp</NavLink>
    <NavLink activeClassName='b' className='link f6 f5-ns ttu near-white hover-near-black hover-bg-near-white dib mr3' to='/schedule'>schedule</NavLink>
    <a className='link f6 f5-ns ttu near-white hover-near-black hover-bg-near-white dib mr3' href='https://twitch.tv/bsdlp' title='twitch'>twitch</a>
    <a className='link f6 f5-ns ttu near-white hover-near-black hover-bg-near-white dib mr3' href='https://twitter.com/bsdlp' title='twitter'>twitter</a>
  </nav>
)
