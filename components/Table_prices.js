import React, { Component } from 'react'

 class Table_prices extends Component {
    render() {
        return (
            <div>
              <div class="bg-black pb-48">
                <h1 class=" text-center text-4xl pt-12 text-white border-white mb-20">preços</h1>
                {/* table prices */}
              
                    <div class="grid grid-cols-6">
               <table class="text-white col-start-2 col-end-6 ">
                    
                            <thead>
                
                                <th class=" pl-10 text-left p-4  border-b-2 border-white pr-40">Serviços</th>
                            <th class="p-4 border-white border-2">basic</th>
                            <th class="p-4 border-white border-2">standard</th>
                            <th class="p-4 border-white border-2">premium</th>
                            </thead>
                    <tbody>
                            <tr>
                         <td class=" pl-10 text-left p-4 border-r border-t-2  border-b-2 border-white">Implantação</td> 
                        <td class="text-center p-4 border-2 border-white">R$ 9999,00</td>
                        <td class="text-center p-4 border-2 border-white">R$ 9999,00</td>
                        <td class="text-center p-4 border-2 border-white">R$ 9999,00</td>
                            </tr>
                            <tr>
                        <td class=" pl-10 text-left p-4 border-r border-t-2  border-b-2 border-white">Sustentação</td>
                         <td class="text-center p-4 border-2 border-white">R$ 9999,00</td>
                         <td class="text-center p-4 border-2 border-white">R$ 9999,00</td>
                         <td class="text-center p-4 border-2 border-white">R$ 9999,00</td>
                        </tr>
                
                            <tr>
                                <td class=" text-left pl-10 p-4 border-r-2 border-t-2  border-b-2 border-white">Evolução</td>
                         <td class="text-center p-4 border-2 border-white">R$ 9999,00</td>
                         <td class="text-center p-4 border-2 border-white">R$ 9999,00</td>
                         <td class="text-center p-4 border-2 border-white">R$ 9999,00</td>
                        </tr>
                                <tr>
            
                                    <td class=" pl-10 text-left p-4  ">Full Stack</td>
                                 
                                    <td  colspan="3" class=" text-center border-b-2  border-r-2 border-l-2 border-white 
                        ">agende uma demonstração </td>
                      
                            </tr> 
                    </tbody>
                    </table>
              </div>
                </div>
             
                
               </div>   
        
            
        )
    }
}

export default Table_prices
