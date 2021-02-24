import { atom, selector } from 'recoil'
import { getUserByIdService, getUsersService } from '../service/user'

export const usersState = atom({
  key: 'usersState',
  default: []
})

export const usersLength = selector({
  key: 'usersLength',
  get: (param) => {
    const users = param.get(usersState)
    return users?.length
  }
})

// export const usersState = selector({
//   key: 'usersState',
//   get: async () => {
//     const response = await getUsersService()
//     return response
//   },
//   // set: ({ set }, newValue) => {
//   //   console.log(newValue, usersState, usersLength);
//   //   // set(
//   //   //   // usersState,
//   //   //   newValue
//   //   // )
//   // }
// })

export const userById = selector({
  key: 'userById',
  get: async () => {
    const response = await getUserByIdService(2)
    console.log('0000000', response);
    return response
  }
})

