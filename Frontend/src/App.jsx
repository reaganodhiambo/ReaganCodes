import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Blog from './pages/Blog';  
import BlogAdd from './pages/BlogAdd';
import BlogDetail from './pages/BlogDetail';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import BlogAddMarkdown from './pages/BlogAddMarkdown';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/add" element={<BlogAdd />} />
            <Route path="/blogs/add-markdown" element={<BlogAddMarkdown />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
