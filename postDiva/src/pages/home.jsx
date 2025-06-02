

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  //  carrega  página 
  useEffect(() => {
    const fetchData = async () => {
      const postsRes = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const usersRes = await axios.get('https://jsonplaceholder.typicode.com/users');
      
      setPosts(postsRes.data);
      setUsers(usersRes.data);
    };

    fetchData();
  }, []);

  // Função pra achar o nome do autor pelo  do post
  const getAuthorName = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.name : 'Autor desconhecido';
  };

  return (
    <div>
      <h1>Lista de Posts</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: '20px' }}>
          <h2>{post.title}</h2>
          <p>Autor: {getAuthorName(post.userId)}</p>
          <Link to={`/post/${post.id}`}>Ver detalhes</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
