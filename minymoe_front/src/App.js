// App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import DessertMenu from './components/DessertMenu';
import NoticeBoard from './components/NoticeBoard';
import './App.css';

function App() {
    const [view, setView] = useState('home'); // ✅ 'home' or 'dessert'

    return (
        <div className="app-wrapper">
            <Navbar onNavigate={setView} />
            <main className="main-content">
                {view === 'home' && <Home />}
                {view === 'dessert' && <DessertMenu />}
                {view === 'notice' && <NoticeBoard />}
            </main>
            <Footer />
        </div>
    );
}

export default App;
