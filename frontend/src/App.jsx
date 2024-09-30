import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/Signup'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './pages/TaskManagement/Dashboard'
import CreateTaskForm from './pages/TaskManagement/CreateTaskForm'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='createtask' element={<CreateTaskForm />} />
          <Route path='updatetask/:id' element={<CreateTaskForm />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App

