import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate()

    
  return (
    <section className=" absolute z-50 -top-0  w-screen h-screen bg-white flex items-center justify-center font-[Arvo]">
      <div className="text-center px-4">
        
        {/* GIF Background */}
        <div
          className="w-full h-[300px] md:h-[400px] bg-center bg-no-repeat bg-contain flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
          }}
        >
          <h1 className="text-9xl md:text-8xl font-bold text-gray-800">
            404
          </h1>

        </div>

        {/* Content */}
        <div className="-mt-10 space-y-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-700">
            Look like you're lost
          </h3>

          <p className="text-gray-500">
            The page you are looking for is not available!
          </p>

          <a
                  onClick={()=>navigate('/')}
            className="inline-block mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Go to Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;