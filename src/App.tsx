import { Container } from '@mui/system';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:slug" element={<Blog />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div >
  );
}

export default App;
