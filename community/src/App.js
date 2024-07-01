import './App.css';
// import Login from "./pages/__tests__/Login";
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from './layouts/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </Layout>
  );
}

export default App;
