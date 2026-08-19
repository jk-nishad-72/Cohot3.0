import React from 'react'

const About = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center  text-black px-6">
      <div className="max-w-2xl text-center space-y-6">
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Client Management System
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed">
          Easily manage your clients, keep track of their data, and streamline your workflow.
          Add new clients, view existing ones, and stay organized — all in one place.
        </p>

        <div>
          <button className="mt-4 px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition duration-300">
            Get Started
          </button>
        </div>

      </div>
    </section>
  )
}

export default About