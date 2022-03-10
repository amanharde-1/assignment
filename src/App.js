
import './App.css';

import Header from './views/header'
import Footer from './views/footer'
import Add from './views/add'

import View from './views/view'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  return (
    <div className='root'>

      <Header />
      <div className='flex-grow-1'>
        <Router>
          <Routes>
            <Route path='/add' element={<Add />} />
            <Route path='/view' element={<View />} />
          </Routes>

        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
