import { CiSearch } from "react-icons/ci";
import { useImageContext } from "../context/useImageContext";
import LoadingBee from "../assets/loadingAnimation.gif";
import SearchResults from "./SearchResults";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

function Landingpage() {
  const { fetchImages, setSearchInput, searchInput, urlToDisplay, loading } =
    useImageContext();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [randomBg, setRandomBg] = useState<[]>([]);

  const fetchRandomBg = async () => {
    try {
      const response = await fetch(
        "https://pixabay.com/api/?key=41879709-750e226c45d736ce651de13b0"
      );
      const data = await response.json();
      const res = data.hits;
      const randomObject = res[Math.floor(Math.random() * res.length)];
      setRandomBg(randomObject.largeImageURL);
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  useEffect(() => {
    fetchRandomBg();

    const intervalId = setInterval(fetchRandomBg, 2 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="w-full h-full bg-no-repeat bg-cover  bg-slate-300 "
      style={{
        backgroundImage: `url(${randomBg})`,
        height: urlToDisplay.length === 0 ? "100vh" : "400px",
        scale: urlToDisplay.length === 0 ? "" : "1",
        backgroundPosition: urlToDisplay.length === 0 ? "bottom" : "center",
      }}
    >
      <div
        className="flex flex-col items-center justify-center  pt-[30px] text-white z-10 
      gap-14 sm:gap-11  "
      >
        <div className="w-[90%] relative shadow backdrop-blur-[25.034873962402344px] bg-zinc-300 bg-opacity-10 flex justify-between items-center px-5 min-h-[68px] rounded-lg ">
          <h3 className="text-white text-lg font-semibold leading-5 max-w-[91px] ">
            Pixabay-∞
          </h3>
          <div className="flex items-center justify-center md:gap-5 sm:hidden md:block ">
            <button className="text-white text-lg md:mr-4 font-semibold leading-5 max-w-[44px]">
              Login
            </button>
            <button className=" w-[163px] h-[35px] rounded-lg border-[2.672px]  border-solid border-white ">
              Create Account
            </button>
          </div>
          <div className="flex items-center justify-center gap-5 sm:block md:hidden ">
            <AiOutlineMenu onClick={() => setShowMenu(!showMenu)} />
          </div>

          {showMenu && (
            <div className="flex shadow backdrop-blur-[25.034873962402344px] bg-[#0D1530] bg-opacity-100 right-11 p-4 rounded-lg top-8 flex-col absolute items-center justify-center gap-5 z-10 ">
              <button className="text-white text-lg font-semibold leading-5 max-w-[44px]">
                Login
              </button>
              <button className=" w-[163px] h-[35px] rounded-lg border-[2.672px] border-solid border-white ">
                Create Account
              </button>
            </div>
          )}
        </div>

        <div
          className="w-[80%] "
          style={{
            display: urlToDisplay.length === 0 ? "block" : "none",
          }}
        >
          <h1 className="text-white text-center text-7xl font-bold leading-[88px] max-w-[841px] max-md:text-4xl sm:text-5xl sm:leading-[50px] lg:text-[4rem] lg:leading-[70px] max-md:leading-[55px] m-auto ">
            {" "}
            <h1>Discover over 2,000,000 free Stock Images</h1>
          </h1>
        </div>

        <div className="flex flex-col items-center gap-7 w-[38%] sm:w-[70%] lg:w-[55%] -z-0 ">
          <div className="shadow backdrop-blur-[25.034873962402344px] bg-zinc-300 bg-opacity-10  min-h-[67px] w-full rounded-lg flex items-center px-3  ">
            <CiSearch className="mr-2 border-r border-zinc-300 pr-2 text-[1.8rem]  " />
            <input
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className=" bg-transparent border-none outline-none text-white text-lg font-semibold leading-5 w-[80%] "
            />
            <div className=" ml-auto flex justify-center items-center min-h-[34px] max-w-[70px]  rounded-lg border-[2.672px] border-solid border-white px-2 ">
              <button
                className="ml-auto text-white text-lg font-semibold leading-5 max-w-[32px]  text-center "
                onClick={fetchImages}
              >
                Go!
              </button>
            </div>
          </div>
          {urlToDisplay.length === 0 ? (
            <div className="shadow backdrop-blur-[25.034873962402344px] bg-zinc-300 bg-opacity-10  min-h-[39px] w-[45.8%] sm:w-[60%]  rounded-lg  flex items-center justify-center ">
              <div className="text-white text-sm text-center leading-5 w-full  ">
                <span className="font-bold">Trending:</span>{" "}
                <span className="">flowers, love, forest, river</span>
              </div>
            </div>
          ) : (
            <div className="text-white text-center text-5xl font-bold leading-[87px] sm:leading-[55px] ">
              Results: {searchInput.toLocaleUpperCase()}
            </div>
          )}
        </div>
      </div>
      {!loading ? (
        <SearchResults />
      ) : (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <img src={LoadingBee} alt="Loading..." />
        </div>
      )}
    </div>
  );
}

export default Landingpage;
