import { atom, selector, atomFamily, selectorFamily } from 'recoil'
import { getUserByIdService, getUsersService } from '../service/user'
import { countState } from './countState'

export const usersState = atom({
  key: 'usersState',
  default: []
})

export const testState = atom({
  key: 'testState',
  default: 0
})

export const usersLength = selector({
  key: 'usersLength',
  get: (param) => {
    const users = param.get(usersState)
    return users?.length
  }
})

export const userById = selector({
  key: 'userById',
  get: async ({ get }) => {
    let a = get(countState)
    const response = await getUserByIdService(a)
    return response
  },
  set: ({ set }, newValue) => {
    set(testState, prev => prev + newValue)
  }
})

export const elementPositionStateFamily = atomFamily({
  key: 'ElementPosition',
  default: async (param) => {
    const response = await getUserByIdService(param)
    console.log('response');
    return response
  }
});

