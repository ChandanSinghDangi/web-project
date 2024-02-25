

import  { useEffect, useState } from 'react';
import Post from './Post';
import PostDetail from './PostDetail';
import { Link } from 'react-router-dom';
import Posts from "../assets/Posts"
const PostList = () => {
 

  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    // Set posts directly from the imported JSON file
    setPosts(Posts);
  }, []);

  const handleViewDetails = (post) => {
    setSelectedPost(post);
  };
  


  return (
    <div className="container mx-auto p-4">
     
      <div>
        <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
       <div className=" grid grid-cols-1 gap-6 md:grid-cols-2">
       {posts.map((post) => (
          <Post  key={post.id} post={post} />
        ))}
       </div>
      </div>
      {selectedPost && (
        <div>
          <PostDetail post={selectedPost} />
          <Link to="/">Go Back to Posts</Link>
        </div>
      )}
    </div>
  );
};

export default PostList;
