import './App.css';
import One from './component/Home/One';
import Store from './component/Store/Store';
import { Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';
export const Context = createContext();

function App() {
  const [val, setVal] = useState();

  const bus = {
    val, setVal
  }

  return (
    <Context.Provider value={bus}>
      <div className="App">
        <Routes>
          <Route path='/' element={<One />} />
          <Route path='/store' element={<Store />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
