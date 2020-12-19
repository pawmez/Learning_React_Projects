import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, SetEditID] = useState(null);
  const [alert, setAlert] = useState({
    show:false, 
    msg:'',
    type:''
  });
  
  const showAlert = (show=false, type="",msg="") => {
    setAlert({show,type,msg}) //ES6 syntax = show:show
  }

  const clearItems = () => {

  }

   const handleSubmit = (e) => {
    e.preventDefault();
    if(!name){
      // display alert
      showAlert(true, 'danger', 'please enter value')
    } else if (name && isEditing){
      //deal with edit
    } else {
      // add item
      const newItem = {id: new Date().getTime().toString(), title:name};
      setList([...list, newItem]);
      setName('');
    }
  }

  return (
  <section className="section-center">
    <form className="grocery-form" onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
      <h3>grocery bud</h3>
      <div className="form-control">
        <input 
        type="text" 
        className="grocery" 
        placeholder="eg. eggs" 
        value={name} 
        onChange={(e)=>setName(e.target.value)}
        />
        <button className="submit-btn" type="submit">
          {isEditing?'edit':'submit'}
        </button>
      </div>
    </form>
    {list.length > 0 && (
    <div className="grocery-container">
      <List items={list}/>
      <button className="clear-btn" onClick={clearItems}>clear items</button>
    </div>
    )}
    </section>
  );
}

export default App
