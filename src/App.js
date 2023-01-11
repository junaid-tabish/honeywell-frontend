import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
 
<Router>
         
           <Routes>
              <Route path='' element={<Login/>}/>
              <Route path='regis' element={<Registration/>}/>
              </Routes>
              </Router>
</>
  );
}

export default App;
