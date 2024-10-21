import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  //   const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idfromButtonClick, setIdFromButtonclick] = useState(1);

  const handleClick = () => {
    setIdFromButtonclick(id);
  };

  //   useEffect(() => {
  //     axios
  //       .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //       .then((res) => {
  //         console.log(res);
  //         setPost(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, [id]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idfromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idfromButtonClick]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
      <div>{post.title}</div>
    </div>
  );
}

export default DataFetching;
