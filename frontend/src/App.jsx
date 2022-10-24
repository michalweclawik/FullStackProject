
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/Navbar/Navbar';
import Home from './Containers/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import EditCar from './Containers/EditCar/EditCar';
import ViewCar from './Containers/ViewCar/ViewCar';
import CreateCar from './Containers/CreateCar/CreateCar';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';








function App() {



  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route excat path="/" element={<Home />}></Route>
          <Route excat path="/car/:id" element={<ViewCar />}></Route>
          <Route excat path="/car/create" element={<CreateCar />}></Route>
          <Route excat path="/editcar/:id" element={<EditCar />}></Route>
          <Route excat path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
