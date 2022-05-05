import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/> 
      <PersonCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/> 
      <PersonCard firstName={"Michael"} lastName={"Agoncillo"} age={31} hairColor={"Black"}/> 
      <PersonCard firstName={"Randy"} lastName={"Wuske"} age={30} hairColor={"Blonde"}/> 
    </div>
  );
}

export default App;
