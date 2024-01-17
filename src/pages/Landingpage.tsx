import { CiSearch } from "react-icons/ci";

function Landingpage() {
  return (
    <div className="bg-[url('./assets/home-background.jfif')] w-full h-screen bg-no-repeat bg-cover bg-bottom  ">
      <div
        className="flex flex-col items-center justify-center  pt-[30px] text-white z-10 
      gap-14  "
      >
        {/* first div  */}
        <div className="w-[90%] shadow backdrop-blur-[25.034873962402344px] bg-zinc-300 bg-opacity-10 flex justify-between items-center px-5 min-h-[68px] rounded-lg ">
          <h3 className="text-white text-lg font-semibold leading-5 max-w-[91px] ">
            Homepage
          </h3>
          <div className="flex items-center justify-center gap-5 ">
            <p className="text-white text-lg font-semibold leading-5 max-w-[44px]">
              Login
            </p>
            <button className=" w-[163px] h-[35px] rounded-lg border-[2.672px] border-solid border-white ">
              Create Account
            </button>
          </div>
        </div>
        {/* first div  */}
        {/* second div  */}
        <div className="w-[80%] ">
          <h1 className="text-white text-center text-7xl font-bold leading-[88px] max-w-[841px] max-md:text-4xl max-md:leading-[55px] m-auto ">
            {" "}
            <h1>Discover over 2,000,000 free Stock Images</h1>
          </h1>
        </div>
        {/* second div  */}
        {/* third div  */}
        <div className="flex flex-col items-center gap-7 w-[38%]  ">
          <div className="shadow backdrop-blur-[25.034873962402344px] bg-zinc-300 bg-opacity-10  min-h-[67px] w-full rounded-lg flex items-center px-3 ">
            <CiSearch className="mr-2 border-r border-zinc-300 pr-2 text-[1.8rem]  " />
            <input
              type="text"
              placeholder="Search"
              className=" bg-transparent border-none outline-none text-white text-lg font-semibold leading-5 w-[80%] "
            />
            <div className=" ml-auto flex justify-center items-center min-h-[34px] max-w-[70px]  rounded-lg border-[2.672px] border-solid border-white px-2 ">
              <button className="ml-auto text-white text-lg font-semibold leading-5 max-w-[32px]  text-center ">
                Go!
              </button>
            </div>
          </div>
          <div className="shadow backdrop-blur-[25.034873962402344px] bg-zinc-300 bg-opacity-10  min-h-[39px] w-[45.8%]  rounded-lg  flex items-center justify-center ">
            <div className="text-white text-sm text-center leading-5 w-full">
              <span className="font-bold">Trending:</span>{" "}
              <span className="">flowers, love, forest, river</span>
            </div>
          </div>
        </div>
        {/* third div  */}
      </div>
    </div>
  );
}

export default Landingpage;
