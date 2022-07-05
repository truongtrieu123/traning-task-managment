export type PostStatus = "To learn" | "Learning" | "Learned";

export type PostItem = {
  _id: string;
  title: string;
  description: string;
  url: string;
  status: PostStatus;
  userId?: string;
};

export type PostStore = {
  posts: Array<PostItem>;
  post: PostItem;
  postsLoading: boolean;
  showAddPostModal: boolean;
  showEditPostModal: boolean;
};

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum PostActionsType {
  FIND_POST = "FIND_POST",
  POSTS_LOADED_SUCCESS = "POST_LOADED_SUCCESS",
  POSTS_LOADED_FAIL = "POSTS_LOADED_FAIL",
  ADD_POST = "ADD_POST",
  DELETE_POST = "DELETE_POST",
  UPDATE_POST = "UPDATE_POST",
  SHOW_ADD_POST_MODAL = "SHOW_ADD_POST_MODAL",
  HIDE_ADD_POST_MODAL = "HIDE_ADD_POST_MODAL",
  SHOW_EDIT_POST_MODAL = "SHOW_EDIT_POST_MODAL",
  HIDE_EDIT_POST_MODAL = "HIDE_EDIT_POST_MODAL",
}

export interface PostPayload {
  [PostActionsType.FIND_POST]: {
    id: string;
  };
  [PostActionsType.POSTS_LOADED_SUCCESS]: {
    posts: Array<PostItem>;
  };
  [PostActionsType.POSTS_LOADED_FAIL]: {};
  [PostActionsType.ADD_POST]: {
    post: PostItem;
  };
  [PostActionsType.DELETE_POST]: {
    id: string;
  };
  [PostActionsType.UPDATE_POST]: {
    _id: string;
    title: string;
    url: string;
    description: string;
    status: PostStatus;
  };
  [PostActionsType.SHOW_ADD_POST_MODAL]: {};
  [PostActionsType.HIDE_ADD_POST_MODAL]: {};
  [PostActionsType.SHOW_EDIT_POST_MODAL]: {};
  [PostActionsType.HIDE_EDIT_POST_MODAL]: {};
}

export type PostActions = ActionMap<PostPayload>[keyof ActionMap<PostPayload>];
