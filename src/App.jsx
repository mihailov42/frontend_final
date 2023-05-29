
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import Contacts from './components/Contacts';
import Form from './components/Form';
import "./App.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom';


function App() {

  const [models, setTyrs] = useState([])
  useEffect(() => {
    async function axiosData() {
      const modelsData = 
      await axios.get('https://646e079d9c677e23218ae46a.mockapi.io/models')
      setTyrs(modelsData.data)
    }
   
    axiosData();
  },[])

  return (
    <div>
      <Router>
        <Header/>
          <Routes>
            <Route path='/favorites'
              element={
                <Favorites/>
              }/>
            <Route path='/'
              element={
                <Home item={models}/>
              }/>  
            <Route path='/contacts'
              element={
                <Contacts/>
              }/>
              <Route path='/form'
              element={
                <Form/>
              }/>
            
          </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
