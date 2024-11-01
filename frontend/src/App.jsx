
import React, { useState } from 'react';
import Signup from './pages/Signup/Signup'; 
import Home from './pages/Home/Home';

import Payment from './pages/Payment/Payment'; 
import './index.css';

const App = () => {
    const [currentView, setCurrentView] = useState('home'); 
 
 

    return (
        <div>
            
            {currentView === 'home' && <Home onNavigate={setCurrentView} />}
            {currentView === 'signup' && <Signup onNavigate={setCurrentView} />}
            {currentView === 'payment' && <Payment onNavigate={setCurrentView}/>}
              
            
       
           

            <div className="navigation-buttons">
                <button onClick={() => setCurrentView('home')}>Home</button>
                <button onClick={() => setCurrentView('signup')}>Signup</button>
              
            </div>
        </div>
    );
};

export default App;






