import React from 'react'
import Options from '../../../data/Options.js'
import MinutesOptions from './MinutesOptions.js'
import SecondsOptions from './SecondsOptions.js'
import '../../../assets/css/Timer/TimerOption/TimerOption.css'



const TimerOption = () => {

  



  return (

    <h1 className='TimerOption'><MinutesOptions value={Options}/>:<SecondsOptions value={Options}/></h1>
 
  )
}

export default TimerOption