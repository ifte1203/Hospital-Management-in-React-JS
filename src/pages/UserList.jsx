import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();
  return (
    <>
      <Sidebar />

      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <Navbar />
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-header py-2 d-sm-flex align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">User</h6>
                  <Button
                    onClick={() => navigate("/")}
                    className="btn btn-primary"
                  >
                    Create User
                  </Button>
                </div>
                <div className="ms-md-auto pe-md-3 d-flex  align-items-center justify-content-center p-4 ">
                  <div className="input-group">
                    <span className="input-group-text text-body">
                      <i className="fas fa-search" aria-hidden="true"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control search"
                      placeholder="Type here..."
                    />
                  </div>
                  <button className="btn btn-primary mt-3 ">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
                <div className="card-body px-0 pt-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th width="20%" className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Author
                          </th>
                          <th width="20%" className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Function
                          </th>
                          <th width="20%" className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Status
                          </th>
                          <th width="20%" className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Employed
                          </th>
                          <th width="20%" className="text-secondary opacity-7" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/team-2.jpg"
                                  className="avatar avatar-sm me-3"
                                  alt="user1"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">John Michael</h6>
                                <p className="text-xs text-secondary mb-0">
                                  john@creative-tim.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">
                              Manager
                            </p>
                            <p className="text-xs text-secondary mb-0">
                              Organization
                            </p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-success">
                              Online
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              23/04/18
                            </span>
                          </td>
                          <td className="align-middle">
                            <a
                              href="javascript:;"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/team-3.jpg"
                                  className="avatar avatar-sm me-3"
                                  alt="user2"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">Alexa Liras</h6>
                                <p className="text-xs text-secondary mb-0">
                                  alexa@creative-tim.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">
                              Programator
                            </p>
                            <p className="text-xs text-secondary mb-0">
                              Developer
                            </p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-secondary">
                              Offline
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              11/01/19
                            </span>
                          </td>
                          <td className="align-middle">
                            <a
                              href="javascript:;"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/team-4.jpg"
                                  className="avatar avatar-sm me-3"
                                  alt="user3"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">
                                  Laurent Perrier
                                </h6>
                                <p className="text-xs text-secondary mb-0">
                                  laurent@creative-tim.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">
                              Executive
                            </p>
                            <p className="text-xs text-secondary mb-0">
                              Projects
                            </p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-success">
                              Online
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              19/09/17
                            </span>
                          </td>
                          <td className="align-middle">
                            <a
                              href="javascript:;"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/team-3.jpg"
                                  className="avatar avatar-sm me-3"
                                  alt="user4"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">Michael Levi</h6>
                                <p className="text-xs text-secondary mb-0">
                                  michael@creative-tim.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">
                              Programator
                            </p>
                            <p className="text-xs text-secondary mb-0">
                              Developer
                            </p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-success">
                              Online
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              24/12/08
                            </span>
                          </td>
                          <td className="align-middle">
                            <a
                              href="javascript:;"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/team-2.jpg"
                                  className="avatar avatar-sm me-3"
                                  alt="user5"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">Richard Gran</h6>
                                <p className="text-xs text-secondary mb-0">
                                  richard@creative-tim.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">
                              Manager
                            </p>
                            <p className="text-xs text-secondary mb-0">
                              Executive
                            </p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-secondary">
                              Offline
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              04/10/21
                            </span>
                          </td>
                          <td className="align-middle">
                            <a
                              href="javascript:;"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/team-4.jpg"
                                  className="avatar avatar-sm me-3"
                                  alt="user6"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">Miriam Eric</h6>
                                <p className="text-xs text-secondary mb-0">
                                  miriam@creative-tim.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">
                              Programtor
                            </p>
                            <p className="text-xs text-secondary mb-0">
                              Developer
                            </p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-secondary">
                              Offline
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              14/09/20
                            </span>
                          </td>
                          <td className="align-middle">
                            <a
                              href="javascript:;"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-header pb-0">
                  <h6>Projects table</h6>
                </div>
                <div className="card-body px-0 pt-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center justify-content-center mb-0">
                      <thead>
                        <tr>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Project
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Budget
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Status
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">
                            Completion
                          </th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-spotify.svg"
                                  className="avatar avatar-sm rounded-circle me-2"
                                  alt="spotify"
                                />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-sm">Spotify</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-weight-bold mb-0">
                              $2,500
                            </p>
                          </td>
                          <td>
                            <span className="text-xs font-weight-bold">
                              working
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center justify-content-center">
                              <span className="me-2 text-xs font-weight-bold">
                                60%
                              </span>
                              <div>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-gradient-info"
                                    role="progressbar"
                                    aria-valuenow={60}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: "60%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button className="btn btn-link text-secondary mb-0">
                              <i className="fa fa-ellipsis-v text-xs" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-invision.svg"
                                  className="avatar avatar-sm rounded-circle me-2"
                                  alt="invision"
                                />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-sm">Invision</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-weight-bold mb-0">
                              $5,000
                            </p>
                          </td>
                          <td>
                            <span className="text-xs font-weight-bold">
                              done
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center justify-content-center">
                              <span className="me-2 text-xs font-weight-bold">
                                100%
                              </span>
                              <div>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-gradient-success"
                                    role="progressbar"
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: "100%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button
                              className="btn btn-link text-secondary mb-0"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fa fa-ellipsis-v text-xs" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-jira.svg"
                                  className="avatar avatar-sm rounded-circle me-2"
                                  alt="jira"
                                />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-sm">Jira</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-weight-bold mb-0">
                              $3,400
                            </p>
                          </td>
                          <td>
                            <span className="text-xs font-weight-bold">
                              canceled
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center justify-content-center">
                              <span className="me-2 text-xs font-weight-bold">
                                30%
                              </span>
                              <div>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-gradient-danger"
                                    role="progressbar"
                                    aria-valuenow={30}
                                    aria-valuemin={0}
                                    aria-valuemax={30}
                                    style={{ width: "30%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button
                              className="btn btn-link text-secondary mb-0"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fa fa-ellipsis-v text-xs" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-slack.svg"
                                  className="avatar avatar-sm rounded-circle me-2"
                                  alt="slack"
                                />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-sm">Slack</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-weight-bold mb-0">
                              $1,000
                            </p>
                          </td>
                          <td>
                            <span className="text-xs font-weight-bold">
                              canceled
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center justify-content-center">
                              <span className="me-2 text-xs font-weight-bold">
                                0%
                              </span>
                              <div>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-gradient-success"
                                    role="progressbar"
                                    aria-valuenow={0}
                                    aria-valuemin={0}
                                    aria-valuemax={0}
                                    style={{ width: "0%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button
                              className="btn btn-link text-secondary mb-0"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fa fa-ellipsis-v text-xs" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-webdev.svg"
                                  className="avatar avatar-sm rounded-circle me-2"
                                  alt="webdev"
                                />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-sm">Webdev</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-weight-bold mb-0">
                              $14,000
                            </p>
                          </td>
                          <td>
                            <span className="text-xs font-weight-bold">
                              working
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center justify-content-center">
                              <span className="me-2 text-xs font-weight-bold">
                                80%
                              </span>
                              <div>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-gradient-info"
                                    role="progressbar"
                                    aria-valuenow={80}
                                    aria-valuemin={0}
                                    aria-valuemax={80}
                                    style={{ width: "80%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button
                              className="btn btn-link text-secondary mb-0"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fa fa-ellipsis-v text-xs" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-xd.svg"
                                  className="avatar avatar-sm rounded-circle me-2"
                                  alt="xd"
                                />
                              </div>
                              <div className="my-auto">
                                <h6 className="mb-0 text-sm">Adobe XD</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-sm font-weight-bold mb-0">
                              $2,300
                            </p>
                          </td>
                          <td>
                            <span className="text-xs font-weight-bold">
                              done
                            </span>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex align-items-center justify-content-center">
                              <span className="me-2 text-xs font-weight-bold">
                                100%
                              </span>
                              <div>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-gradient-success"
                                    role="progressbar"
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: "100%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <button
                              className="btn btn-link text-secondary mb-0"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fa fa-ellipsis-v text-xs" />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer pt-3  ">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <div className="copyright text-center text-sm text-muted text-lg-start">
                    © , made with <i className="fa fa-heart" /> by
                    <a
                      href="https://www.creative-tim.com"
                      className="font-weight-bold"
                      target="_blank"
                    >
                      Creative Tim
                    </a>
                    for a better web.
                  </div>
                </div>
                <div className="col-lg-6">
                  <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com"
                        className="nav-link text-muted"
                        target="_blank"
                      >
                        Creative Tim
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com/presentation"
                        className="nav-link text-muted"
                        target="_blank"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com/blog"
                        className="nav-link text-muted"
                        target="_blank"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com/license"
                        className="nav-link pe-0 text-muted"
                        target="_blank"
                      >
                        License
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
};

export default UserList;
