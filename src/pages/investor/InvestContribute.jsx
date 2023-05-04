import { React, useState, useEffect } from 'react';
import axiosClient from '../../components/Axios';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import './Contribute.css';

const InvestContribute = () => {

  const [loading, setLoading] = useState(true)
  const [groupLoans, setGroupLoans] = useState([])
  const [showContribute, setShowContribute] = useState(false);
  const [showDeposit, setShowDeposit] = useState(false);
  const [showLoanRequest, setShowLoanRequest] = useState(false);

  const handleContributeClick = () => {
    setShowContribute(!showContribute);
    setShowDeposit(false);
    setShowLoanRequest(false);
  };

  const handleDepositClick = () => {
    setShowDeposit(!showDeposit);
    setShowContribute(false);
    setShowLoanRequest(false);
  };

  const handleLoanRequestClick = () => {
    setShowLoanRequest(!showLoanRequest);
    setShowContribute(false);
    setShowDeposit(false);
  };

  async function getGroupLoans() {
    const response = await axiosClient.get(`/group-loan-apply/`,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )

    console.log(response.data)
    setGroupLoans(response.data)
    setLoading(false);
  }

  useEffect(() => {
    let mounted = true;
    getGroupLoans()
    return () => mounted = false;
  }, [])

  return (
    <div className='invest-contribute-bg'>
      <div className='invest-contribute-content'>
        <div className='pb-2'>
          <NavigationBar />
        </div>
        <div className='container-fluid '>
            <div className='card '>
                <div className='row'>
                    <div className='col-sm-6'>
                    <p className='fs-2 fw-bold'>Worth For Trust</p>
                    <p>Invest Now for better tomorrow</p>

                    </div>
                    <div className='col-sm-6'>
                    <div className='row'>

                        <div className='card col-md-3 m-3' style={{backgroundColor:'#884896',color:'white'}}>
                            <h5>$ 3450</h5>
                            <p>Your Account Balance</p>
                        </div>
                        <div className='card col-md-3 m-3' style={{backgroundColor:'#4577b5',color:'white'}}>
                            <h5>$ 1450</h5>
                            <p>Amount Contributed</p>

                        </div>
                        </div>
                    </div>
                </div>
            </div><br />
          <div className='row'>
            <div className='col-sm-4'>
              <div className='card  align-items-center' onClick={handleContributeClick}>
                <div className='card-body'>
                  <h5 className='card-title'>Contribute</h5>
                  <div id='shake'>
                   <h4>⇣⇣⇣</h4> 
                  </div>

                 
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='card align-items-center' onClick={handleDepositClick}>
                <div className='card-body'>
                  <h5 className='card-title'>Deposit</h5>
                  <div id='shake'>
                   <h4>⇣⇣⇣</h4> 
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='card align-items-center' onClick={handleLoanRequestClick}>
                <div className='card-body'>
                  <h5 className='card-title'>Group Loan Application Request</h5>
                  <div id='shake'>
                   <h4>⇣⇣⇣</h4> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container' style={{padding:'10px'}}>
             <div className='col-md-12'>
             <div className='card'>
         {showContribute && (
                    <div className='card-details'>
                       <div className="card-body">
                       <center> <h3><b>Contribute</b></h3></center>
                        <form className=''>
                            <div className="mb-3">
                                <label htmlFor="fromdate" className="form-label">From Date</label>
                                <input type="text" className="form-control" id="fromdate" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Amount" className="form-label">Amount</label>
                                <input type="text" className="form-control" id="Amount" placeholder='Please Enter Your Contribution Amount in $' />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="mop">Mode Of Payment</label>
                                <select className="form-select" id='mop' name='mop'>                                  <option value="Active">Active</option>
                                    <option value="default">----------Select-----------</option>
                                    <option value="UPI">UPI</option>
                                    <option value="Bank">Bank</option>
                                    <option value="Neft">Neft</option>
                            </select>
                            </div>
                           

                            <div className="text-center">
                                <button type="submit" className="btn btn-success">Pay</button>
                            </div>
                        </form>
                    </div>
                    </div>
                  )}
        </div>

        <div className='card'>
        {showDeposit && (
                    <div className='card-details'>
                       <div className="card-body">
                       <center> <h3><b>Deposit</b></h3></center>

                        <form className=''>
                            <div className="mb-3">
                                <label htmlFor="depositamt" className="form-label">Deposit Amount</label>
                                <input type="text" className="form-control" id="depositamt" placeholder='Please Enter Your Deposit Amount in $'/>
                            </div>
                            
                            <div className="mb-3">
                                <label className="form-label" htmlFor="mop">Mode Of Payment</label>
                                <select className="form-select" id='mop' name='mop'>                                  <option value="Active">Active</option>
                                    <option value="UPI">UPI</option>
                                    <option value="Bank">Bank</option>
                                    <option value="Neft">Neft</option>
                            </select>
                            </div>
                           

                            <div className="text-center">
                                <button type="submit" className="btn btn-success">Pay</button>
                            </div>
                        </form>
                    </div>
                    </div>
                  )}
        </div>
        <div className='card'>
            
        {showLoanRequest && (
                    <div className='card-details'>
                            <center> <h3><b>Group Loan Application Request  </b></h3></center>

                       <div className="card-body">
                       <table className="table table-hover">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Group Name</th>
                                <th scope="col">Loan Amount</th>
                                <th scope="col">Loan Period</th>
                                <th scope="col">Percentage Return</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                      <tbody>
                        {groupLoans.map((loan, i) => {
                          return (
                            <tr key={i + 1}>
                              <th scope="row">{i + 1}</th>
                              <td>{loan.group_id}</td>
                              <td>{loan.loan_amount}</td>
                              <td>{loan.loan_period}</td>
                              <td>{loan.percentage_return}</td>
                              <td>
                                <button type='button' className="btn btn-success">Approve</button>
                              </td>
                            </tr>
                          )
                        })}

                      </tbody>
                        </table>

                    </div>
                    </div>
                  )}
        </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default InvestContribute;





// import { React, useState } from 'react';
// import NavigationBar from '../../components/NavigationBar/NavigationBar';
// import './Contribute.css';

// const InvestContribute = () => {
//   const [showContribute, setShowContribute] = useState(false);
//   const [showDeposit, setShowDeposit] = useState(false);
//   const [showLoanRequest, setShowLoanRequest] = useState(false);

//   const handleContributeClick = () => {
//     setShowContribute(!showContribute);
//   };

//   const handleDepositClick = () => {
//     setShowDeposit(!showDeposit);
//   };

//   const handleLoanRequestClick = () => {
//     setShowLoanRequest(!showLoanRequest);
//   };

//   return (
//     <div className='invest-contribute-bg'>
//       <div className='invest-contribute-content'>
//         <div className='pb-2'>
//           <NavigationBar />
//         </div>
//         <div className='container-fluid'>
//           <div className='row'>
//             <div className='col-sm-4'>
//               <div className='card' onClick={handleContributeClick}>
//                 <div className='card-body'>
//                   <h5 className='card-title'>Contribute</h5>
                 
//                 </div>
//               </div>
//             </div>
//             <div className='col-sm-4'>
//               <div className='card' onClick={handleDepositClick}>
//                 <div className='card-body'>
//                   <h5 className='card-title'>Deposit</h5>
//                   {/* {showDeposit && (
//                     <div className='card-details'>
//                       <p className='card-text'>
//                         This is the details for Deposit
//                       </p>
//                     </div>
//                   )} */}
//                 </div>
//               </div>
//             </div>
//             <div className='col-sm-4'>
//               <div className='card' onClick={handleLoanRequestClick}>
//                 <div className='card-body'>
//                   <h5 className='card-title'>Group Loan Application Request</h5>
                  
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className='container' style={{padding:'10px'}}>
//             <div className='col-md-12'>
//             <div className='card'>
//         {showContribute && (
//                     <div className='card-details'>
//                        <div className="card-body">
//                         <form className=''>
//                             <div className="mb-3">
//                                 <label htmlFor="fromdate" className="form-label">From Date</label>
//                                 <input type="text" className="form-control" id="fromdate" />
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="Amount" className="form-label">Amount</label>
//                                 <input type="text" className="form-control" id="Amount" placeholder='Please Enter Your Contribution Amount in $' />
//                             </div>
//                             <div className="mb-3">
//                                 <label className="form-label" htmlFor="mop">Mode Of Payment</label>
//                                 <select className="form-select" id='mop' name='mop'>                                  <option value="Active">Active</option>
//                                     <option value="default">----------Select-----------</option>
//                                     <option value="UPI">UPI</option>
//                                     <option value="Bank">Bank</option>
//                                     <option value="Neft">Neft</option>
//                             </select>
//                             </div>
                           

//                             <div className="text-center">
//                                 <button type="submit" className="btn btn-success">Pay</button>
//                             </div>
//                         </form>
//                     </div>
//                     </div>
//                   )}
//         </div>

//         <div className='card'>
//         {showDeposit && (
//                     <div className='card-details'>
//                        <div className="card-body">
//                         <form className=''>
//                             <div className="mb-3">
//                                 <label htmlFor="depositamt" className="form-label">Deposit Amount</label>
//                                 <input type="text" className="form-control" id="depositamt" placeholder='Please Enter Your Deposit Amount in $'/>
//                             </div>
                            
//                             <div className="mb-3">
//                                 <label className="form-label" htmlFor="mop">Mode Of Payment</label>
//                                 <select className="form-select" id='mop' name='mop'>                                  <option value="Active">Active</option>
//                                     <option value="UPI">UPI</option>
//                                     <option value="Bank">Bank</option>
//                                     <option value="Neft">Neft</option>
//                             </select>
//                             </div>
                           

//                             <div className="text-center">
//                                 <button type="submit" className="btn btn-success">Pay</button>
//                             </div>
//                         </form>
//                     </div>
//                     </div>
//                   )}
//         </div>
//         <div className='card'>
//         {showLoanRequest && (
//                     <div className='card-details'>
//                        <div className="card-body">
//                        <table className="table table-hover">
//                             <thead>
//                                 <tr>
//                                     <th scope="col">#</th>
//                                     <th scope="col">Group Id</th>
//                                     <th scope="col">Group Admin</th>
//                                     <th scope="col">Amount</th>
//                                     <th scope="col">Date Of Applied</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
                                
//                                             <tr>
//                                                 <th scope="row">1</th>
//                                                 <td>grp001</td>
//                                                 <td>Nasim</td>
//                                                 <td>$ 50000</td>
//                                                 <td>03-05-2023</td>
//                                             </tr>
                                        
                                
//                             </tbody>
//                         </table>

//                     </div>
//                     </div>
//                   )}
//         </div>

//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InvestContribute;












// import { React, useState, useContext, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import ProjectContext from '../../context/MainContext'
// import axiosClient from '../../components/Axios'
// import NavigationBar from '../../components/NavigationBar/NavigationBar'
// import { toast } from 'react-toastify'
// import './Contribute.css'

// const InvestContribute = () => {

//     return (
//         <div className='invest-contribute-bg'>
//             <div className='invest-contribute-content'>
//                 <div className="pb-2">
//                     <NavigationBar />
//                 </div>
//                 <div className='container-fluid'>
//                     <div class="row">
//                         <div class="col-sm-4">
//                             <div class="card">
//                                 <div class="card-body">
//                                     <h5 class="card-title">Contribute</h5>
//                                     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                   
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col-sm-4">
//                             <div class="card">
//                                 <div class="card-body">
//                                     <h5 class="card-title">Deposit</h5>
//                                     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col-sm-4">
//                             <div class="card">
//                                 <div class="card-body">
//                                     <h5 class="card-title">Group Loan Application Request</h5>
//                                     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                         
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default InvestContribute



