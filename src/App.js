import React from 'react'
import Shelves from './Shelves';
import Header from './Header';
import Search from './Search';
import {Routes , Route} from "react-router-dom"

function App() {
  return (
    <div >
     <Header/>
     <Routes>
      <Route path = "/" element = {<Shelves/>}/>
      <Route path = "/search" element = {<Search/>}/>
     </Routes>
    
    </div>
  );
}

export default App;
