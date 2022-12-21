import React from 'react';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Breadcrumbs from './components/Breadcrumbs';
import Ammenities from './components/Ammenities';
import Footer from './components/Footer';
import { inject } from '@vercel/analytics';

function App() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Breadcrumbs/>
      <Ammenities/>
      <Footer/>
    </div>
  );
}

export default App;
inject();
