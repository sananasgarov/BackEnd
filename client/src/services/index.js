import api from "../api";

export const register = async (body) =>{
  const res = await api.post("/users",body)

  if (!res.data) {
    throw new Error("User registration failed");
  }
  return res.data
}
export const createPost = async (body,id) =>{
  const formData = new FormData();
  formData.append("file", body.file);
  formData.append("content", body.content);

  const res = await api.post(`/posts/${id}`,formData)

  if (!res.data) {
    throw new Error("Post creation failed");
  }

  return res.data
}