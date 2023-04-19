import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Dashboard from './pages/dashboard/Dashboard'
import Groups from './pages/groups/Groups'
import GroupInvites from './pages/group-invites/GroupInvites'
import Loans from './pages/loans/Loans'
import Group from './pages/group/Group'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/signin' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/groups' element={<Groups />}></Route>
        <Route path='/group' element={<Group />}></Route>
        <Route path='/invites' element={<GroupInvites />}></Route>
        <Route path='/loans' element={<Loans />}></Route>
      </Routes>
    </div>
  )
}

export default App
