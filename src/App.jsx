
import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
//  fetching data from api
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto mt-8">
      {user && (
        // showing data to UI
        <div className="max-w-3xl flex justify-between p-6 border mx-auto bg-white shadow-md hover:shadow-2xl hover:shadow-inherit rounded-md overflow-hidden">
          <img
            className="w-[50%] hover:translate-4 hover:scale-105 hover:border-blue-600 border h-64 object-cover"
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
          <div className="p-4  text-xl ">
            <h2 className="text-2xl font-bold mb-2">
            {user.name.title}  {user.name.first} {user.name.last}
            </h2>
            <p className="text-gray-700 my-1"><span className='font-medium'>Email: </span>  {user.email}</p>
            <p className="text-gray-700 my-1"><span className='font-medium'>Gender: </span>  {user.gender}</p>
            <p className="text-gray-700 my-1"> <span className='font-medium'>PhoneNumber:</span> {user.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
