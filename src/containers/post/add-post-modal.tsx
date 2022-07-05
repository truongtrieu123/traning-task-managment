import { useAppDispatch, useAppSelector } from "utils/hooks";
import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { createNewPost, hideAddPostModal } from "store/actions";

const AddPostModal = () => {
  const postStore = useAppSelector((state)=>state.postReducer);
  const dispatch = useAppDispatch();

  const [data, setData] = useState({ title: "", description: "", url: "" });
  const hideDialog = () => {
    dispatch(hideAddPostModal());
  };

  const handleFieldChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: data.title,
      description: data.description,
      url: data.url,
    };
    dispatch(createNewPost(newPost));
    setData({ title: "", description: "", url: "" });
    dispatch(hideAddPostModal());
  };
  return (
    <Modal show={postStore.showAddPostModal} onHide={() => hideDialog()}>
      <Modal.Header closeButton>
        <Modal.Title>What do you want to do?</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              value={data.title}
              onChange={handleFieldChange}
              aria-describedby="title-help"
              required
            ></Form.Control>
            <Form.Text id="title-help" muted>
              Required
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="mt-2"
              as="textarea"
              name="description"
              value={data.description}
              placeholder="Description"
              onChange={handleFieldChange}
              rows={3}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="mt-2"
              type="text"
              name="url"
              value={data.url}
              placeholder="Youtube url"
              onChange={handleFieldChange}
            ></Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => hideDialog()}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            LearnIt
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddPostModal;
