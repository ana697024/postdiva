import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../services/api';

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchPostAndAuthor = async () => {
      const postRes = await api.get(`/posts/${id}`);
      setPost(postRes.data);
      const userRes = await api.get(`/users/${postRes.data.userId}`);
      setAuthor(userRes.data);
    };

    fetchPostAndAuthor();
  }, [id]);

  if (!post || !author) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h3>Autor: {author.name}</h3>
      <p>Email: {author.email}</p>
    </div>
  );
}

export default PostDetails;
