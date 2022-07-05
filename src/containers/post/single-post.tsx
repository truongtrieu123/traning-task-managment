import { AlertMessageType } from "constants/index";
import { PostStatus } from "constants/post";
import React from "react";
import { Card, Col, Row, Badge } from "react-bootstrap";
import { PostItem } from "types/post.type";
import ActionButton from "./action-button";

interface IProps {
  post: PostItem;
}

const SinglePost = ({ post }: IProps) => {
  const { _id, status, title, description, url } = post;

  return (
    <Card
      className="shadow h-100 rounded"
      border={
        status === PostStatus.learned
          ? AlertMessageType.success
          : status === PostStatus.learning
          ? AlertMessageType.warning
          : AlertMessageType.danger
      }
    >
      <Card.Header className = 'h-100'>
        <Card.Title>
          <Row>
            <Col>
              <p className="post-title">{title}</p>
              <Badge
                pill
                bg={
                  status === PostStatus.learned
                    ? AlertMessageType.success
                    : status === PostStatus.learning
                    ? AlertMessageType.warning
                    : AlertMessageType.danger
                }
              >
                {status}
              </Badge>
            </Col>
            <Col className="text-right">
              <ActionButton _id={_id} url={url}></ActionButton>
            </Col>
          </Row>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Header>
    </Card>
  );
};
export default SinglePost;
