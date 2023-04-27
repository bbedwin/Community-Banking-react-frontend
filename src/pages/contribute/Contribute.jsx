import { React, useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import Navbar from '../../components/navbar/Navbar'
import './Contribute.css'

const Contribute = () => {
    const { authToken, userInfo } = useContext(ProjectContext)
    const navigate = useNavigate()

    const { group_id } = useParams();

    const [amount, setAmount] = useState(0)
    const [paymentMode, setPaymentMode] = useState('')

    const contribute = async (e) => {
        e.preventDefault()

        try {
            const response = await axiosClient.post('member-amount-saving/', {
                "pay_amount": amount,
                "member_id": userInfo.user_id,
                "group_id": group_id,
                "payment_mode": paymentMode
            })

            if (response.status == 200) {
                navigate('/group')
            }
        } catch (error) {
            console.log(error.response.data)
        }
    }
    return (
        <div className='contribute-bg'>
            <div className='create-group-content'>
                <div className="pb-2">
                    <Navbar title={'Create a Group'} />
                </div>

                <div className='bg-div d-flex flex-column justify-content-center align-items-center pt-2'>
                    <div className='fs-4 text-center w-100'>
                        <p className='fs-2 fw-bold'>Apply for a loan</p>
                        <p>
                            Create a group, invite members and start saving for a better future
                        </p>
                    </div>

                    <div className="card" style={{ width: "30rem" }}>
                        <h3 className="text-center card-header">Contribute to group</h3>
                        <div className="card-body">
                            <form onSubmit={contribute}>
                                <div className="mb-3">
                                    <label htmlFor="amount" className="form-label">Amount</label>
                                    <input type="number" className="form-control" id="amount" onChange={(e) => setAmount(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="paymentMode" className="form-label">Mode of payment</label>
                                    <select className="form-select" id='paymentMode' onChange={(e) => setPaymentMode(e.target.value)}>
                                        <option key="1" value="M-Pesa">M-Pesa</option>
                                        <option key="2" value="Bank">Bank</option>
                                    </select>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-success">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contribute