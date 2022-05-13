import React from 'react';

export default function About () {

    return (
        <section id="about" className="bg-gray-900">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-white">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                Olá, meu nome é Jefferson, mas pode me chamar de Jeff!
                <br className="hidden lg:inline-block" />
                Gosto de criar, experimentar e automatizar coisas novas.
              </h1>
              <p className="mb-8 leading-relaxed">
              Desde quando eu comecei a programar em Python, encontrei algo no qual pude abrir um leque incrível de criações, inovações, conexões, automações e por este motivo venho desenvolvendo meus conhecimentos nesta área e outras que podem ser usadas com a mesma. Tenho formação em “Eletroeletrônica” e “Desenvolvimento Web Full Stack” que são dois cursos oferecidos pelo SENAI Shunji Nishimura. Atualmente estou cursando Big Data na FATEC.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-gray-100 bg-green-600 border-0 py-2 px-6 focus:outline-none opacity-80 hover:opacity-100 rounded text-lg hover:">
                    Me contrate!
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-100 bg-gray-800 border-0 py-2 px-6 focus:outline-none opacity-80 hover:opacity-100 rounded text-lg">
                  Veja meus projetos
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