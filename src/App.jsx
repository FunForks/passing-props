/**
 * src/App.jsx
 */


import { useState } from 'react'
import { List } from './components/List'
import buttonData from './assets/buttonData.json'


export const App = () => {
  const [ clicked, setClicked ] = useState("...")


  const action = ({target}) => {
    setClicked(target.innerText)
  }


  return (
    <>
      <List
        buttonData={buttonData}
        action={action}
      />
      <p>{clicked}</p>
    </>
  )
}