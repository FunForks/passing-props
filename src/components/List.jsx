/**
 * src/components/List.jsx
 */


import { ListItem } from './ListItem'


export const List = ({ buttonData, action }) => {

  const items = buttonData.map( item => (
    <ListItem />
  ))

  return <ul>Buttons go here</ul>
}