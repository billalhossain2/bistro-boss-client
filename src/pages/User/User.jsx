import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { authContext } from '../../providers/AuthProvider'

const User = () => {
  const {user} = useContext(authContext);
  return (
    <>
    <Helmet>
       <title>User | Bistro Boss</title>
    </Helmet>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md bg-white p-8 shadow-lg rounded-lg">
        <div className="mb-4">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="w-32 h-32 rounded-full mx-auto"
          />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          {user?.displayName}
        </h2>
        <p className="text-gray-600 text-center">
          Web Developer | React Enthusiast
        </p>
        <div className="mt-4">
          <p className="text-gray-700">
          {`  Hi, I'm ${user?.displayName}, a passionate web developer with a focus on React.js. I love crafting web applications that not only look good but also provide a seamless user experience. When I'm not coding, you can find me exploring new technologies and enjoying a good cup of coffee.`}
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default User