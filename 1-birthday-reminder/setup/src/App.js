import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [birthday, setBirthday] = React.useState(data);

  return (
  <main>
    <section className="container">
      <h3>{birthday.length} birthdays today</h3>
      <List birthday={birthday}/>
      <button onClick={()=> setBirthday([])}>clear all</button>
    </section>
  </main>
  );
}

export default App;
