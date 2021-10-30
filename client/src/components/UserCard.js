import React from "react";
import { Card,Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUser } from "../js/action/userAction";
import EditModal from "./EditModal";

const UserCard = ({user}) => {
    const dispatch = useDispatch()
  return (
    <div>
      <Card style={{ width: "18rem" }} className="text-center m-3">
        <p className="avatar mx-auto mt-2">{user.name[0]}</p>
        <Card.Body>
          <Card.Title>{user.name + " " + user.lastName}</Card.Title>
          <Card.Text>
            {user.email} <br/>
            {user.phone}
          </Card.Text>
          <EditModal user={user}/>
          <Button className="mt-2" variant="danger" onClick={() => dispatch(deleteUser(user._id))}>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
