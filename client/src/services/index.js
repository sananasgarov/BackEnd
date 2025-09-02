import api from "../api";

export const register = async (body) => {
  const res = await api.post("/users", body);

  if (!res.data) {
    throw new Error("User registration failed");
  }
  return res.data;
};
export const createPost = async (body, id) => {
  const formData = new FormData();
  formData.append("file", body.file);
  formData.append("content", body.content);

  const res = await api.post(`/posts/${id}`, formData);

  if (!res.data) {
    throw new Error("Post creation failed");
  }

  return res.data;
};
export const getAllPosts = async () => {
  const res = await api.get("/posts");

  if (!res.data) {
    throw new Error("Failed to fetch posts");
  }

  return res.data;
};
export const deletePost = async (id) => {
  const res = await api.delete(`/posts/${id}`);
  if (!res.data) {
    throw new Error("Post deletion failed");
  }

  return res.data;
};
