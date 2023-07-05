import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [link, setLink] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
        alert('Please return')
        return
    }
    onAdd({ text, link })
    setText('')
    setLink('')

  }
  
  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type='text' placeholder="Add Chord Progression" value={text} onChange={(e) => 
            setText(e.target.value)}></input>
        </div>
        <div>
            <label>Link: </label>
            <input type='text' value={link} onChange={(e) => setLink(e.target.value)}></input>
        </div>
        <input type='submit' value='Save Chord' className="btn btn-block"/>
    </form>
  )
}

export default AddTask