import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import PostItem from './item';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const postsRes = await api.get('/posts');
      const usersRes = await api.get('/users');
      setPosts(postsRes.data);
      setUsers(usersRes.data);
    };

    fetchData();
  }, []);

  const getAuthorName = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.name : 'Autor desconhecido';
  };

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} author={getAuthorName(post.userId)} />
      ))}
    </div>
  );
}

export default PostList;
