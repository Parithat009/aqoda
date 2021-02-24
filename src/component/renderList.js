import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { usersState, usersLength, userById } from '../store'

export const RenderList = React.memo(() => {
  const list = useRecoilValue(usersState)
  const user = useRecoilValue(usersLength)
  const userId = useRecoilValue(userById)
  // console.log(userId)

  console.log('render List');
  return (
    <div>
      {list?.length > 0 && list?.map((item, i) => (
        <div key={i}>{item?.name} --- {item?.website}</div>
      ))}

      Total user : {user}
    </div>
  )
})
