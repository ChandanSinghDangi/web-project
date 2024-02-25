/* eslint-disable react/prop-types */



const PostDetail = ({ post }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
      <p className="text-gray-600">{post.content}</p>
      {/* Other details such as tags, category, etc. can be added here */}
    </div>
  );
};

export default PostDetail;
