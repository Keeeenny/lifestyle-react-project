import { useTimeContext } from '../../../context/TimerContext'

const MinutesOptions = (num) => {
   
  const TimeContext = useTimeContext()


     return (
     <div className='custom-select'>
         <select onChange={TimeContext.changeMin}>
           {num.value.map(x => 
             <option value={x} key={x}>{x}</option>
           )}
         </select>
         <span className="custom-arrow"></span>
     </div>
     )
   }
     
   export default MinutesOptions

