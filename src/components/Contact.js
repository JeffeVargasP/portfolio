import React from 'react';

export default function Contact() {

    return (
        <section id="contact" className="relative bg-gray-900 text-white">
          <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                title="map"
                className="absolute inset-0"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                style={{ filter: "opacity(0.7)" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462.1200338678441!2d-50.19056739529487!3d-22.08933417309936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94959cb69f9682d5%3A0xfe1308f1e63c139f!2sR.%20Osvaldo%20Zaparoli%20-%20Pomp%C3%A9ia%2C%20SP%2C%2017580-000!5e0!3m2!1spt-BR!2sbr!4v1649656206592!5m2!1spt-BR!2sbr"
              />
              <div className="bg-gray-900 relative flex flex-wrap py-6 px-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                    ENDEREÇO
                  </h2>
                  <p className="mt-1">
                    Pompéia - SP
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-indigo-400 leading-relaxed">
                    <p>
                      jeffevargas@proton.me
                    </p>
                  </a>
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                    NÚMERO
                  </h2>
                  <p className="leading-relaxed">+55 (14) 99619-9677</p>
                </div>
              </div>
            </div>
            <form
              netlify
              name="contact"
              className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                Me contrate
              </h2>
              <p className="leading-relaxed mb-5">
                Gostaria de trocar uma ideia? Então me contate!
              </p>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                  Nome
                </label>
                <input
                  autoComplete='off'
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                  Email
                </label>
                <input
                  autoComplete='off'
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-400">
                  Mensagem
                </label>
                <textarea
                  autoComplete='off'
                  id="message"
                  name="message"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Enviar
              </button>
            </form>
          </div>
        </section>
      );

}