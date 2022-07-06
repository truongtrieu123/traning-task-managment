import { PostActionsType, PostStatus } from "./../../types/post.type";
import axios from "axios";
import { apiUrl } from "constants/index";

export const findPostById = (_id: string) => (dispatch: any, getState: any) => {
  dispatch({
    type: PostActionsType.FIND_POST,
    payload: {
      id: _id,
    },
  });
};

export const getAllPosts = () => async (dispatch: any, getState: any) => {
  try {
    const response = await axios.get(`${apiUrl}/posts`);
    if (response.data.success) {
      dispatch({
        type: PostActionsType.POSTS_LOADED_SUCCESS,
        payload: {
          posts: response.data.posts,
        },
      });
    }
  } catch (error) {
    dispatch({ type: PostActionsType.POSTS_LOADED_FAIL });
  }
};

export const createNewPost = (post) => async (dispatch: any, getState: any) => {
  try {
    const response = await axios.post(`${apiUrl}/posts`, post);
    if (response.data.success) {
      dispatch({
        type: PostActionsType.ADD_POST,
        payload: {
          post: response.data.post,
        },
      });
    }
  } catch (error) {}
};

export const deletePost =
  (id: string) => async (dispatch: any, getState: any) => {
    try {
      const response = await axios.delete(`${apiUrl}/posts/${id}`);
      if (response.data.success) {
        dispatch({
          type: PostActionsType.DELETE_POST,
          payload: {
            id,
          },
        });
      }
    } catch (error) {}
  };

export const editPost =
  (
    _id: string,
    newPost: {
      title: string;
      url: string;
      description: string;
      status: PostStatus;
    }
  ) =>
  async (dispatch: any, getState: any) => {
    try {
      const response = await axios.put(`${apiUrl}/posts/${_id}`, newPost);
      if (response.data.success) {
        dispatch({
          type: PostActionsType.UPDATE_POST,
          payload: {
            _id: _id,
            title: newPost.title,
            url: newPost.url,
            description: newPost.description,
            status: newPost.status,
          },
        });
      }
    } catch (error) {}
  };

export const showAddPostModal = () => (dispatch: any, getState: any) => {
  dispatch({
    type: PostActionsType.SHOW_ADD_POST_MODAL,
  });
};

export const hideAddPostModal = () => (dispatch: any, getState: any) => {
  dispatch({
    type: PostActionsType.HIDE_ADD_POST_MODAL,
  });
};

export const showEditPostModal = () => (dispatch: any, getState: any) => {
  dispatch({
    type: PostActionsType.SHOW_EDIT_POST_MODAL,
  });
};

export const hideEditPostModal = () => (dispatch: any, getState: any) => {
  dispatch({
    type: PostActionsType.HIDE_EDIT_POST_MODAL,
  });
};
