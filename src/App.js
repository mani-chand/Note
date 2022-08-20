//import logo from './logo.svg';
//import './App.css';
import uuid from 'react-uuid'
import { useState,useEffect,useRef } from 'react';
import './components/Notes.js'   
//import ReactDOM from 'react-dom';
import Notes from './components/Notes.js';
//import { Route, BrowserRouter as Router,Routes } from  'react-router-dom'  

function App() {
  const inputRef = useRef()

  const getLocalItmes=()=>{
    let list=localStorage.getItem('item')
    console.log(list)
    if(list){
        return JSON.parse(localStorage.getItem('item'))
    }
    else{
      return []
    }
}
  const [note,setNote]=useState(getLocalItmes())
  /*
  const [name,setName]=useState(" ")
  onst [users,setUser]=useState([])
  const addUser = () =>{
   
  }
  const nam = () =>{
    const hai=document.querySelector('.lable-mail').value   
    setName(hai)
   }*/
    const add=()=>{
        var n=document.querySelector('.in-txt').value
         setNote([...note,{
            value:n,
            id:uuid()
         }])
         inputRef.current.focus()
    }
    const remove=(id) =>{
        console.log(id)
        var heloo=note.filter(function(notes){ 
            return notes.id !== id})
        console.log(heloo)
        setNote(heloo)
    }
    useEffect(() =>{
         localStorage.setItem('item',JSON.stringify(note))
      },[note])

      const handleKeypress = e => {
        //it triggers by pressing the enter key
      if (e.key === "Enter") {
        add()
        inputRef.current.focus()
      }
      };
  return (
        <div>
          <Notes add={add} remove={remove} note={note} handleKeypress={handleKeypress} inputRef={inputRef}/>
        </div> 
      
  );
}


export default App;
