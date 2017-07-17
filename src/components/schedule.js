import React from 'react'
import Hero from './hero'

const schedule = () => (
  <div>
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

export default () => (
  <Hero title='Streaming Schedule (All Times PT/PDT)' content={schedule()} />
)
