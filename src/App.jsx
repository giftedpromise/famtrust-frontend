import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './components/Layout/MainLayout';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <div
                className="flex-col h-screen w-[100%] overflow-auto"
                style={{
                  backgroundColor:
                    'var(--Color-Style-Primary-Roles-Pri-container, #E2DDFF)',
                }}
              >
                <Dashboard />
              </div>
            }
          />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
