import { React, useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectContext from '../../context/MainContext'
import { toast } from 'react-toastify'
import axiosClient from '../../components/Axios'
import './Groups.css'
import NavigationBar from '../../components/NavigationBar/NavigationBar'

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
            toast.warn(error.response.data.error)
            navigate("/")
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
            <div className="text-center fw-bold min-vh-100">Loadin....</div>
        )
    } else {
        return (
            <div className='d-flex min-vh-100 flex-column'>
                <NavigationBar />

                <div className='container min-vh-100'>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="fw-bold text-light fs-2">{groups.length} Group(s)</p>
                        <div className="input-group my-5 w-50">
                            <input type="search" name='group-name' className="form-control" placeholder="group name" />
                            <button className="btn btn-light" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>

                    <div className='min-vh-100'>
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
                                                    <a href="/group/" className='text-primary' onClick={(e) => { e.preventDefault(); navigate(`/group/${group.id}`) }}>
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
        )
    }
}

export default Groups