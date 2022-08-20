import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
//import { useState } from "react";
import { BiBookAdd } from "react-icons/bi";

import '../App.css';
const Notes = ({add,remove,note,handleKeypress,inputRef}) => { 
    return ( 
        <div>
        <div className="title">
        <h1>Notes App</h1>
        </div>
        <div className="inputarea">
            <input type="text" 
             onKeyPress={handleKeypress} 
            placeholder="enter any thing"  className="in-txt" />
            <button className="add" onClick={add}><BiBookAdd size={35} className="icon-add"/></button>
        </div>
        <span className="otr">
        <div className="notesarea">
        {
            note.map( notes => 
             <td className="tble">
                <tr key={notes.id} className="val"> {notes.value} </tr>
                <button onClick={()=> remove(notes.id)} className="btn-del"><AiOutlineDelete size={30} className="icon-del"/></button>
            </td> )
        }
        </div>
        
        </span>
    </div>      
     );
}
 
export default Notes;