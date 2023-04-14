import {AiFillDelete} from 'react-icons/ai';

function Notes({title, content, id, date, deleteNote}){
    return(
        <div className="notes--list--container">
            <div className='notes--list--container--01'>
                <div className="notes--list--container--01--01"><h6>{title}</h6></div>
                <div className="notes--list--container--01--02"><h6>{content}</h6></div>
            </div>
            <div className='notes--list--container--02'>
                <div className="notes--list--container--02--01"><h4>{date}</h4></div>
                <button className='notes--list--container--button' onClick={() => deleteNote(id)}><AiFillDelete /></button>
            </div>
        </div>
    )
}
export default Notes