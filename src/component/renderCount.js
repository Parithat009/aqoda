import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { countState } from '../store'

const RenderCount = () => {
  const [count, setCount] = useRecoilState(countState)

  console.log('render count');
  return (
    <div style={{ border: '1px solid white' }}>
      {count}<br />
      <button onClick={() => setCount(prev => prev + 1)}>count +1 </button>
    </div>
  )
}

export default React.memo(RenderCount)
