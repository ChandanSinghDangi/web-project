/* eslint-disable react/no-unescaped-entities */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import man from "../../public/download.jpg"

import { useEffect, useState } from 'react';
import Posts from "../assets/Posts";
import Post from './Post';
import { Link } from 'react-router-dom';
import PostDetail from './PostDetail';
import chat from '../../public/chat.png'
const Home = () => {
    const [posts, setPosts] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [selectedPost, setSelectedPost] = useState(null);
  
    useEffect(() => {
     
      setPosts(Posts);
    }, []);
  
  
    // Showing only the first 4 posts on the homepage
    const postsToDisplay = posts.slice(0, 4);
    const testimonials = [
        { author: 'Alice Johnson', content: 'Absolutely love the content! It has been incredibly helpful in my coding journey.' },
        { author: 'Bob Thompson', content: 'The tutorials are well-explained, and the code samples are clear. Great job!' },
        { author: 'Charlie Williams', content: 'This blog is a fantastic resource for both beginners and experienced developers.' },
        { author: 'Eva Rodriguez', content: 'The author has a great way of breaking down complex topics into easy-to-understand concepts.' },
      ];
      
      const popularTags = [
        'React',
        'JavaScript',
        'Web Development',
        'Tech',
        'Programming',
        'CSS',
        'Node.js',
        'Frontend',
        'Backend',
        'UI/UX',
        'Database',
        'Mobile Development',
        'Open Source',
        'Cloud Computing',
        'DevOps',
        'Software Engineering',
        'Coding Tips',
        'Framework',
        'API',
        'Responsive Design',
        'Git',
        'Machine Learning',
        'Data Science',
        'Python',
        'HTML5',
        'CSS3',
        'TypeScript',
        'Vue.js',
        'Angular',
        'Express.js',
        'MongoDB',
      ];
      
      const featuredImages = [
        'https://placekitten.com/800/400', 
        'https://placekitten.com/800/401',
        'https://placekitten.com/800/402',
        'https://placekitten.com/800/403',
        'https://placekitten.com/800/404',
        'https://placekitten.com/800/405',
        'https://placekitten.com/800/406',
        'https://placekitten.com/800/407',
        'https://placekitten.com/800/408',
        'https://placekitten.com/800/409',
      ];
      const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div className='mx-auto px-2'>
            {/* search */}
            <div className="my-4 text-center">
    
      <input
        type="text"
        placeholder="Search for articles..."
        className="border p-2 w-[50%] rounded-xl text-center border-blue-600"
        // Add onChange and value props to handle search functionality
      />
    </div>
    {/* Featured Posts */}
    <div className="container mx-auto p-4 my-12">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center border-b-2 border-blue-700 w-[40%] mx-auto">Featured Posts</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {postsToDisplay.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
       <button className='text-white bg-gradient-to-tr from-violet-600 px-3 py-2 rounded-lg to-blue-600 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-violet-500 text-center flex mx-auto'> <Link to="/blogs">View All Blogs</Link></button>
      </div>
      {selectedPost && (
        <div>
          <PostDetail post={selectedPost} />
          <Link to="/">Go Back to Featured Posts</Link>
        </div>
      )}
    </div>
            {/* PopularTages */}
            <section className="my-12">
  <h2 className="text-2xl font-bold mb-4 text-center border-b-2 border-blue-700 w-[40%] mx-auto">Popular Tags</h2>
  <div className="flex flex-wrap gap-2">
    {popularTags.map((tag, index) => (
      <span key={index} className="text-white bg-gradient-to-tr  hover:bg-gradient-to-tr from-blue-600 to-violet-500  px-3 py-1 rounded-full">
        {tag}
      </span>
    ))}
  </div>
</section>

            {/* featuredImages */}
             <section className='my-12 mx-auto'>
      <h2 className="text-2xl font-bold mb-4 text-center border-b-2 border-blue-700 w-[40%] mx-auto">Featured Images</h2>
    
<div className='mx-auto'>
<div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 xl:gap-6">
        {featuredImages.map((image, index) => (
          <img key={index} src={image} alt={`Featured ${index + 1}`} className="max-w-full  h-auto" />
        ))}
      </div>
</div>
    </section>
            {/* Testimonials */}
            <section className='my-12 mx-auto'>
        <h2 className="text-2xl font-bold mb-4 text-center border-b-2 border-blue-700 w-[40%] mx-auto">Testimonials</h2>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-md py-12 text-center">
                <div className=' rounded-full flex justify-center items-center'>
                <img className='rounded-full w-24 h-24' src={man} alt="" />
                </div>
              <p className='text-xl'>{testimonial.content}</p>
              <p className="font-bold text-2xl mt-2">- {testimonial.author}</p>
            </div>
          ))}
        </Slider>
      </section>
            {/* AboutMe */}
            <section id='about'  className="text-center p-8 mx-auto bg-[#fdf9f9] my-12">
  <h2 className="text-2xl font-bold mb-4 text-center border-b-2 border-blue-700 w-[40%] mx-auto">About Me</h2>
  <p className="text-gray-700 leading-relaxed">
    Welcome to my blog! I am passionate about technology, web development, and everything in between.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget est ac metus tincidunt varius.
    Fusce euismod, felis a commodo vehicula, elit dolor commodo ipsum, a tristique elit justo vel risus.
  </p>
  <p className="text-gray-700 leading-relaxed mt-4">
    In my blog, you'll find articles on the latest trends in web development, programming tips, and tutorials.
    I believe in the power of sharing knowledge and helping others in their coding journey.
  </p>
  <p className="text-gray-700 leading-relaxed mt-4">
    When I'm not coding, you can find me exploring new technologies, reading tech blogs, or enjoying a good cup of coffee.
    Feel free to explore the blog and reach out if you have any questions or just want to connect!
  </p>
</section>

{/* contactMe */}
<section className='mx-auto px-3'>
      <h2 className="text-2xl font-bold mb-4 text-center border-b-2 border-blue-700 w-[40%] mx-auto">Contact Me</h2>
      <div className='lg:flex gap-4'>
      <form  className="w-full text-lg mt-3">
       <div className='md:flex gap-3'>
       <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 border w-full md:w-80"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 border w-full md:w-80"
            placeholder="Enter your email address"
            required
          />
        </div>
       </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4" cols="75"
            className="mt-1 p-2 border "
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white bg-gradient-to-tr from-violet-600 px-5 py-2 rounded-md to-blue-600 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-violet-500"
        >
          Submit
        </button>
      </form>
      <div className="md:w-1/2">
      <img className="w-96 mx-auto" src={chat} alt="chat image" />
    </div>
      </div>
    </section>
        </div>
    );
};

export default Home;