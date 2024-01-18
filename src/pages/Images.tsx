import { useImageContext } from "../context/useImageContext";
import { Link } from "react-router-dom";

function Images() {
  const { urlToDisplay } = useImageContext();
  return (
    <div className="flex flex-wrap justify-center items-start gap-14 my-6 ">
      {urlToDisplay?.map((data, index) => {
        const { id, webformatURL, tags } = data;
        return (
          <Link
            to={`/image/${id}`}
            key={index}
            className="flex  w-[364.59px] flex-col items-start gap-3 flex-shrink-0 cursor-pointer "
          >
            <img
              src={webformatURL}
              alt="/preview"
              loading="lazy"
              className="w-full h-[243px] rounded-lg object-cover "
            />
            <div className="flex pr-2 items-start gap-[7px] flex-wrap ">
              {tags.split(" ").map((tag, index) => {
                return (
                  <div
                    key={index}
                    className="flex py-0 pr-[15px] pl-[7px] rounded-[1.776px] bg-[#F5F5F5] "
                  >
                    <p className="text-[#767676] text-[11.541px] font-normal leading-6 text-capitalize  ">
                      {" "}
                      {tag}{" "}
                    </p>
                  </div>
                );
              })}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Images;
