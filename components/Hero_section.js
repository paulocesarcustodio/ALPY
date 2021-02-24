import React, { Component } from 'react'

class Hero_section extends Component {
    render() {
        return (
            <div>
                {/* catch phrase  */}
                <section class=" bg-gray-800 bg-hero-pattern bg-no-repeat bg-top -mb-14 sm:w-full   "  >
                
                    <div class="grid grid-cols-8 grid-rows-4  " >
                    <h1 class="  shadow-lg col-start-2 col-end-4 row-start-2 row-end-2  bg-black  text-gray-100 text-3xl px-6 py-8 xl: ml-8 mr-9  pr-8 xl:col-end-6 xl:-mt-8 xl:-mb-5   sm:pr-52 2xl: mt-6 2xl:mr-96 pl-20 2xl:mb-5  ">
                            Sua equipe de e-commerce remota flexível e eficiente 
                        </h1>
                      {/* call to action */}
                        <div class=" bg-gray-800 row-start-4 row-end-4 col-start-3 col-end-9  h-24 lg:mt-16   ">
                           
                            <p class="text-gray-100   text-xl xl:pl-48 pt-8 pb-2  2xl:ml-80
                             ">
                                conheça nossas soluções
                         </p>
                            
                           
                                    
                        
                        </div>
                 
                    </div>
                
                </section>
            </div>
        )
    }
}

export default Hero_section
