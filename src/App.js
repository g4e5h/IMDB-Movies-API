import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Allot from './components/allot/Allot';

function App() {
  return (
 <BrowserRouter>

    <Routes>
     
    <Route path='/' element={<Allot/>} />
    
    </Routes>

 </BrowserRouter>
  );
}

export default App;
