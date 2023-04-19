import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

const GroupInvites = () => {
  return (
      <div className='d-flex'>
          <Sidebar />
          <div className='stats container'>
              <div className="navigation w-100 pb-2">
                  <Navbar title={'Group Invites'} />
              </div>

              <div>
                  <div className="d-flex justify-content-between align-items-center">
                      <p className="fw-bold fs-2">3 Group Invites</p>
                      <div className='d-flex'>
                          <button type="button" class="btn btn-warning d-flex align-items-center text-light">
                              <i class="bi bi-envelope-paper fs-4 me-1"></i>
                              <small>Group Invites</small>
                          </button>
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
                                      <th scope="col">Group Description</th>
                                      <th scope="col">Status</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <th scope="row">1</th>
                                      <td>
                                          <a href="">
                                              My Group
                                          </a>
                                      </td>
                                      <td>Otto</td>
                                      <td>Member</td>
                                      <td>
                                          <button className="btn btn-danger">Pending</button>
                                      </td>
                                  </tr>
                                  <tr>
                                      <th scope="row">2</th>
                                      <td>
                                          <a href="">
                                              My Group
                                          </a>
                                      </td>
                                      <td>Otto</td>
                                      <td>Member</td>
                                      <td>
                                          <button className="btn btn-danger">Pending</button>
                                      </td>
                                  </tr>
                                  <tr>
                                      <th scope="row">3</th>
                                      <td>
                                          <a href="">
                                              My Group
                                          </a>
                                      </td>
                                      <td>Otto</td>
                                      <td>Member</td>
                                      <td>
                                          <button className="btn btn-danger">Pending</button>
                                      </td>
                                  </tr>
                                  <tr>
                                      <th scope="row">4</th>
                                      <td>
                                          <a href="">
                                              My Group
                                          </a>
                                      </td>
                                      <td>Otto</td>
                                      <td>Member</td>
                                      <td>
                                          <button className="btn btn-danger">Pending</button>
                                      </td>
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

export default GroupInvites