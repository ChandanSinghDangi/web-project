/* eslint-disable no-dupe-keys */
import  { useState } from 'react';
import Post from './Post';
// responsive-blog-template-with-CreateBlogOption



const CreatePost = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({
        title: '',
        content: '',
       image: 'https://i.jpgibb.co/2d3NGnf/img.', tags: '',
        category: '',
        imagePreview: null,
      });
      const handleInputChange = (e) => {
        if (e.target.name === 'image') {
          const imageFile = e.target.files[0];
          if (imageFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setNewPost({
                ...newPost,
                image: imageFile,
                imagePreview: reader.result,
              });
            };
            reader.readAsDataURL(imageFile);
          }
        } else {
          setNewPost({ ...newPost, [e.target.name]: e.target.value });
        }
      };
    
      const handleAddPost = () => {
        if (newPost.title && newPost.content && newPost.category) {
          const postToAdd = {
            id: Date.now(),
            ...newPost,
            createdAt: new Date(),
            readingTime: calculateReadingTime(newPost.content),
            image: newPost.imagePreview,
          };
    
          setPosts([...posts, postToAdd]);
          setNewPost({
            title: '',
            content: '',
           image: 'https://images.app.goo.gl/nRPUiPUFNbLQFsys7', tags: '',
            category: '',
            imagePreview: null,
          });
        }
      };
    
      const calculateReadingTime = (content) => {
        // Assuming an average reading speed of 200 words per minute
        const wordsPerMinute = 200;
        const wordCount = content.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / wordsPerMinute);
        return readingTime || 1; // Minimum reading time is 1 minute
      };
        
    return (
        <div className="container min-h-screen mx-auto p-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Create a New Post</h2>
          <div className=" ">
            <div className='md:flex my-3 grid gap-4'>
            <input
              type="text"
              name="title"
              value={newPost.title}
              onChange={handleInputChange}
              placeholder="Title"
              className="border p-2 w-full"
            />
             <select
              name="category"
              value={newPost.category}
              onChange={handleInputChange}
              className="border p-2 w-full"
            >
              <option value="" disabled>Select a category</option>
              <option value="Tech">Tech</option>
              <option value="Programming">Programming</option>
              <option value="Programming">SmartPhone</option>
              {/* Add more categories as needed */}
            </select>
            </div>
        <div className='md:flex my-3 grid gap-4'>
        <textarea
              name="content"
              value={newPost.content}
              onChange={handleInputChange}
              placeholder="Write your post..."
              className="border p-2 col-span-2 w-full"
              rows="4"
            />
            <input
              type="text"
              name="tags"
              value={newPost.tags}
              onChange={handleInputChange}
              placeholder="Tags (comma-separated)"
              className="border p-2 h-10 w-full"
            />
        </div>
           
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
            {newPost.imagePreview && (
              <img
                src={newPost.imagePreview}
                alt="Image Preview"
                className="mt-2 max-w-20 mb-4 max-h-20 lg:max-w-md lg:h-auto"
              />
            )}
            <button onClick={handleAddPost} className="bg-blue-500 w-full h-10 text-white px-4 py-2">
              Add Post
            </button>
          </div>
        </div>
        <div>
      
       <div className=" grid grid-cols-1 gap-6 md:grid-cols-2">
       {posts.map((post) => (
          <Post  key={post.id} post={post} />
        ))}
       </div>
      </div>
     
        </div>
    );
};

export default CreatePost;