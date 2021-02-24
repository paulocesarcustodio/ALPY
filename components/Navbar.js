import React, { Component } from 'react'

class navbar extends Component {
    render() {
        return (
            <div>
                  {/* navbar goes here */}
      <nav class="bg-black">
        <div class="max-w-7xl mx-auto px-14 ">

          <div class="flex justify-between">
            <div class="flex space-x-4" >
              
            {/* logo */}        
              <div >
                <a href="#" class="  flex items-center py-3 px-3 text-white ">
                  <svg class="h-8 w-8 mr-2 text-red-600 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" />
                 
                </svg>
                <span class="font-bold"> ALPY</span>
                </a>
          </div>
          {/* primary nav*/}
             
          </div>
          {/* secundary nav */}
            <div>
             <div class="hidden md:flex items-center space-x-4 ">  
                <a href="#"class="font-bold py-5 px-4 text-gray-100 ">serviços</a>
                <a href="#"class="font-bold py-5 px-4 text-gray-100">preços</a>
                <a href="#"class="font-bold py-5 px-4 text-gray-100">equipe</a>
                <a href="#"class="font-bold py-5 px-4 text-gray-100">contato</a>
                <a href="#"class="font-bold py-5 px-4 text-gray-100">clientes</a>
              
              </div>
              <div>
                <button class= "mobile-menu hidden"><svg class=" w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
</svg></button>
              </div>
        {/* mobile menu*/}
              <div class="md:hidden flex items-center ">
                <a href="#" class="block py-2 p-x4 text-sm hover:bg-gray-300 ">clientes</a>
                <a href="#" class="block py-2 p-x4 text-sm hover:bg-gray-300 ">serviços</a>
                <a href="#" class="block py-2 p-x4 text-sm hover:bg-gray-300 ">preços</a>
                <a href="#" class="block py-2 p-x4 text-sm hover:bg-gray-300 ">equipe</a>
                <a href="#" class="block py-2 p-x4 text-sm hover:bg-gray-300 ">contato</a>
        </div>
          </div>
          </div> 

        </div>
        <div>

        </div>
      </nav>
    </div>
          
        )
    }
}

export default navbar
