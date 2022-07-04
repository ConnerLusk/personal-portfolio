import {BrowserRouter as Router} from 'react-router-dom'
import AnimatedRoutes from './Components/AnimatedRoutes';
import ReactGa from 'react-ga'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    ReactGa.initialize('G-YD64K2DBMM')
    // reprot page view
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <div className = "container">
          <Router>
            <AnimatedRoutes />
          </Router>
    </div>
  );
}

export default App;