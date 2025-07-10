import './App.css'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import LoanDetails from './components/loan-details/LoanDetails'
import LoanForm from './components/loan-form/LoanForm'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import PendingDues from './components/pending-dues/PendingDues'
import Expenses from './components/expenses/Expenses'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <BrowserRouter>
    <div className="app-container">
      <Header onMenuClick={toggleSidebar} />
      <div className={`main-layout ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
        <main className="main-content">
        <Routes>
          <Route path='/loan-form' element={<LoanForm />} />
          <Route path='/loan-details' element={<LoanDetails />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/expenses' element={<Expenses/>}/>
          <Route path='/pending-dues' element={<PendingDues/>}/>
          </Routes>
        </main>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App