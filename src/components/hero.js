import React from 'react'

class Hero extends React.Component {
  render() {
    return (
      <div className='center w-80 ph3-ns pv4'>
        <div className='pl4 pl5-ns'>
          <h1 className='normal'>{this.props.title}</h1>
          {this.props.content}
        </div>
      </div>
    )
  }
}

export default Hero;
