import React from 'react'
import{useDispatch, useSelector} from 'react-redux'
import './Counter.css'

function Counter() {
        const dispatch=useDispatch()
        const count=useSelector(state=>state.counter)
        const incrementBy1=()=>
        {
          dispatch({type:'increment',amount:2})
        }
        const decrementBy1=()=>
        {
          dispatch({type:'decrement',amount:2})
        }
    
  return (
    <div className='counter'>
      <h1>REDUX COUNTER</h1>
      <div className='value'>
        {count}
      </div>
      <div>
      <button onClick={incrementBy1}>
       IncrementBy 2
      </button><button onClick={decrementBy1}>
       DecrementBy 2
      </button>
      </div>
    </div>
  )
}

export default Counter
