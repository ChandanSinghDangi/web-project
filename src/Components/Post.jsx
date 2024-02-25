/* eslint-disable react/prop-types */
// Post.jsx

import { useState } from "react";
import { FaBookOpen, FaCalendarCheck } from "react-icons/fa";
const Post = ({ post }) => {
  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
  const [showFullContent, setShowFullContent] = useState(false);

  const handleSeeMore = () => {
    setShowFullContent(true);
  };
  return (
    <div className="my-4 p-4 border hover:shadow-xl hover:shadow-slate-200   border-gray-300">
      
  <div className='flex gap-3 '>
  <div>
    {post.image && (
        <img
          src={post.image}
          alt="Post"
          className="mb-2 max-w-56 max-h-64 "
        />
      )}
    </div>
      <div>
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600 flex  items-center gap-4 text-sm mb-2">
        <FaCalendarCheck className=" "></FaCalendarCheck>{formattedDate} • 
      </p>
      <p className="text-gray-600 flex  items-center gap-4 text-sm mb-2">
      <FaBookOpen /> {post.readingTime} min read
      </p>
      <p className="text-gray-600 flex  items-center gap-4 text-sm mb-2">
      <strong className="text-black">Category: </strong> {post.category} 
      </p>
      <p className="mt-2">{showFullContent ? post.content : `${post.content.slice(0, 75)}...`}</p>
      {post.tags && (
        <div className="mt-2">
          <strong>Tags:</strong> {post.tags.split(',').map(tag => tag.trim()).join(', ')}
        </div>
      )}
      </div>
  </div>
    {!showFullContent && ( <button onClick={handleSeeMore} className="text-white bg-gradient-to-tr from-violet-600 px-4 py-2 rounded-md to-blue-600 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-violet-500">See More</button>)}
    </div>
  );
};

export default Post;
