import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {  editUser } from "../js/action/userAction";

const EditModal = ({user}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState(user.name);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const dispatch = useDispatch()
  const updateUser = () => {
      dispatch(editUser(user._id,{name,lastName,phone,email}))
      handleClose()
  }
  return (
    <div className="text-center">
      <Button variant="success" onClick={handleShow}>
        Edit user
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              name=""
              id=""
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="">Phone</label>
            <input
              type="Number"
              name=""
              id=""
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditModal;
