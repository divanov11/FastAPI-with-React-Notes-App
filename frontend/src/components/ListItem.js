import React from 'react'
import { Link } from 'react-router-dom'

let getTimestamp = (note) => {
  return new Date(note.__updatedtime__).toLocaleDateString()
}

let trimmedContent = (note) => {
      //Slice content and add three dots in over 45 characters to show there is more
      let content = note.body

      if (content.length > 45) {
        return content.slice(0, 45) + '...'
      } else {
          return content
      }
}

const ListItem = ({note}) => {
  return (
    <Link to={`/${note.id}`}>
      <div className="notes-list-item">
        <h3>{trimmedContent(note)}</h3>
        <p><span>{getTimestamp(note)}</span></p>
      </div>
    </Link>
  )
}

export default ListItem