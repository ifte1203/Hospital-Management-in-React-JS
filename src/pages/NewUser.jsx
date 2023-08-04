import React from "react";
import { Button, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const NewUser = () => {
  return (
    <>
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg  px-5">
        <Navbar />

        <div className="card">
          <div className="card-header">
            <h6>User Form</h6>
          </div>
          <div className="card-body">
            <Row>
              <div className="col-lg-6 mx-auto">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group">
                  <label>Last</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Last Name"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Last Name"
                  />
                </div>
                <Button>Create</Button>
              </div>
            </Row>
          </div>
        </div>
      </main>
    </>
  );
};

export default NewUser;
