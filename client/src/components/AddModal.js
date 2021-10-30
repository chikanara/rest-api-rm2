import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addUser } from "../js/action/userAction";

const AddModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const dispatch = useDispatch()
  const addNewUser = () => {
      dispatch(addUser({name,lastName,phone,email}))
      handleClose()
  }
  return (
    <div className="text-center">
      <Button variant="primary" onClick={handleShow}>
        Add user
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add</Modal.Title>
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
          <Button variant="primary" onClick={addNewUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddModal;
