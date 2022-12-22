import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'app/store';
import Dashboard from 'pages/dashboard';
import Activity from 'pages/activity';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
