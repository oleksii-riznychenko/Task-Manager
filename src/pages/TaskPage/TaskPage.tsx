import {JSX, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {readTasks} from "../../store/reducers/tasks/TasksActionCreator";
import {TaskTable} from "../../components/TaskTable/TaskTable";
import "./TaskPage.scss";
import {Button} from "react-bootstrap";
import {TaskActionModal} from "../../components/TaskActionModal/TaskActionModal";

export const TaskPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector(state => state.tasks);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    dispatch(readTasks());
  }, [dispatch]);

  return (
    <div className='task-page'>
      <div className='task-page__header'>
        <h4 className='task-page__title'>Task list</h4>
        <Button variant="secondary" onClick={handleShow}>+</Button>
      </div>
      {tasks && <TaskTable tasks={tasks} />}
      <TaskActionModal show={showModal} handleClose={handleClose} />
    </div>
  );
}
