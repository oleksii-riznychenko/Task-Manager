import React, {JSX, useCallback, useMemo} from "react";
import * as yup from 'yup';
import * as formik from 'formik';
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import {TaskActionModalTypes} from "./TaskActionModal.types";
import {IStatus} from "../../models/IStatus";
import {ITask} from "../../models/ITask";
import {useAppDispatch} from "../../hooks/redux";
import {createTask, updateTask} from "../../store/reducers/tasks/TasksActionCreator";
import './TaskActionModal.scss';

export const TaskActionModal = ({ show, handleClose, initialValues }: TaskActionModalTypes): JSX.Element => {
  const dispatch = useAppDispatch();
  const { Formik } = formik;

  const defaultInitialValues = useMemo(() => ({
    title: '',
    status: '',
    description: '',
  }), []);

  const schema = yup.object().shape({
    title: yup.string().required(),
    status: yup.string().required(),
    description: yup.string().required(),
  });

  const handleSubmit = useCallback(
    (values: ITask) => {
      if (initialValues) {
        dispatch(updateTask({...values, id: initialValues.id}));
      } else {
        dispatch(createTask(values));
      }

      handleClose();
    },
    [dispatch, handleClose, initialValues],
  );

  return (
    <Modal className='task-action-modal' show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{initialValues ? 'Edit task' : 'Create new task'}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='task-action-modal__body'>
        <Formik
          onSubmit={handleSubmit}
          validationSchema={schema}
          initialValues={(initialValues || defaultInitialValues) as ITask}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-12">
                <Form.Group as={Col} md="12" controlId="validationFormik01">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={values.title}
                    onChange={handleChange}
                    isInvalid={!!errors.title}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.title}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationFormik02">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    onChange={handleChange}
                    placeholder="Description"
                    value={values.description}
                    isInvalid={!!errors.description}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.description}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationFormik03">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    name='status'
                    aria-label="status"
                    value={values.status}
                    onChange={handleChange}
                    isInvalid={!!errors.status}
                  >
                    <option>Open this select menu</option>
                    <option value={IStatus.TODO}>{IStatus.TODO}</option>
                    <option value={IStatus.IN_PROGRESS}>{IStatus.IN_PROGRESS}</option>
                    <option value={IStatus.DONE}>{IStatus.DONE}</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.status}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Button className='task-action-modal__submit' type="submit">Send</Button>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  )
}
