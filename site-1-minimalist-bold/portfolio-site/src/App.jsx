import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Variation1 from './pages/Variation1';
import Variation2 from './pages/Variation2';
import Variation3 from './pages/Variation3';
import Variation4 from './pages/Variation4';
import Variation5 from './pages/Variation5';
import Variation6 from './pages/Variation6';

import { ThemeProvider } from '../../../shared/context/ThemeContext';

function App() {
  return (
    <ThemeProvider defaultTheme="variation-1">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/variation1" element={<Variation1 />} />
          <Route path="/variation2" element={<Variation2 />} />
          <Route path="/variation3" element={<Variation3 />} />
          <Route path="/variation4" element={<Variation4 />} />
          <Route path="/variation5" element={<Variation5 />} />
          <Route path="/variation6" element={<Variation6 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
