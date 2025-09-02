const initialState = {
  allPosts: [],
  posts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_POSTS":
      return {
        ...state,
        allPosts: action.payload,
        posts: action.payload,   
      };
    case "SET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "REMOVE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};
