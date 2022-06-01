import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ListItem from '../components/ListItem'
import { ReactComponent as AddIcon } from '../assets/add.svg'

//let dummyData = [{"id":"1", "body":"Get milk" }, {"id":"2", "body":"Wash car" }, {"id":"3", "body":"Start coding"}]


const Notes = () => {

  let [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async () =>{
    let response = await fetch('/notes')
    let data = await response.json()  
    setNotes(data)
  }

  return (
    <div className='notes'>
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      
      <div className="notes-list">
        {notes.map((note) => (
          <ListItem key={note.id} note={note} />
        ))}
      </div>

      <Link to="/add" className="floating-button">
            <AddIcon />
      </Link>
    </div>
  )
}

export default Notes