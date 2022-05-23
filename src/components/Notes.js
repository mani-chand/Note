import React, { useState } from 'react';
import '../App.css';
const Notes = () => {
    const [note,setnote]=useState([ ])
    const add = (e) =>{
        var hai=document.querySelector(".textField").value
        setnote([...note,{
            value: hai,
            id:note.length
        }])
    }
    const remove=(id) =>{
        console.log(id)
        var heloo=note.filter(function(notes){ 
            return notes.id !== id})
        console.log(heloo)
        setnote(heloo)
    }

    return ( 
      <div>
        <div className="container">
            <div className="formField">
                <header>
                    <h1>Notes</h1>
                </header>
                <div>
                    <input type="text"  placeholder="Enter a Note"  className="textField" autoFocus />
                    <button onClick={add}  className="btn1">Submit</button>
                </div>
                
                

                    <div className="container-2">
        <div className="listField">
                <ul>
                {note.map((notes) =><li  key={notes.id}> {notes.value} 
                <br/>
                <button onClick={() => remove(notes.id)}>Delete</button>
                </li>)} 
                </ul> 
            </div>
                
            </div>
            </div> 
            </div>
        </div>
        
     );
}
 
export default Notes;