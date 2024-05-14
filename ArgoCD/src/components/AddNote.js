import React, { useState } from 'react';

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState('');

  const addNote = () => {
    if (noteText.trim() !== '') {
      handleAddNote(noteText);
      setNoteText('');
    }
  };

  return (
    <div className="note-form">
      <input
        type="text"
        placeholder="Add a new note..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button onClick={addNote}>Add</button>
    </div>
  );
}

export default AddNote;
