import React from 'react';

export default function About () {

    return (
        <section id="about" className="bg-gray-900">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-white">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                Hi I'm Jeff!
                <br className="hidden lg:inline-block" />I love to build some tech stuff
              </h1>
              <p className="mb-8 leading-relaxed">
              Since I've been started to programming with Python, I've found a new hobby for my life and get growing my knowledge about this area, I'm a technique in electro electronic course offer by SENAI and I'm in a course of Big Data at FATEC
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-gray-100 bg-green-600 border-0 py-2 px-6 focus:outline-none opacity-80 hover:opacity-100 rounded text-lg hover:">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-100 bg-gray-800 border-0 py-2 px-6 focus:outline-none opacity-80 hover:opacity-100 rounded text-lg">
                  See My Past Work
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={require('../image/me.png')}
              />
            </div>
          </div>
        </section>
      );

}