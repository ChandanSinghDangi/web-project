
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://www.facebook.com/' },
    { icon: <FaTwitter />, url: 'https://twitter.com/' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/' },
    // Add more social links as needed
  ];

  return (
    <footer className="bg-blue-600  text-white py-4 px-5 mt-12 mb-4 rounded-full">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row px-4 justify-between items-center">
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <p className="text-lg font-bold">Your Blog Name</p>
          <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
        <div className="flex justify-center lg:justify-end space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-500 transition-all"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
