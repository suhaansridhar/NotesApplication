import React from 'react';

function NewNote({saveNote}){

    const [obj, setObj] = React.useState({title : '', content: ''});

    function handleChange(event){
        const {name, value} = event.target
        setObj(prevObject => {
            return {
                ...prevObject,
                [name] : value
            }
        })
    }

    function handleClick(){
        if(obj.content.length > 0){
            saveNote(obj);
            setObj(prevState => ({...prevState, title: ''}));
            setObj(prevState => ({...prevState, content: ''}));
        }else{
            alert("You have not entered any content");
        }
    }

    return(
        <div className='new--note--container'>
            <div className='new--note--container--inputs'>
                <input type="text" placeholder="Title" name='title' value={obj.title} onChange={handleChange}/>
                <textarea name="content" placeholder="Type your text here..." value={obj.content} onChange={handleChange}/>
            </div>
            <div>
                <button onClick={handleClick} className='new--note--container--button'>Save</button>
            </div>
        </div>
    )
}

export default NewNote