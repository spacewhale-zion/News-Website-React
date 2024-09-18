
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'



const App=()=>{
 const pageSize =10;
  const apiKey="b8efcf98092d4a3bbc860f0841e0bacc";
  const state={
    progress:0,
  }
 const [progress, setProgress] = useState(0);
 
 
    return (

      
      <div>
        <BrowserRouter>

        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={state}
        // onLoaderFinished={() => setProgress(0)}
      />

      <Routes>
        <Route  exact path="/" element={<News apiKey={apiKey} setProgress={setProgress}key="general" pageSize={pageSize} country="in" category="general"/>}>

        </Route>
        <Route exact path="/business" element={<News apiKey={apiKey}setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business"/>}>

</Route>
<Route exact  path="/entertainment" element={<News apiKey={apiKey}setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}>

</Route>
<Route  exact path="/health" element={<News apiKey={apiKey}setProgress={setProgress}key="health" pageSize={pageSize} country="in" category="health"/>}>

</Route>
<Route exact path="/science" element={<News apiKey={apiKey}setProgress={setProgress}key="science" pageSize={pageSize} country="in" category="science"/>}>

</Route>
<Route exact path="/sports" element={<News apiKey={apiKey}setProgress={setProgress}key="sports" pageSize={pageSize} country="in" category="sports"/>}>

</Route>
<Route exact path="/technology" element={<News apiKey={apiKey}setProgress={setProgress}key="technology" pageSize={pageSize} country="in" category="technology"/>}>

</Route>
      </Routes>
    </BrowserRouter>

      </div>
    )
  }

  export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
