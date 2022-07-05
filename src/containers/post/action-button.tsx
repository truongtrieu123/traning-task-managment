import React, { useContext } from "react";
import  Button  from "react-bootstrap/Button";
import { useAppDispatch, useAppSelector } from "utils/hooks";
import { showEditPostModal ,findPostById, deletePost} from "store/actions/post-action";

interface IProps{
  url:string,
  _id:string,
}

const ActionButton = ({ url, _id }:IProps) => {
  const dispatch = useAppDispatch();

  const handleEdit = () => {
    dispatch(findPostById(_id));
    dispatch(showEditPostModal());
  };

  const handleDelete = () => {
    dispatch(deletePost(_id));
  };

  return (
    <div>
      <Button className="post-button" href={url}>
        <img src={'images/play-btn.svg'} width="32" height="32" alt="play-icon" />
      </Button>
      <Button className="post-button" onClick={handleEdit}>
        <img src={'images/pencil.svg'} width="24" height="24" alt="edit-icon" />
      </Button>
      <Button className="post-button" onClick={handleDelete}>
        <img src={'images/trash.svg'} width="24" height="24" alt="delete-icone" />
      </Button>
    </div>
  );
};

export default ActionButton;
