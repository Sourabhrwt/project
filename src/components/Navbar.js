import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex items-center justify-between w-full h-20">
        <div className="m-14">
          <h2 className="underline font-bold text-2xl -tracking-tighter ">
            Business
          </h2>
        </div>
        <div className="hidden md:flex items-center justify-center gap-12 ml-[5rem]">
          <a
            href="#"
            className="text-gray-500 text-sm -tracking-tighter hover:text-black duration-500"
          >
            ABOUT
          </a>
          <a
            href="#"
            className="text-gray-500 text-sm -tracking-tighter hover:text-black duration-500"
          >
            WORK
          </a>
          <a
            href="#"
            className="text-gray-500 text-sm -tracking-tighter hover:text-black duration-500"
          >
            TEAM
          </a>
          <a
            href="#"
            className="text-gray-500 text-sm -tracking-tighter hover:text-black duration-500"
          >
            BLOG
          </a>
          <a
            href="#"
            className="text-gray-500 text-sm -tracking-tighter hover:text-black duration-500"
          >
            CONTACT
          </a>
        </div>
        <button className="hidden md:block mr-[2rem] bg-black text-white h-10 w-32 hover:bg-gray-800 duration-500">
          CONTACT US
        </button>
        <div onClick={handleNav} className="mr-8 md:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* // phone view */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w[45%] h-screen bg-[#ecf0f2] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <a href="/">
                <h2 className="underline font-bold text-2xl -tracking-tighter">
                  Business
                </h2>
              </a>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="">
              <ul className="flex flex-col">
                <a
                  href="#"
                  onClick={() => setNav(false)}
                  className="py-4 text-gray-500 text-sm -tracking-tighter hover:text-black duration-500"
                >
                  ABOUT
                </a>
                <a
                  href="#"
                  onClick={() => setNav(false)}
                  className="py-3 text-gray-500 text-sm -tracking-tighter hover:text-black duration-500"
                >
                  WORK
                </a>
                <a
                  href="#"
                  onClick={() => setNav(false)}
                  className="py-3 text-gray-500 text-sm -tracking-tighter hover:text-black duration-500"
                >
                  TEAM
                </a>
                <a
                  href="#"
                  onClick={() => setNav(false)}
                  className="py-3 text-gray-500 text-sm -tracking-tighter hover:text-black duration-500"
                >
                  BLOG
                </a>
                <a
                  href="#"
                  onClick={() => setNav(false)}
                  className="py-3 text-gray-500 text-sm -tracking-tighter hover:text-black duration-500"
                >
                  CONTACT
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
