import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import InvitoryBoxHome from './pages/InvitoryBoxHome/InvitoryBoxHome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InvitoryBoxHome />
  </StrictMode>
)
