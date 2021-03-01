import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { usersState, usersLength, userById, testState, elementPositionStateFamily } from '../store'

export const RenderList = React.memo(() => {
  const list = useRecoilValue(usersState)
  const user = useRecoilValue(usersLength)
  const testS = useRecoilValue(testState)
  const [userId, setUserId] = useRecoilState(userById)
  const [position, setPostion] = useRecoilState(elementPositionStateFamily(5))

  console.log('render List', position);
  if (!userId?.id) {
    return null
  }
  return (
    <div style={{ border: '1px solid white' }}>
      {list?.length > 0 && list?.map((item, i) => (
        <div key={i}>{item?.name} --- {item?.website}</div>
      ))}

      Total user : {user} <br />

      <p style={{ color: 'red' }}>{userId?.name}</p>
      <button onClick={() => setUserId(2.5)}>user id </button>
      <button onClick={() => setPostion(prev => ({
        ...prev, name: 'nut'
      }))}>user prev </button>
    </div>
  )
})
