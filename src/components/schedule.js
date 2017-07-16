import React from 'react'
import Hero from './hero'

export default () => (
  <div className='center w-80 ph3-ns pv4'>
    <h3 className='normal'>Streaming Schedule (All Times PT/PDT)</h3>
    <table>
      <tr>
        <td className='b ph4'>Monday</td>
        <td>9pm to 12am</td>
      </tr>
      <tr>
        <td className='b ph4'>Tuesday</td>
        <td>9pm to 12am</td>
      </tr>
      <tr>
        <td className='b ph4'>Wednesday</td>
        <td>9pm to 12am</td>
      </tr>
      <tr>
        <td className='b ph4'>Thursday</td>
        <td>9pm to 12am</td>
      </tr>
      <tr>
        <td className='b ph4'>Friday</td>
        <td className='i'>check twitter</td>
      </tr>
      <tr>
        <td className='b ph4'>Saturday</td>
        <td className='i'>check twitter</td>
      </tr>
      <tr>
        <td className='b ph4'>Sunday</td>
        <td className='i'>check twitter</td>
      </tr>
    </table>
  </div>
)
