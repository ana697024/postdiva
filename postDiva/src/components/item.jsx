import { Link } from 'react-router-dom';
import '../pages/home.css'; // Ajustado para a pasta pages

function PostItem({ post, author }) {
  return (
    <div className="post-card">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-author">Autor: {author}</p>
      <Link to={`/post/${post.id}`} className="post-link">
        Ver detalhes →
      </Link>
    </div>
  );
}

export default PostItem;