// React Router
import { Routes, Route } from 'react-router-dom'

// Layouts
import DashboardLayout from '@/layouts/DashboardLayout'

// Pages
import Home from '@/pages/Home'
import Agents from './pages/Agents'
import AgentsCreate from './pages/AgentsCreate'
import Agent from './pages/Agent'
import Jobs from './pages/Jobs'
import JobsCreate from './pages/JobsCreate'
import Admins from './pages/Admins'
import Login from './pages/authentication/Login'
import ForgotPassword from './pages/authentication/ForgotPassword'
import ErrorPage from './pages/ErrorPage'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/agents/create" element={<AgentsCreate />} />
          <Route path="/agents/:id" element={<Agent />} />
          <Route path="/metiers" element={<Jobs />} />
          <Route path="/metiers/create" element={<JobsCreate />} />
          <Route path="/users" element={<Admins />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
