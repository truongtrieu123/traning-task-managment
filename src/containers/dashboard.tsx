import { useAppDispatch, useAppSelector } from "utils/hooks";
import React, { useContext, useEffect, useRef } from "react";
import {
  Card,
  Spinner,
  Button,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { getAllPosts, showAddPostModal } from "store/actions/post-action";
import AddPostModal from "./post/add-post-modal";
import EditPostModal from "./post/edit-post-modal";
import SinglePost from "./post/single-post";

function Dashboard() {
  const postStore = useAppSelector((state) => state.postReducer);
  const authStore = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const body = useRef<any>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllPosts());
    };
    fetchData();
  }, []);

  if (postStore.postsLoading) {
    body.current = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (postStore.posts.length === 0) {
    body.current = (
      <Card>
        <Card.Header as="h1">Hi {authStore.user?.username||''}</Card.Header>
        <Card.Body>
          <Card.Title>Welcome to learnIt</Card.Title>
          <Card.Text>
            Click the button below to keep track your first skill to learn
          </Card.Text>
          <Button variant="primary" onClick={() => dispatch(showAddPostModal())}>
            LearnIt
          </Button>
        </Card.Body>
      </Card>
    );
  } else {
    body.current = (
      <>
        <Row className="row-cols-1 row-cols-md-3 g-4 mx-auto mt-3">
          {postStore.posts.map((post) => (
            <Col key={post._id} className="my-2">
              <SinglePost key={post._id} post={post}></SinglePost>
            </Col>
          ))}
        </Row>
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip className = 'tooltip'>Add new post modal</Tooltip>}
        >
          <Button className="btn-floating" onClick={() => dispatch(showAddPostModal())}>
            <img
              src="images/plus-circle-fill.svg"
              alt="add-post"
              width="60"
              height="60"
            />
          </Button>
        </OverlayTrigger>
      </>
    );
  }
  return (
    <div>
      {body.current}
      <AddPostModal />
      {postStore.showEditPostModal && (
        <EditPostModal
          _id={postStore.post._id}
          status={postStore.post.status}
          title={postStore.post.title}
          description={postStore.post.description}
          url={postStore.post.url}
        />
      )}
    </div>
  );
}

export default Dashboard;
