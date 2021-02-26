import React, { Component } from "react";

class Table_prices extends Component {
  render() {
    return (
      <div>
        <div class="bg-black pb-32 px-10 overflow-x-auto   ">
          <h1 class=" text-center text-4xl pt-12 text-white border-white mb-20">
            preços
          </h1>
          {/* table prices */}
          <center>
            <table class="text-white lg:w-4/5  xl:w-4/5 2xl:w-3/5">
              <thead>
                <th class=" pl-10 text-left p-4  border-b-2 border-white">
                  Serviços
                </th>
                <th class="p-4 px-8 border-white border-2">basic</th>
                <th class="p-4 border-white border-2">standard</th>
                <th class="p-4 border-white border-2">premium</th>
              </thead>
              <tbody>
                <tr>
                  <td class=" pl-10 text-left p-4 border-r border-t-2  border-b-2 border-white">
                    Implantação
                  </td>
                  <td class="text-center p-4 border-2 border-white">
                    R$ 9999,00
                  </td>
                  <td class="text-center p-4 border-2 border-white">
                    R$ 9999,00
                  </td>
                  <td class="text-center p-4 border-2 border-white">
                    R$ 9999,00
                  </td>
                </tr>
                <tr>
                  <td class=" pl-10 text-left p-4 border-r border-t-2  border-b-2 border-white">
                    Sustentação
                  </td>
                  <td class="text-center p-4 border-2 border-white">
                    R$ 9999,00
                  </td>
                  <td class="text-center p-4 border-2 border-white">
                    R$ 9999,00
                  </td>
                  <td class="text-center p-4 border-2 border-white">
                    R$ 9999,00
                  </td>
                </tr>

                <tr>
                  <td class=" text-left pl-10 p-4 border-r-2 border-t-2  border-b-2 border-white">
                    Evolução
                  </td>
                  <td class="text-center p-4 border-2 border-white">
                    R$ 9999,00
                  </td>
                  <td class="text-center p-4 border-2 border-white">
                    R$ 9999,00
                  </td>
                  <td class="text-center p-4 border-2 border-white">
                    R$ 9999,00
                  </td>
                </tr>
                <tr>
                  <td class=" pl-10 text-left p-4  ">Full Stack</td>

                  <td
                    colspan="3"
                    class=" text-center  border-b-2  border-r-2 border-l-2 border-white font-semibold
                        "
                  >
                    agende uma demonstração{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </center>
        </div>
      </div>
    );
  }
}

export default Table_prices;
