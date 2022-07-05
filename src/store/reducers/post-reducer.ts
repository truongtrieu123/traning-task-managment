import { showEditPostModal } from "./../actions/post-action";
import { PostActionsType } from "./../../types/post.type";
import { PostActions, PostStore } from "types/post.type";

const initialState: PostStore = {
  post: null,
  posts: [],
  postsLoading: true,
  showAddPostModal: false,
  showEditPostModal: false,
};

const postReducer = (state = initialState, action: PostActions): PostStore => {
  switch (action.type) {
    case PostActionsType.POSTS_LOADED_SUCCESS:
      return {
        ...state,
        posts: action.payload.posts,
        postsLoading: false,
      };
    case PostActionsType.POSTS_LOADED_FAIL:
      return {
        ...state,
        posts: [],
        postsLoading: false,
      };
    case PostActionsType.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload.post],
      };
    case PostActionsType.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload.id),
      };
    case PostActionsType.FIND_POST:
      const post = state.posts.find((post) => post._id === action.payload.id);
      return {
        ...state,
        post: post,
      };

    case PostActionsType.UPDATE_POST:
      const newPosts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

      return {
        ...state,
        posts: newPosts,
      };
    case PostActionsType.SHOW_ADD_POST_MODAL:
      return {
        ...state,
        showAddPostModal: true,
      };
    case PostActionsType.HIDE_ADD_POST_MODAL:
      return {
        ...state,
        showAddPostModal: false,
      };
    case PostActionsType.SHOW_EDIT_POST_MODAL:
      return {
        ...state,
        showEditPostModal: true,
      };
    case PostActionsType.HIDE_EDIT_POST_MODAL:
      return {
        ...state,
        showEditPostModal: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default postReducer;
