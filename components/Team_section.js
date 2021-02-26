import React, { Component } from "react";

class Team_section extends Component {
  render() {
    return (
      <div class="bg-gray-900 pb-32  ">
        <h1 class="text-gray-100 text-4xl text-center p-20 ">Equipe</h1>

        {/* team members */}
        <center>
          <div class=" flex flex-col w-4/5 lg:w-3/5 p-5 2xl:w-1/3">
            <div class=" pb-20 flex flex-col lg:flex-row">
              <figure class="text-center ">
                <img
                  class="w-42 pl-8 lg:pr-5 lg:w-56 xl:w-56 2xl:56"
                  src="/assets/augusto.png"
                  alt="augusto avatar"
                />
                <figcaption class=" text-gray-100  text-3xl text-center pt-3 ">
                  <a href="#">Augusto</a>
                </figcaption>
              </figure>
              <p class="  pt-6 lg:pt-16 text-justify text-gray-100 lg:w-3/5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, dolore explicabo, fuga rem non eligendi nemo
                voluptate corrupti, aliquam nostrum sint mollitia impedit
                reiciendis facere quis fugiat debitis velit laborum!
              </p>
            </div>

            <div class=" pb-20 flex flex-col lg:flex-row-reverse">
              <figure class="text-center ">
                <img
                  class="w-42 pl-8 lg:pr-5 lg:w-56 xl:w-56 2xl:56"
                  src="/assets/Lethicia.png"
                  alt="Lethicia Avatar"
                />
                <figcaption class=" text-gray-100  text-3xl text-center pt-3 ">
                  <a href="#">Lethicia</a>
                </figcaption>
              </figure>
              <p class="  pt-6 lg:pt-16 text-justify text-gray-100 lg:w-3/5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, dolore explicabo, fuga rem non eligendi nemo
                voluptate corrupti, aliquam nostrum sint mollitia impedit
                reiciendis facere quis fugiat debitis velit laborum!
              </p>
            </div>

            <div class=" pb-20 flex flex-col lg:flex-row">
              <figure class="text-center ">
                <img
                  class="w-42 pl-8 lg:pr-5 lg:w-56 xl:w-56 2xl:56"
                  src="/assets/Paulo.png"
                  alt="Paulo Avatar"
                />
                <figcaption class=" text-gray-100  text-3xl text-center pt-3 ">
                  <a href="#">Paulo</a>
                </figcaption>
              </figure>
              <p class="  pt-6 lg:pt-16 text-justify text-gray-100 lg:w-3/5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, dolore explicabo, fuga rem non eligendi nemo
                voluptate corrupti, aliquam nostrum sint mollitia impedit
                reiciendis facere quis fugiat debitis velit laborum!
              </p>
            </div>

            <div class=" pb-20 flex flex-col lg:flex-row-reverse">
              <figure class="text-center ">
                <img
                  class="w-42 pl-8 lg:pr-5 lg:w-56 xl:w-56 2xl:56"
                  src="/assets/Yara.png"
                  alt="Yara Avatar"
                />
                <figcaption class=" text-gray-100  text-3xl text-center pt-3 ">
                  <a href="#">Yara</a>
                </figcaption>
              </figure>
              <p class="  pt-6 lg:pt-16 text-justify text-gray-100 lg:w-3/5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, dolore explicabo, fuga rem non eligendi nemo
                voluptate corrupti, aliquam nostrum sint mollitia impedit
                reiciendis facere quis fugiat debitis velit laborum!
              </p>
            </div>
          </div>
        </center>
      </div>
    );
  }
}

export default Team_section;
