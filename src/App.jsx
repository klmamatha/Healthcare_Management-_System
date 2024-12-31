import './App.css'
import { Route,Routes,HashRouter } from 'react-router-dom';
import Home from './home';
import Header from './header';



function App() {
  return (
   <HashRouter>
   <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
    </Routes>
   </HashRouter>

  );

}
export default App
