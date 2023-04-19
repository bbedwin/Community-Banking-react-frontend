import React from 'react'
import './Groups.css'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

const Groups = () => {
    return (
        <div className='d-flex'>
            <Sidebar />
            <div className='stats container'>
                <div className="navigation w-100 pb-2">
                    <Navbar title={'Groups'} />
                </div>

                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="fw-bold fs-2">500 Groups</p>
                        <div className='d-flex'>
                            <button type="button" class="btn btn-success d-flex align-items-center me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <i class="bi bi-plus fs-4 me-1"></i>
                                <small>Create Group</small>
                            </button>
                            <a href="/invites">
                                <button type="button" class="btn btn-warning d-flex align-items-center text-light">
                                    <i class="bi bi-envelope-paper fs-4 me-1"></i>
                                    <small>Group Invites</small>
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Modal */}
                    <div class=" text-start modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Create Group</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="mb-3">
                                            <label for="groupType" class="form-label">Grou Type</label>
                                            <select class="form-select" id='groupType' name='groupType'>
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label for="groupName" class="form-label">Group Name</label>
                                            <input type="text" class="form-control" id="groupName" />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label" for="groupDescription">Group Description</label>
                                            <input type="text" class="form-control" id="groupDescription" />
                                        </div>
                                        <div class="mb-3 form-check">
                                            <input type="checkbox" class="form-check-input" id="groupStatus" />
                                            <label class="form-check-label" for="groupStatus">Active</label>
                                        </div>
                                    </form>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-success">Save</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="input-group my-5">
                            <input type="search" name='group-name' class="form-control" placeholder="group name" />
                            <button class="btn btn-outline-success" type="button" id="button-addon2">Search</button>
                        </div>

                        <div className="card groups-list">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Group Name</th>
                                        <th scope="col">Group Admin</th>
                                        <th scope="col">Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>
                                            <a href="/group">
                                                My Group
                                            </a>
                                        </td>
                                        <td>Otto</td>
                                        <td>Member</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>
                                            <a href="/group">
                                                My Group
                                            </a>
                                        </td>
                                        <td>Otto</td>
                                        <td>Member</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>
                                            <a href="/group">
                                                My Group
                                            </a>
                                        </td>
                                        <td>Otto</td>
                                        <td>Member</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>
                                            <a href="/group">
                                                My Group
                                            </a>
                                        </td>
                                        <td>Otto</td>
                                        <td>Member</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Groups