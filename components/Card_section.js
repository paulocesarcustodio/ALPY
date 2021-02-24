import React, { Component } from 'react'

 class Card_section extends Component {
    render() {
        return (
            <div class="bg-gray-800 h-90 pb-12">

              
                <div class="text-center text-gray-100 pt-16 ">
                
                <h1 class=" text-4xl">serviços</h1>
                 <p class=" pt-5 font-bold text-xl ">o game changing que o seu ecommerce precisa</p>   
                </div>

                
                {/* cards */}
        
                <div class="h-64 grid grid-rows-1 grid-flow-col place-content-center gap-14 lg:mx-48 lg:mt-20 xl:ml-2xl 2xl:gap-32 ">

                
                    <div class=" bg-red-500 max-w-xs  overflow-hidden shadow-lg my-2 px-4 py-5">
                        

                        
                        <h1 class="text-gray-900 text-2xl mb-3  text-center   ">
                                Implantação
                        </h1>
                        <section class=" bg-red-700  shadow-inner -mx-4 pb-48 ">
                            <div class="text-black text-center px-5 py-5">
                                 <p class="py-1 text-left">- Criação de loja do zero</p>
                                 <p class="py-1 text-left">- Integração de sistemas</p>
                                 <p class="py-1 text-left">- Cadrasto em massa de SKUs</p>    
                            </div>

                            <a href="">
                                <p class="text-center">E MAIS +</p>
                            </a>
                    </section>
                        
                            
                    </div>
                                        <div class=" bg-indigo-600 max-w-xs  overflow-hidden shadow-lg my-2 px-4 py-5">
                        

                        
                        <h1 class="text-gray-900 text-2xl mb-3  text-center   ">
                                Sustentação
                        </h1>
                        <section class="bg-indigo-800  shadow-inner -mx-4 pb-48 ">
                            <div class="text-black text-center px-5 py-5">
                                 <p class="py-1 text-left">- Criação de loja do zero</p>
                                 <p class="py-1 text-left">- Integração de sistemas</p>
                                 <p class="py-1 text-left">- Cadrasto em massa de SKUs</p>    
                            </div>

                            <a href="">
                                <p class="text-center">E MAIS +</p>
                            </a>
                    </section>
                        
                            
                    </div>
                                        <div class=" bg-lime-500 max-w-xs  overflow-hidden shadow-lg my-2 px-4 py-5">
                        

                        
                        <h1 class="text-gray-900 text-2xl mb-3  text-center   ">
                                Evolução
                        </h1>
                        <section class=" bg-lime-600  shadow-inner -mx-4 pb-48 ">
                            <div class="text-black text-center px-5 py-5">
                                 <p class="py-1 text-left">- Criação de loja do zero</p>
                                 <p class="py-1 text-left">- Integração de sistemas</p>
                                 <p class="py-1 text-left">- Cadrasto em massa de SKUs</p>    
                            </div>

                            <a href="">
                                <p class="text-center">E MAIS +</p>
                            </a>
                    </section>
                        
                            
                </div>
                </div>
                

                
            </div>
        )
    }
}

export default Card_section
