import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AllExpenses from './components/AllExpenses';
import RecentActivity from './components/RecentActivity';
import Main from './components/Main';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ProtectedRoute Component={Main} />}>
          <Route index element={<Dashboard />} />
          <Route path="activity" element={<RecentActivity />} />
          <Route path="all" element={<AllExpenses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
