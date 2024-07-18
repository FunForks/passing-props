/**
 * src/App.jsx
 */


import { List } from './components/List'
import buttonData from './assets/buttonData.json'


export const App = () => {
  const action = () => {}


  return (
    <>
      <List
        buttonData={buttonData}
      />
      <p>Clicked?</p>
    </>
  )
}