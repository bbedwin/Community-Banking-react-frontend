import { React, useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectContext from '../../context/MainContext'
import axiosClient from '../../components/Axios'
import './Groups.css'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

const Groups = () => {
    const { userInfo, authToken, setGroups, groups } = useContext(ProjectContext)
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate()

    const getGroups = async () => {
        try {
            const response = await axiosClient.get(`/get-group-by-user-id/${userInfo.user_id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${authToken || localStorage.getItem('authToken')}`
                    }
                }
            )

            if (response.status == 200) {
                setGroups(response.data)
                setLoading(false);
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        let mounted = true;
        getGroups()
        return () => mounted = false;
    }, [])

    if (isLoading) {
        return (
            <div className="text-center fw-bold">Loadin....</div>
        )
    } else {
        return (
            <div className='d-flex'>
                <Sidebar />
                <div className='groups-stats'>
                    <div className="navigation w-100 pb-2">
                        <Navbar title={'Groups'} />
                    </div>

                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="fw-bold fs-2">{groups.length} Group(s)</p>
                            <div className="input-group my-5 w-50 mx-auto">
                                <input type="search" name='group-name' className="form-control" placeholder="group name" />
                                <button className="btn btn-outline-success" type="button" id="button-addon2">Search</button>
                            </div>
                        </div>

                        <div>
                            <div className="card groups-list">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Group Name</th>
                                            <th scope="col">Group Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {groups.map((group, i) => {
                                            return (
                                                <tr key={i + 1}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>
                                                        <a href="/group/" onClick={(e) => { e.preventDefault(); navigate(`/group/${group.id}`) }}>
                                                            {group.group_name}
                                                        </a>
                                                    </td>
                                                    <td>{group.group_description}</td>
                                                </tr>
                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Groups