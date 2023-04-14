import Notes from './Notes';
import NewNote from './NewNote';

function NotesList({notes, saveNote, deleteNote}){

    let arrayOfNotes = notes.map(item => <Notes title={item.title} key={item.id} deleteNote = {deleteNote} content = {item.content} id={item.id} date = {item.date}/>);

    return(
        <div className='notes--container'>
            {arrayOfNotes}
            <NewNote saveNote = {saveNote}/>
        </div>
    )
}

export default NotesList