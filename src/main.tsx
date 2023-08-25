import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Login from './components/authentication/Login.tsx'
import Signup from './components/authentication/Signup.tsx'
import Dashboard from './components/dashboard/Dashboard.tsx'
import { AuthProvider, RequireAuth } from 'react-auth-kit'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider authType={'cookie'} authName={'_auth'} cookieDomain={window.location.hostname}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={
            <RequireAuth loginPath='/login'> 
              <Dashboard/>
            </RequireAuth>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
