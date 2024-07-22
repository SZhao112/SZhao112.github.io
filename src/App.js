import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import ExploreColors from './pages/ExploreColors';
import ViewProjects from './pages/ViewProjects';
import NavigationBar from './components/NavigationBar';
import EcoFriendlyFilter from './pages/EcoFriendlyFilter';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <NavigationBar />
      <div className="language-buttons">
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('fr')}>Français</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/explore-colors" element={<ExploreColors />} />
        <Route path="/view-projects" element={<ViewProjects />} />
        <Route path="/eco-friendly-filter" element={<EcoFriendlyFilter />} />
      </Routes>
    </div>
  );
}

export default App;



