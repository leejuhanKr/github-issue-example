import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      count: {count}
      <br/>
      <button onClick={() => setCount(prev => prev+1)}>
        increase
      </button>
      <button onClick={() => setCount(prev => prev-1)}>
        reset
      </button>
    </div>
  )
}
export default Counter