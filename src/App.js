import { useState } from "react";
import "./index.css";
import { useAuth0 } from "@auth0/auth0-react";
import { FaBars } from "react-icons/fa";

function App() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [show, setShow] = useState(false);

  return (
    <>
      {/* navbar */}
      <div className="w-screen p-3 px-4  bg-black">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center justify-center gap-x-32 ">
            <p className="text-orange-600 text-2xl font-bold" alt="Logo">
              FarmOre
            </p>
            <div className="hidden md:flex items-center gap-6 ">
              <ul className="text-white cursor-pointer hover:bg-slate-600">
                Home
              </ul>
              <ul className="text-white cursor-pointer hover:bg-slate-600">
                About
              </ul>
              <ul className="text-white cursor-pointer hover:bg-slate-600">
                Category
              </ul>
              <div className="ml-[35rem]">
                {isAuthenticated ? (
                  <button
                    className="text-white cursor-pointer "
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Log out
                  </button>
                ) : (
                  <button
                    className="text-white cursor-pointer"
                    onClick={() => loginWithRedirect()}
                  >
                    Log in
                  </button>
                )}
              </div>
            </div>
          </div>
          <div
            className={`${
              show ? "w-24" : "w-0 hidden"
            } lg:w-48 bg-teal-600  relative duration-500`}
          >
            <div>
              <ul className="text-white cursor-pointer hover:bg-slate-600">
                Home
              </ul>
              <ul className="text-white cursor-pointer hover:bg-slate-600">
                About
              </ul>
              <ul className="text-white cursor-pointer hover:bg-slate-600">
                Category
              </ul>
            </div>
          </div>
          <button
            onClick={() => setShow(!show)}
            className="md:hidden bg-white m-4 ml-[15rem]"
          >
            {<FaBars />}
          </button>
          {/* sidebar */}
        </div>
      </div>
      <div className="md:mt-10 ">
        <div className="flex flex-row">
          <div className="m-10 md:m-16">
            <h1 className=" uppercase md:text-[4rem] tracking-widest text-gray-600">
              Connect
            </h1>
            <p className=" text-[10px] md:text-sm mt-2 md:tracking-widest text-gray-600">
              Adding Green to Your Life.
              <br /> Bringing growth to agriculture
            </p>
            <div className="mt-6">
              <button className="w-10 h-5 bg-black text-[5px] md:text-xs text-white md:w-32 md:h-10">
                READ MORE
              </button>
              <button className="hidden w-10 h-5 ml-4 bg-gray-700 text-[5px] text-white border-black md:w-32 md:h-10">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="mt-8 md:ml-16">
            <img src="https://images.pexels.com/photos/7125409/pexels-photo-7125409.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
