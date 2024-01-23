import React, {JSX, useCallback, useState} from "react";
import {TaskCardProps} from "./TaskCard.types";
import {Button, Card} from "react-bootstrap";
import './TaskCard.scss';
import {useAppDispatch} from "../../hooks/redux";
import {deleteTask} from "../../store/reducers/tasks/TasksActionCreator";
import {TaskActionModal} from "../TaskActionModal/TaskActionModal";

export const TaskCard = ({task}: TaskCardProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleRemove = useCallback(
    () => {
      dispatch(deleteTask(task));
    },
    [dispatch, task],
  );

  return (
    <Card className='task-card'>
      <Card.Body>
        <Card.Title>{task.title}</Card.Title>
        <Card.Text>
          {task.description}
        </Card.Text>
        <div className='task-card__actions'>
          <Button variant="primary" onClick={handleShow}>Edit</Button>
          <Button variant="danger" onClick={handleRemove}>Remove</Button>
        </div>
        <TaskActionModal initialValues={task} show={showModal} handleClose={handleClose} />
      </Card.Body>
    </Card>
  )
};
