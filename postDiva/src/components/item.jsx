function Item({ post, author }) {
  return (
    <div style={{ margin: '20px 0' }}>
      <h2>{post.title}</h2>
      <p>Autor: {author.name}</p>
      <Link to={`/post/${post.id}`}>Ver detalhes →</Link>
    </div>
  );
}

export default Item;
//ORGANIZAÇÃO de cada post 