
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIN from './components/SignIN';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/SignIN' element={<SignIN/>}/>

        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
