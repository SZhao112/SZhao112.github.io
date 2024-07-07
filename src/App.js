import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import ExploreColors from './pages/ExploreColors';
import ViewProjects from './pages/ViewProjects';
import NavigationBar from './components/NavigationBar';
import EcoFriendlyFilter from './pages/EcoFriendlyFilter'; // New

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/explore-colors" element={<ExploreColors />} />
        <Route path="/view-projects" element={<ViewProjects />} />
        <Route path="/eco-friendly-filter" element={<EcoFriendlyFilter />} /> {/* New */}
      </Routes>
    </div>
  );
}

export default App;

