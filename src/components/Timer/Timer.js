import React from 'react'
import Countdown from './Countdown/Countdown'
import TimerOption from './TimerOption/TimerOption'
import StartButton from './StartButton/StartButton'

import { useState } from 'react'
import { TimerProvider } from '../../context/TimerContext';
import '../../assets/css/Timer/Timer.css'

const Timer = () => {
    


    const [isGoing, setIsGoing] = useState(false)


    const handleCLick = () => {
        setIsGoing(
          prevState => !prevState
        )
      
      }

  return (
    <TimerProvider>
      <div className="Timer">

        <h1 className="title">Timer</h1>

 

        { isGoing ? <Countdown /> : <TimerOption />}
        <StartButton handleCLick={handleCLick} isGoing={isGoing} />
      </div>
    </TimerProvider>
  
  )
}

export default Timer