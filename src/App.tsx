import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Redirect root "/" to "/search" */}
            <Route path="/" element={<Navigate to="/search" replace />} />
            
            <Route path="/search" element={<SearchPage />} />
            <Route path="/home" element={<HomePage />} /> {/* Optional if you still want /home */}
            <Route path="/detail/:id" element={<DetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
