/**
 * src/components/ListItem.jsx
 */


export const ListItem = ({ action, text, color }) => {
  return (
    <li
      onClick={action}
    >
      <button   
        style={{ color }}
      >
        {text}
      </button>
    </li>
  )
}