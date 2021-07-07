import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Components/Features/Footer/Footer';
import SideBarComp from './Components/Features/SideBar/SideBarComp';
import Header from './Components/Features/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <SideBarComp />
      </Router>
      <Footer />
    </div>
  );
}
export default App;
