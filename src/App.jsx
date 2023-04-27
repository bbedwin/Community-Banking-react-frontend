import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Dashboard from './pages/dashboard/Dashboard'
import CreateOptions from './pages/create_options/CreateOptions'
import Groups from './pages/groups/Groups'
import GroupInvites from './pages/group-invites/GroupInvites'
import Loans from './pages/loans/Loans'
import CreateGroup from './pages/create_group/CreateGroup'
import JoinGroup from './pages/join_group/JoinGroup'
import Group from './pages/group/Group'
import Profile from './pages/profile/Profile'
import ApplyLoan from './pages/apply_loan/ApplyLoan'
import Contribute from './pages/contribute/Contribute'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/signin' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/' element={<CreateOptions />}></Route>
        <Route path='/groups' element={<Groups />}></Route>
        <Route path='/group/:id' element={<Group />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/create-group' element={<CreateGroup />}></Route>
        <Route path='/join-group' element={<JoinGroup />}></Route>
        <Route path='/invites' element={<GroupInvites />}></Route>
        <Route path='/apply-loan/:group_id' exact element={<ApplyLoan />}></Route>
        <Route path='/contribute/:group_id' exact element={<Contribute />}></Route>
        <Route path='/loans' element={<Loans />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
    </div>
  )
}

export default App
