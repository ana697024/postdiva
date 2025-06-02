import axios from 'axios';

//  posts
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => console.log(res.data));

// users
axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => console.log(res.data));
