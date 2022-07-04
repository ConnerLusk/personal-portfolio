import {BrowserRouter as Router} from 'react-router-dom'
import AnimatedRoutes from './Components/AnimatedRoutes';
import ReactGa from 'react-ga'
import { useEffect } from 'react';

function App() {
  const tracking_number = 'UA-233530919-1'
  useEffect(() => {
    ReactGa.initialize(tracking_number)
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