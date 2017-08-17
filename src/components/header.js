import React from 'react'
import {
  NavLink
} from 'react-router-dom'
import logo from '../logo.jpg'

export default () => (
  <nav className='pa3 pa4-ns mb4'>
    <NavLink className='link f6 f5-ns ttu near-black dib mr3' to='/'><img alt='avatar' className='br-100 h2 h3-ns w2 w3-ns dib v-mid' src={logo} /></NavLink>
    <NavLink activeClassName='b' className='link f6 f5-ns ttu near-black hover-near-white hover-bg-near-black dib mr3 pa1 br1 ba b--near-black' to='/schedule'>schedule</NavLink>
    <a className='link f6 f5-ns ttu near-black hover-near-white hover-bg-near-black dib mr3 pa1 br1 ba b--near-black' href='https://twitch.tv/bsdlp' title='twitch'>twitch</a>
    <a className='link f6 f5-ns ttu near-black hover-near-white hover-bg-near-black dib mr3 pa1 br1 ba b--near-black' href='https://twitter.com/bsdlp' title='twitter'>twitter</a>
  </nav>
)
