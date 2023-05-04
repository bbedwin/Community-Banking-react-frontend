import { Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes';
import PersistLogin from './components/PersistLogin';
import './App.css'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Dashboard from './pages/dashboard/Dashboard'
import CreateOptions from './pages/create_options/CreateOptions'
import Groups from './pages/groups/Groups'
import Loans from './pages/loans/Loans'
import CreateGroup from './pages/create_group/CreateGroup'
import JoinGroup from './pages/join_group/JoinGroup'
import Group from './pages/group/Group'
import Profile from './pages/profile/Profile'
import ApplyLoan from './pages/apply_loan/ApplyLoan'
import Contribute from './pages/contribute/Contribute'
import LandingPage from './pages/LandingPage/LandingPage'
import RepayLoan from './pages/repay_loan/RepayLoan';
import LoanStatements from './pages/loan_statements/LoanStatements';
import LoanRepayments from './pages/loan_repayments/LoanRepayments';
import CreditIntrest from './pages/credit_interest/CreditIntrest';


import LRepaymentSchedule from './pages/loan_repayment_schedule/loan_repayment_schedule';
import InvestContribute from './pages/investor/InvestContribute';
import GroupLoan from './pages/group_loan/GroupLoan';
  
function App() {

  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
        theme="light"
      />
      <Routes>
        <Route path='/signin' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/loan-repayment-schedule' element={<LRepaymentSchedule />}></Route>


        <Route element={<PersistLogin />}>
          <Route element={<ProtectedRoutes />}>
            <Route path='/groups' element={<Groups />}></Route>
            <Route path='/home' element={<CreateOptions />} />
            <Route path='/group/:id' element={<Group />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/create-group' element={<CreateGroup />}></Route>
            <Route path='/join-group' element={<JoinGroup />}></Route>
            <Route path='/apply-loan/:group_id' exact element={<ApplyLoan />}></Route>
            <Route path='/contribute/:group_id' exact element={<Contribute />}></Route>
            <Route path='/loans' element={<Loans />}></Route>
            <Route path='/repay-loan' element={<RepayLoan />}></Route>
            <Route path='/group-loan' element={<GroupLoan />}></Route>
            <Route path='/loan-statement' element={<LoanStatements />}></Route>
            <Route path='/loan-repayments' element={<LoanRepayments />}></Route>
            <Route path='/credit-interest' element={<CreditIntrest />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/invest-contribute' element={<InvestContribute />}></Route>

          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
