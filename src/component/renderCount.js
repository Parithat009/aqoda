import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { countState } from '../store'

const RenderCount = () => {
  const count = useRecoilValue(countState)

  console.log('render count');
  return (
    <div>
      {count}
    </div>
  )
}

export default React.memo(RenderCount)
