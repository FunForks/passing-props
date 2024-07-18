/**
 * src/components/List.jsx
 */


import { ListItem } from './ListItem'


export const List = ({ buttonData, action }) => {

  const items = buttonData.map( item => (
    <ListItem
      key={item.id}
      { ...item }
      action={action}
    />
  ))

  return <ul>{items}</ul>
}