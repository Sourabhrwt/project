import React from "react";
import "../App.css";

const Home = () => {
  return (
    <>
      <div className="mt-6 w-full text-center">
        <div className="main mx-10 h-full w-full p-36">
          <div className="flex h-full w-full max-w-[1240px] flex-col items-center justify-center">
            <div className="mt-[-4rem]">
              <h1 className=" text-xl text-white md:text-[4rem]">
                Grow your business.
              </h1>
              <p className="text-[10px] text-slate-300 md:p-12 md:text-xl">
                Give your business a boost with a beautifully crafted homepage.
              </p>
              <button className="mt-6 h-8 w-32 bg-white text-sm tracking-widest  text-black duration-500 md:h-12 md:w-40">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 md:m-40 flex items-center flex-col ">
          <p className="font-mono text-[16px] -tracking-tighter text-gray-600">
            WHAT WE BELIEVE IN
          </p>
          <h1 className="mt-4 text-center font-mono text-3xl md:text-4xl ">
            Grow your business, establish your brand, and put your customers
            first.
          </h1>
        </div>
        <div className="ml-8 md:ml-16 mt-4 h-0.5 w-[90%] bg-gray-100"></div>
      </div>

      {/* about */}
      <div className="md:m-8 md:flex items-center">
        <div className="w-full m-6 md:m-4 md:w-[30%]">
          <h1 className=" font-mono -tracking-tighter text-gray-600">ABOUT</h1>
          <h2 className="mt-3 text-4xl">Who we are</h2>
          <p className="mt-3 text-[18px] tracking-wide text-gray-500">
            Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor
            venenatis feugiat. Etiam quis faucibus erat, non accumsan leo.
            Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper
            gravida tellus ut consequat.
          </p>
          <button className="mt-6 h-12 w-40 bg-black tracking-widest text-white duration-500 hover:bg-gray-900">
            LEARN MORE
          </button>
        </div>
        <div className="ml-6 md:ml-40">
          <img
            src="https://images.pexels.com/photos/450055/pexels-photo-450055.jpeg?auto=compress&cs=tinysrgb&w=500 "
            width="656px"
          />
        </div>
      </div>
      {/* team */}
      <div className="md:m-6 md:mt-32 md:flex items-center">
        <div className="m-6 md:w-[50%] ">
          <h1 className=" font-mono -tracking-tighter text-gray-600">TEAM</h1>
          <h2 className="mt-3 text-4xl">What we do</h2>
          <p className="mt-3 text-[18px] tracking-wide text-gray-500">
            Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor
            venenatis feugiat. Etiam quis faucibus erat, non accumsan leo.
            Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper
            gravida tellus ut consequat.
          </p>
          <button type="" className="mt-6 h-12 w-40 bg-black tracking-widest text-white duration-500 hover:bg-gray-900">
            LEARN MORE
          </button>
        </div>
        <div className="ml-6 md:ml-[18rem]">
          <img
          alt="img"
            src="https://images.pexels.com/photos/450055/pexels-photo-450055.jpeg?auto=compress&cs=tinysrgb&w=500 "
            width="300px"
          />
        </div>
      </div>
      {/* about  */}
      <div className="mt-12 md:mt-32 w-full">
        <div className="flex flex-col items-center justify-center">
          <p className="font-mono -tracking-tighter text-gray-600">ABOUT US</p>
          <h1 className="mt-3 text-5xl">Company news</h1>
        </div>
        <div className="mt-14 md:flex items-start justify-center">
          <div className="md:w-[33.3%]">
            <h1 className="m-6 text-3xl">10 Quick Tips About Blogging</h1>
            <p className="m-6  tracking-wide text-gray-500">FEB 21, 2023</p>
            <p className="m-6 text-[18px] tracking-wide text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div className="md:w-[33.3%]">
            <h1 className="m-6 text-3xl">
              15 Best Blogs To Follow About Web Design
            </h1>
            <p className="m-6  tracking-wide text-gray-500">FEB 21, 2023</p>
            <p className="m-6 text-[18px] tracking-wide text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div className="md:w-[33.3%]">
            <h1 className="m-6 text-3xl">
              7 of the Best Examples of Beautiful Blog Design
            </h1>
            <p className="m-6  tracking-wide text-gray-500">FEB 21, 2023</p>
            <p className="m-6 text-[18px] tracking-wide text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </div>
      </div>
      {/* footer */}

      <div className="ml-4 mt-32 bg-slate-200">
        <div className="m-16 flex flex-col items-center p-6">
          <div className="m-16 flex flex-col items-center p-12 text-center">
            <h1 className="text-4xl">Grow your business.</h1>
            <p className="mt-4 p-2 text-xl tracking-wide text-gray-500">
              Today is the day to build the business of your dreams. Share your
              mission with the world — and blow your customers away.
            </p>
            <button className="m-8 mb-4 h-12 w-40 bg-black tracking-widest text-white duration-500 hover:bg-gray-900">
              START NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
