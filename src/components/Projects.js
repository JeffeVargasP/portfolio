import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
 
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40 text-white">
            <div className="flex flex-col w-full mb-20">
              <CodeIcon className="mx-auto inline-block w-10 mb-4" />
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                Todos os meus projetos
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Abaixo você encontra todos meus projetos feitos eles sejam com Python, HTML, CSS, JS, NodeJS Frameworks e também meu TCC feito com Arduino UNO
              </p>
            </div>
            <div className="flex flex-wrap m-4">
              {projects.map((project) => (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={project.image}
                  className="sm:w-1/2 w-100 p-2">
                  <div className="flex relative">
                    <div className="px-10 py-10  w-full border-4 border-gray-600 bg-gray-900 opacity-40 hover:opacity-100 hover:duration-300">
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {project.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {project.title}
                      </h1>
                      <p className="leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      );
}