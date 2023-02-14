import React from 'react'

import "../../assets/css/Position/Position.css"

const Position = () => {
  return (
    <main className='position'>
      <h1> How to Meditate</h1>

      <p> Before starting, make sure you're somewhere you can relax </p>

      <ol className='steps'>

        <li>1{")"} Take a seat</li>
        <p>
          Sit comfortably, remembering to keep your back straight.
          You can sit on a chair or if you prefer on the floor assuming the classic lotus position. 
        </p>
        
        <img src={require('../../assets/img/position-1.jpg')} alt='example'/>
        <li>2{")"} Set a time limit</li>
        <p>
          If you're a beginner, is better to start with a short time, such as 5 or 10 minutes.
          The ideal would then be to reach 15 or 20 minutfes of session.
        </p>
        <li>3{")"} Focus on the breath</li>
        <p>
          Focus on your breath as it goes in and as it goes out. 
          Inevitably, your attention will leave the breath and wander to other places, 
          simply return your attention to the breath.
        </p>
      </ol>
      

    </main>
  )
}

export default Position