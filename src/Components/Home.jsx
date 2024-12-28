/* eslint-disable react/no-unescaped-entities */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import man from "../../public/download.jpg"
import user from "../assets/user.jpg"

import { useEffect, useState } from 'react';
import Posts from "../assets/Posts";
import Post from './Post';
import { Link } from 'react-router-dom';
import PostDetail from './PostDetail';
// import chat from '../../public/chat.png'
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
        { author: 'Chandan Singh Dangi', content: 'Absolutely love the content! It has been incredibly helpful in my coding journey.' },
        { author: 'Dheeraj Singh', content: 'The tutorials are well-explained, and the code samples are clear. Great job!' },
        { author: 'Karan Thakur', content: 'This blog is a fantastic resource for both beginners and experienced developers.' },
        { author: 'Bro Code', content: 'The author has a great way of breaking down complex topics into easy-to-understand concepts.' },
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
            <span key={index} className="text-white bg-gradient-to-tr         hover:bg-gradient-to-tr from-blue-600 to-violet-500  px-3 py-1 rounded-full">
                {tag}
            </span>
        ))}
      </div>
    </section>

            {/* Testimonials */}
            <section className='my-12 mx-auto'>
        <h2 className="text-2xl font-bold mb-4 text-center border-b-2 border-blue-700 w-[40%] mx-auto">Testimonials</h2>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-300  p-4 rounded-md py-12 text-center">
                <div className=' rounded-full flex justify-center items-center'>
                <img className='rounded-full w-20 h-20' src={user} alt="" />
                </div>
              <p className='text-xl'>{testimonial.content}</p>
              <p className="font-bold text-2xl mt-2">- {testimonial.author}</p>
            </div>
          ))}
        </Slider>
      </section>

      
            {/* AboutUs */}
            <section id='about'  className="text-center p-8 mx-auto bg-blue-300 my-12">
  <h2 className="text-2xl font-bold mb-4 text-center border-b-2 border-blue-700 w-[40%] mx-auto">About Us</h2>
  {/* <p className="text-red-700 leading-relaxed">
  </p> */}
  <p>
  Welcome to Blue Bird, where creativity meets expression. Whether you’re a seasoned writer, a hobbyist, or a business sharing insights, our platform is here to provide the tools, community, and inspiration you need to make your mark on the web.
  We believe everyone has a unique story to tell, a fresh perspective to offer, and a voice worth hearing. That’s why we’ve created an easy-to-use, flexible, and powerful blogging platform designed to support your journey at every step.
  </p>
  <br />
  <br />
  <p className='font-bold text-xl border-b-2 border-blue-700 w-[40%] mx-auto'>What We Offer</p>
  <p>
    <ul className='text-left'>
      <li>
      <strong>Seamless Publishing:-</strong> Start writing and publishing your content with minimal hassle. Whether you're drafting posts, scheduling content, or making updates, everything is designed to be intuitive and efficient.
      </li>
      <li>
      <strong>Customization:-</strong> Make your blog reflect your unique style. Our platform provides a wide range of customizable themes, layouts, and plugins to ensure your blog stands out.
      </li>
      <li>
      <strong>Community Support:-</strong> Join a growing community of bloggers who share your passion for writing. Engage with readers and fellow bloggers through comments, discussions, and shared experiences
      </li>
      <li>
      <strong>Monetization Tools:-</strong> Whether you're aiming to build a personal brand or run a business blog, we offer tools to help you monetize your content, including ads, affiliate marketing, and subscription options.
      </li>
      <li>
        <strong>Analytics and Insights:-</strong> Keep track of your blog’s performance with our powerful analytics dashboard. Monitor traffic, engagement, and audience growth to understand what works and refine your content strategy.</li>
    </ul>
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
          className="text-white bg-gradient-to-tr from-violet-600 to-blue-600 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-violet-500 px-5 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
      <div className="md:w-1/2">
      <img className="w-96 mx-auto" src={"/chat.png"} alt="chat image" />
    </div>
      </div>
    </section>
        </div>
    );
};

export default Home;