import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingMessage from './components/LandingMessage';
import Experience from './components/Experience';
import JasonImage from './components/JasonImage';

function App() {
  return(
    <Router>
      <div>
        <NavBar />
          <div className="horizontal-layout">
              <div className="left-half">
                <div className="intro-text">
                  <LandingMessage/>
                </div>
              </div>
              <div className="right-half">
                <div className="jason-image">
                  <JasonImage />
                </div>
              </div>
          </div>
          <Routes>
            <Route path="/experience" element={< Experience />} />
          </Routes>
          </div>    
    </Router>
  )
}

export default App
