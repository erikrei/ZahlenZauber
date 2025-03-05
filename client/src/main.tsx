import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import Dashboard from './Dashboard/Dashboard'

import './main.css'
import DashboardContentLayout from './Dashboard/DashboardContent/DashboardContentLayout'
import DashboardIndex from './Dashboard/DashboardIndex'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Navigate to="/dashboard" replace />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<DashboardIndex />} />
          <Route path=':section' element={<DashboardContentLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)