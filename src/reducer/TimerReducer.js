import { CHANGE_MIN, CHANGE_SEC, STOP_TIMER } from "./Actions/Actions"

export let initialTime = {
    min: 0,
    sec: 0
}



const TimerReducer = (state, action) => {

    const{ type, payload } = action

    switch (type) {
        case CHANGE_MIN:

        initialTime = {
            ...initialTime,
            min: payload.time
        }


            break

        case CHANGE_SEC:

        initialTime = {
            ...initialTime,
            sec: payload.time
        }

            break
            
            case STOP_TIMER:

        initialTime = {
            min: 0,
            sec: 0
        }

            break

        default:
            console.log("error")
    }
}

export default TimerReducer