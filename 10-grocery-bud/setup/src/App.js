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
    showAlert(true,'danger','empty list')
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true,'danger', 'item removed');
    setList(list.filter((item) => item.id != id))
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    SetEditID(id);
    setName(specificItem.title)
  }

   const handleSubmit = (e) => {
    e.preventDefault();
    if(!name){
      // display alert
      showAlert(true, 'danger', 'please enter value')
    } else if (name && isEditing){
      //edit
      setList(list.map((item) => {
        if(item.id === editID){
          return {...item,title:name}
        }
        return item
      }))
      setName('')
      SetEditID(null)
      setIsEditing(false)
      showAlert(true,'success', 'value changed')
    } else {
      showAlert(true, 'success', 'item added to the list')
      const newItem = {id: new Date().getTime().toString(), title:name};
      setList([...list, newItem]);
      setName('');      
    }
  }

  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(list))    
  }, [list])

  return (
  <section className="section-center">
    <form className="grocery-form" onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
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
      <List items={list} removeItem={removeItem} editItem={editItem}/>
      <button className="clear-btn" onClick={clearItems}>clear items</button>
    </div>
    )}
    </section>
  );
}

export default App
