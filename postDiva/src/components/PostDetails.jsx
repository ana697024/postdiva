import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../apizes/api';
import '../pages/home.css'; // Ajustado para a pasta pages

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostAndAuthor = async () => {
      try {
        const postRes = await api.get(`/posts/${id}`);
        setPost(postRes.data);
        const userRes = await api.get(`/users/${postRes.data.userId}`);
        setAuthor(userRes.data);
      } catch (error) {
        console.error('Erro ao carregar post ou autor:', error);
        setError('Não foi possível carregar os detalhes do post.');
      }
    };

    fetchPostAndAuthor();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!post || !author) return <p>Carregando...</p>;

  return (
    <div className="post-details-container">
      <h1 className="post-details-title">{post.title}</h1>
      <p className="post-details-body">{post.body}</p>
      <h3 className="post-details-author">Autor: {author.name}</h3>
      <p className="post-details-email">Email: {author.email}</p>
      <Link to="/" className="back-link">Voltar para a lista de posts</Link>
    </div>
  );
}

export default PostDetails;