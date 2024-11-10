import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {  FaGithub } from 'react-icons/fa';


const moreProjects = [
  {
    title: 'Countdown Timer',
    description: 'This is a Cowntdown Timer based on Typesript functionality.',
    techStack: 'Node Js,Typescript ',
  
    codeLink: 'https://github.com/areeba-awan/Project-09-COUNTDOWN-TIIMER.git',
    imageUrl: '/Countdown.png',
  },
  {
    title: 'Adventure Game',
    description: 'Created an adventure game with fun and exporing and ideas.',
    techStack: 'Node js, Typescript',
    codeLink: 'https://github.com/areeba-awan/Project-07-ADVENTURE-GAME.git',
    imageUrl: '/adventureGame.jpg',
  },
  {
    title: 'Simple Calculator',
    description: 'This is a simple calculator.',
    techStack: 'Node js, Typecsript',

    codeLink: 'https://github.com/areeba-awan/Project-00-Simple-Calculator.git',
    imageUrl: '/calculator.jpg',
  },
  {
    title: 'Atm machine',
    description: 'This is an interactive Atm Machine',
    techStack: 'Node js, Typecsript',

    codeLink: 'https://github.com/areeba-awan/Project-02-ATM-MACHINE.git',
    imageUrl: '/Atm Machine.png.jpg',
    
  },
  {
    title: 'Currency convertor',
    description: 'I have made this Currency convertor',
    techStack: 'Node js, Typecsript',

    codeLink: 'https://github.com/areeba-awan/My-Currency-Convertor.git',
    imageUrl: '/Currency-Convertor.jpg',
    
  },
  {
    title: 'To-Do List',
    description: 'This is a simple TO-DO List.',
    techStack: 'Node js, Typecsript',

    codeLink: 'https://github.com/areeba-awan/Project-03-TODO-LIST.git',
    imageUrl: '/To-do-list.jpg',
    
  },
  
  
];

const MoreProjects = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-black via-[#23c385] to-black text-center flex flex-col items-center justify-center px-4 py-16 relative">
      {/* Home Button in Top-Left */}
      <Link href="/" passHref>
        <button className="absolute top-4 left-4 px-8 py-4 sm:mt-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 hover:bg-slate-800 text-white mt-3  rounded-full  transition duration-300 font-semibold sm:mb-20 sm:px-10 sm:py-13">
          Back to HomePage
        </button>
      </Link>

      {/* Page Title */}
      <h2 className="text-4xl font-bold text-white mb-4 sm:px-10 mt-10">Explore More Projects</h2>
      <p className="text-lg text-zinc-900 font-extrabold mb-12 max-w-2xl">
        Dive into some of my latest creations, showcasing various technologies and styles.
      </p>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {moreProjects.map((project, index) => (
          <div
            key={index}
            className="bg-neutral-800 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 transform"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <p className="text-sm text-white mt-4">
                Tech Stack: <span className="text-gray-200 font-medium">{project.techStack}</span>
              </p>
              <div className="flex justify-between items-center mt-4">
               
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  <FaGithub className="mr-2" /> View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreProjects;