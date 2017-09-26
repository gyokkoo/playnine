import React from 'react'

import ReturnMenu from '../menu/ReturnMenu'

const AboutPage = (props) => {
  return (
    <div className='container text-center'>
      <h5>Powered by ReactJS</h5>
      <hr />
      <div>Please if you find bugs or have idea to improve the app contact me:</div>
      <h6>gyokan.nezhdetov@gmail.com</h6>
      <hr />
      <div>
        App source code <a href='https://github.com/Nezhdetov/playnine' target='_blank' >view here</a>
      </div>
      <ReturnMenu />
    </div>
  )
}

export default AboutPage
