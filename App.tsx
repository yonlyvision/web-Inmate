import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Connections } from './pages/Connections';
import { Lifestyle } from './pages/Lifestyle';

import { Biography } from './pages/Biography';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/biography" element={<Biography />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;