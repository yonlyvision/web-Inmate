import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Connections } from './pages/Connections';
import { Lifestyle } from './pages/Lifestyle';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;