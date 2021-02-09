import React, { useState } from 'react'
import './App.css';

const App = () => {
  const [hotel, setHotel] = useState([])
  const [floor, setFloor] = useState(0)
  const [room, setRoom] = useState(0)
  const [check, setcheck] = useState('')
  const [checkOuts, setcheckOuts] = useState('')
  const [activity, setactivity] = useState(['Start Activity Log'])
  const [select, setselect] = useState({})

  const createHotel = () => {
    if (floor && room) {
      let mock = []

      for (let i = 1; i <= floor; i++) {
        let element = { floor: i, room: [] }
        for (let j = 1; j <= room; j++) {
          let mockRoom = {
            id: Math.random(),
            roomNumber: `${i}${j < 10 ? `0${j}` : j}`,
            status: 'available',
            detail: ''
          }
          element.room.push(mockRoom)
        }
        mock.push(element)
      }

      setHotel(mock)
      setactivity(prev => [...prev, `Hotel created with ${floor} floor(s), ${room} room(s) per floor`])
    }
  }

  const selectRoom = ({ roomNumber, detail, status, ...props }) => {
    setactivity(prev => [
      ...prev,
      `room : ${roomNumber}, status : ${status}, detail : ${detail || status}`
    ])
    setselect({ roomNumber, detail, status, ...props })
  }

  const roomAvailable = () => {
    let filterRoom = hotel?.map(item => item?.room?.filter(val => val?.status === 'available'))
    filterRoom = filterRoom.reduce((a, b) => a.concat(b)).map(item => item?.roomNumber)
    setactivity(prev => [...prev, `Room Available : ${filterRoom.toString()}`])
  }

  const allGuest = () => {
    let filterGuest = hotel?.map(item => item?.room?.filter(val => val?.status === 'booked'))
    filterGuest = filterGuest.reduce((a, b) => a.concat(b)).map(item => item.detail)
    // console.log(filterGuest);
    setactivity(prev => [
      ...prev,
      `All Guest : ${filterGuest.length > 0 ? filterGuest.toString() : 'No have guest'}`
    ])
  }

  const checkIn = () => {
    if (select?.roomNumber && select?.status === 'available' && check.trim()) {
      let mock = []
      hotel?.map(item => {
        let element = { floor: item?.floor, room: [] }
        item?.room.map(val => {
          if (val?.id === select?.id) {
            const ele = {
              ...val,
              status: 'booked',
              detail: check
            }
            element.room.push(ele)
          } else {
            element.room.push(val)
          }
        })
        mock.push(element)
      })
      setHotel(mock)
      setactivity(prev => [
        ...prev,
        `Room ${select?.roomNumber} is booked by ${check} with keycard number k${select?.roomNumber}`
      ])

    } else if (select?.roomNumber && select?.status === 'booked') {
      setactivity(prev => [
        ...prev,
        `Cannot book room ${select?.roomNumber} for ${check}, The room is currently booked ${select?.detail}`
      ])
    } else {
      setactivity(prev => [
        ...prev,
        `Please select room available `
      ])
    }
  }

  const checkOut = () => {
    if (checkOuts.trim()) {
      let filterRoom = hotel?.map(item => item?.room?.filter(val => val?.detail === checkOuts))
      filterRoom = filterRoom.reduce((a, b) => a.concat(b))
      let mock = []
      hotel?.map(item => {
        let element = { floor: item?.floor, room: [] }
        item?.room.map(val => {
          if (val?.detail === checkOuts) {
            const ele = {
              ...val,
              status: 'available',
              detail: ''
            }
            element.room.push(ele)
          } else {
            element.room.push(val)
          }
        })
        mock.push(element)
      })
      setHotel(mock)
      setactivity(prev => [
        ...prev,
        `${filterRoom[0].detail} is check out room  ${filterRoom[0].roomNumber}`
      ])
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='activityLog'>
          {activity?.map((item, i) => (
            <div key={i}> --- {item} ---</div>
          ))}
        </div>
        {!hotel.length > 0 ?
          <div>
            <input type='number' placeholder='floor ...' value={floor} onChange={e => setFloor(parseInt(e.target.value))} />
            <input type='number' placeholder='room ...' value={room} onChange={e => setRoom(parseInt(e.target.value))} /> <br />
            <button onClick={() => createHotel()}>Create Hotel</button>
          </div>
          : (
            <div>
              {hotel?.length > 0 && hotel?.map((item, i) => (
                <div key={i}>
                  <div>Floor : {item.floor}</div>
                  <div className='listRoom'>
                    {item?.room.map((roomItem, j) => (
                      <div className='blogRoom' key={j} onClick={() => selectRoom(roomItem)}>{roomItem?.roomNumber}</div>
                    ))}
                  </div>
                </div>
              ))}

              <div className='divCheck'>
                <div className='divCheckin'>
                  <div>Check In Room Select : {select?.roomNumber} </div>
                  <input type='text' placeholder='Guest Name ...' value={check}
                    onChange={e => setcheck(e.target.value)} /> <br />
                  <button onClick={checkIn}>Check In</button>
                </div>

                <div className='divCheckin'>
                  <div>Check Out </div>
                  <input type='text' placeholder='Guest Name ...' value={checkOuts}
                    onChange={e => setcheckOuts(e.target.value)} /> <br />
                  <button onClick={checkOut}>Check Out</button>
                </div>
              </div>

              <button onClick={roomAvailable}>ห้องว่างทั้งหมด (Room Available)</button>
              <button onClick={allGuest}>รายชื่อแขกทั้งหมด (All Guest)</button>
            </div>
          )
        }
      </header>
    </div>
  )
}

export default App

