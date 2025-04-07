import { useReducer } from "react";
import ReducerCom from "../components/ReducerCom";

const reducer = (state, action) => {
    console.log("reducer call :", action);
    switch(action.type){
        case "UP" : return { value : state.value + 1 }
        case "DOWN" :return { value : state.value - 1 }
        default : return state;
    }
      
}
const initalState = {value : 0}

function ReducerCon () {
    const[state, dispatch] = useReducer(reducer, initalState);
    console.log("state", state);
    const onUp = () => {
        dispatch({type: "UP"})
    }
    const onDown = () => {
        dispatch({type: "DOWN"})
    }
    return(<><ReducerCom state={state} onUp={onUp} onDown={onDown}/></>)
}
export default ReducerCon;