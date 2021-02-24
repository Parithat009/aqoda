import React, { useState, useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { usersState, countState } from './store'
import './App.css';
import { getUsersService, getUserByIdService, createUserService } from './service/user'
import { RenderList } from './component/renderList'
import RenderCount from './component/renderCount'
import axios from 'axios'

const App = () => {
  // const [users, setUsers] = useRecoilState(usersState)
  // const [count, setCount] = useRecoilState(countState)

  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await getUsersService()
  }

  const getUserById = async (id) => {
    const response = await getUserByIdService(id)
  }

  const createUser = async () => {
    const response = await createUserService({ name: 'Test User', username: 'admin' })
  }

  useEffect(() => {
    getUsers()
    getUserById(2)
  }, [])

  // const getUsers = async () => {
  //   const res = await getUsersService()
  //   setUsers(res)
  // }

  // const createUser = () => setUsers(prev => ([...prev, { id: Math.random(), name: 'Test', website: 'Test.website' }]))

  return (
    <div className="App">
      <header className="App-header">
        {/* <RenderList /><br />
        <RenderCount /><br />
        <button onClick={() => setCount(prev => prev + 1)}>Count +1</button>
        <button onClick={createUser}>Crete User</button> */}
        testdd
        <button onClick={() => createUser()}>create user</button>
      </header>
    </div>
  )
}

export default App

