import React from 'react';
import './App.css';
import CustomSelect from './Components/CustomSelect';
import MultiSelect from './Components/MultiSelect';

function App() {

  return (
    <div className="App">
      <h1>Dropdown Single Select</h1>
      <CustomSelect />
      <h1>Dropdown Multi Select</h1>
      <MultiSelect isMulti={true} />
    </div>
  );
}

export default App;
