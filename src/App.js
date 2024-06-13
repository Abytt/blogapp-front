
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIN from './components/SignIN';

function App() {
  return (
    
      <BrowserRouter>
      <Routes>
      <Route path='/SignIN' element={<SignIN/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        </Routes></BrowserRouter>
    
  );
}

export default App;
