
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIN from './components/SignIN';

function App() {
  return (
    
      <BrowserRouter>
      <Routes>
      <Route path='/signIN' element={<SignIN/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        </Routes></BrowserRouter>
    
  );
}

export default App;
