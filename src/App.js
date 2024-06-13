
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIN from './components/SignIN';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        
        <Route path='/SignIN' element={<SignIN/>}/>
        <Route path='/' element={<SignUp/>}/>

        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
