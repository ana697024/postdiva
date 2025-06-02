import React, { useEffect, useState } from 'react';
import { api } from '../apizes/api';
import PostItem from './item';
import '../pages/home.css'; // Ajustado para a pasta pages

function PostList() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsRes = await api.get('/posts');
        const usersRes = await api.get('/users');
        setPosts(postsRes.data);
        setUsers(usersRes.data);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    fetchData();
  }, []);

  const getAuthorName = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.name : 'Autor desconhecido';
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Lista de Posts</h1>
      <div className="posts-grid">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} author={getAuthorName(post.userId)} />
        ))}
      </div>
    </div>
  );
}

export default PostList;