import React, { Component } from 'react'

 class Card_section extends Component {
    render() {
        return (
            <div class="bg-gray-800 h-90 pb-12">

              
                <div class="text-center text-gray-100 pt-16 ">
                
                <h1 class=" text-4xl">serviços</h1>
                 <p class=" pt-5 font-bold text-xl ">o game changing que o seu ecommerce precisa </p>   
                </div>

                
                {/* cards */}
        
                <div class="flex flex-col gap-y-36 pt-16 px-5 md:gap-5 md:flex-row lg:flex-row lg:gap-20 lg:place-content-center xl:flex-row 2xl:flex-row 2xl:gap-20 2xl:place-content-center mb-8">

                
                    <div class=" bg-red-500  shadow-lg my-2 px-4 py-5 h-56">
                        

                        
                        <h1 class="text-gray-900 text-2xl mb-3  text-center   ">
                                Implantação
                        </h1>
                        <section class=" bg-red-700  shadow-inner -mx-4 pb- ">
                            <div class="text-black text-center px-5 pt-8 pb-20 ">
                                 <p class="py-1 text-left">- Criação de loja do zero</p>
                                 <p class="py-1 text-left">- Integração de sistemas</p>
                                 <p class="py-1 text-left">- Cadrasto em massa de SKUs</p>    
                            </div>

                            <a href="#">
                                <p class="text-center pb-8 ">E MAIS +</p>
                            </a>
                    </section>
                        
                            
                    </div>
                      <div class=" bg-indigo-500  shadow-lg my-2 px-4 py-5 h-56">
                        

                        
                        <h1 class="text-gray-900 text-2xl mb-3  text-center   ">
                                Sustentação
                        </h1>
                        <section class=" bg-indigo-700  shadow-inner -mx-4 pb- ">
                            <div class="text-black text-center px-5 pt-8 pb-20 ">
                                 <p class="py-1 text-left">- Criação de loja do zero</p>
                                 <p class="py-1 text-left">- Integração de sistemas</p>
                                 <p class="py-1 text-left">- Cadrasto em massa de SKUs</p>    
                            </div>

                            <a href="#">
                                <p class="text-center pb-8 ">E MAIS +</p>
                            </a>
                    </section>
                        
                            
                    </div>
                      <div class=" bg-lime-500 shadow-lg my-2 px-4 py-5 h-72">
                        

                        
                        <h1 class="text-gray-900 text-2xl mb-3  text-center   ">
                                Evolução
                        </h1>
                        <section class=" bg-lime-700  shadow-inner -mx-4 pb- ">
                            <div class="text-black text-center px-5 pt-8 pb-20 ">
                                 <p class="py-1 text-left">- Criação de loja do zero</p>
                                 <p class="py-1 text-left">- Integração de sistemas</p>
                                 <p class="py-1 text-left">- Cadrasto em massa de SKUs</p>    
                            </div>

                            <a href="#">
                                <p class="text-center pb-8 ">E MAIS +</p>
                            </a>
                    </section>
                        
                            
                    </div>
                                    
                                      
                </div>
                

                
            </div>
        )
    }
}

export default Card_section
