import { useAppDispatch, useAppSelector } from "utils/hooks";
import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { editPost, hideEditPostModal } from "store/actions";
import { PostStatus } from "types/post.type";

interface IProps{
  _id:string, 
  status:PostStatus, 
  title:string,
  description:string, 
  url:string,
}

const EditPostModal = ({ _id, status, title, description, url }:IProps) => {
  const postStore = useAppSelector((state) => state.postReducer);
  const dispatch = useAppDispatch();

  const [data, setData] = useState({
    _id: _id,
    title: title,
    description: description,
    url: url,
    status: status,
  });
  const hideDialog = () => {
    dispatch(hideEditPostModal());
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
      status: data.status,
    };
    dispatch(editPost(_id, newPost));
    setData({ ...data,title: "", description: "", url: "" });
    dispatch(hideEditPostModal());
  };

  return (
    <Modal show={postStore.showEditPostModal} onHide={() => dispatch(hideEditPostModal())}>
      <Modal.Header closeButton onHide={() => dispatch(hideEditPostModal())}>
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
          <Form.Group>
            <Form.Control
              className="mt-2"
              as="select"
              name="status"
              defaultValue={data.status}
              onChange={handleFieldChange}
              required
            >
              <option value="To Learn">TO LEARN</option>
              <option value="Learning">LEARNING</option>
              <option value="Learned">LEARNED</option>
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => hideDialog()}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default EditPostModal;
