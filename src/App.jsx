import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <main className="flex-grow">
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;