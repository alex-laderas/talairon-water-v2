import Login from '../src/pages/login'
import Register from '../src/pages/register'
import User from './pages/user';
import Admin from './pages/admin'
import { Route, Routes } from "react-router"
import './App.css';


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Agreement from './pages/agreement';
import Landing from './landing';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ7Lz3UvsuQTT3MU-KLKzPap7jRXzWQ10",
  authDomain: "talairon-water.firebaseapp.com",
  projectId: "talairon-water",
  storageBucket: "talairon-water.appspot.com",
  messagingSenderId: "581435291012",
  appId: "1:581435291012:web:5e687cd5512c3e5652d9d1",
  measurementId: "G-GPK0VQVFR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {

  return (
      <div className="main">
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/user/*' element={<User />}/>
          <Route exact path='/admin/*' element={<Admin/>}/>
          <Route exact path='/agreements/*' element={<Agreement/>}/>
          <Route exact path='/landing' element={<Landing/>}/>
        </Routes>
      </div>
    
  );
}

export default App;
