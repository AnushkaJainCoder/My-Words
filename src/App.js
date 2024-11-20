import logo from './logo.svg';
import './App.css';
import ShayriList from './Components/ShayriList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <Router */}
      <Router>
          <Routes>
          <Route path='/' element = {ShayriList} />
          {/* <Route path='/add' element = {AddShayri} /> */}
            
          </Routes>
      </Router>
     <ShayriList />
    </div>
  );
}

export default App;
