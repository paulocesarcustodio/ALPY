import React, { Component } from "react";

class Hero_section extends Component {
  render() {
    return (
      <div>
        {/* catch phrase  */}
        <section class=" flex items-center justify-center h-1/3 mb-12 lg:-mb-14  bg-fixed bg-center bg-cover bg-no-repeat bg-hero-pattern -mb-24 2xl:mb-0   ">
          <div class="grid grid-cols-8 grid-rows-4">
            <h1 class=" shadow-2xl w-72 sm:min-w-72 md:min-w-72  md:w-96 lg:w-3/5 xl:w-4/5 2xl:w-4/5   shadow-lg col-start-2 col-end-4 row-start-2 row-end-2 bg-black  text-gray-100 text-3xl px-4 py-8   xl:ml-8 xl:mr-9  xl:pr-5 xl:pl-8 xl:col-end-6 xl:-mt-8 xl:mb-2 2xl:mt-6 2xl:mr-96 pl-20 2xl:mb-5 -my-16 ">
              Sua equipe de e-commerce remota flexível e eficiente
            </h1>
            {/* call to action */}
            <div class="pl-6 lg:-ml-10 bg-gray-800 row-start-4 row-end-4 col-start-3 col-end-10  h-24 2xl:-ml-20 2xl:mt-16   ">
              <p
                class=" my-6    md:mx-14  text-gray-100   text-xl xl:pl-48  2xl:ml-80
                             "
              >
                conheça nossas soluções
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero_section;
