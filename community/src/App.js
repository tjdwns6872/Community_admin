import './App.css';
// import Login from "./pages/__tests__/Login";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Layout from './layouts/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </Layout>
  );
}

export default App;
