import React from 'react';
import {nanoid} from 'nanoid';
import NotesList from './NotesList';
import NavBar from './NavBar';

function Main(){

    const [notes, setNotes] = React.useState([{title: 'Sample-I', content: 'Hello, Welcome to Notes Application', id: nanoid(), date: '22/01/1999'}]);

    const [searchText, setSearchText] = React.useState('');
    // setsearch is here to update directly from the user

    function addNewNote(obj){
        let date = new Date().toLocaleDateString();
        let id = nanoid();
        let tempObj = {
            title: obj.title,
            content: obj.content,
            date: date,
            id: id
        }

        let tempNotesArray = [...notes, tempObj];
        setNotes(tempNotesArray);
    }

    function removeNote(id){
        let tempNotesArray = notes.filter(item => item.id !== id);
        setNotes(tempNotesArray);
    }

    React.useEffect(() => {
        const tempArrayLocalStorage = JSON.parse(localStorage.getItem('personal--notes--application'));
        if(tempArrayLocalStorage){
            setNotes(tempArrayLocalStorage);
        }
    }, [])

    React.useEffect(() => {
        localStorage.setItem('personal--notes--application', JSON.stringify(notes));
    }, [notes]);

    return(
        <div className='main--container'>
            <NavBar search = {setSearchText}/> 
            <NotesList notes = {notes.filter(item => item.content.toLowerCase().includes(searchText))} saveNote = {addNewNote} deleteNote = {removeNote}/>
        </div>
    )
}

export default Main