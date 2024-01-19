import CrossIcon from "../assets/cross.svg";
import ModalFooter from "./ModalFooter";
import { FC, useState } from "react";
import ReactDOM from "react-dom";
import { ImageInterface } from "./Images";

interface downloadOptionsProp {
  id: number;
  format: string;
  webFormat: string;
}

const downloadOptions: downloadOptionsProp[] = [
  {
    id: 1,
    format: "small",
    webFormat: "640x960",
  },
  {
    id: 2,
    format: "medium",
    webFormat: "1920x2660",
  },
  {
    id: 3,
    format: "big",
    webFormat: "2400x3600",
  },
  {
    id: 4,
    format: "original",
    webFormat: "3850x5640",
  },
];

interface ImageDetailProps {
  selectedImage: ImageInterface;
  closeModal: () => void;
}

const ImageDetail: FC<ImageDetailProps> = ({ selectedImage, closeModal }) => {
  const [checkedOption, setCheckedOption] = useState<number | null>(1);

  const {
    id,
    type,
    tags,
    webformatURL,
    largeImageURL,
    views,
    downloads,
    likes,
    user_id,
    user,
  } = selectedImage;

  const handleDownload = async () => {
    try {
      const response = await fetch(largeImageURL);
      const blob = await response.blob();

      // Create a data URL from the blob
      const url = URL.createObjectURL(blob);

      // Create a download link
      const link = document.createElement("a");
      link.href = url;
      link.download = `image_${id}.jpg`;

      // Trigger the click event to start the download
      link.click();
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  const handleCheckboxChange = (optionId: number) => {
    setCheckedOption((prevOption) =>
      prevOption === optionId ? null : optionId
    );
  };

  return ReactDOM.createPortal(
    <div className=" w-[85vw] h-[680px] flex-shrink-0 rounded-lg bg-white shadow-lg fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] flex flex-col gap-2 pb-4 ">
      <div className="w-full h-[65.415px]  flex-shrink-0 rounded-t-lg rounded-b-none bg-[#F5F5F5] flex justify-between items-center px-4 ">
        <p className=" text-[#3B4043] text-[21.325px] font-medium leading-[51.447px] ">
          Preview ID: {id}{" "}
        </p>
        <img
          src={CrossIcon}
          onClick={closeModal}
          alt="/closebtn"
          className="w-[29.63px] h-[29.63px] flex-shrink-0 cursor-pointer "
        />
      </div>

      <div className="flex justify-start px-4  ">
        <img
          loading="lazy"
          src={webformatURL}
          alt="/previewImg"
          className="w-[840.106px] h-[535.345px] flex-shrink-0 rounded-lg object-contain object-center overflow-hidden scale-1  "
        />
        <div className="flex flex-col ml-auto gap-6 ">
          <div className="flex flex-col items-start justify-start gap-4  ">
            <Heading heading="Download" />
            <div className=" h-[163.729px] flex-shrink-0 flex flex-col ">
              {downloadOptions?.map((data) => {
                return (
                  <div
                    className="inline-flex py-[3.554px] pr-[17.771px] pl-[14.217px] justify-between items-center rounded-r-[5.331px] border-[0.889px] border-[#DEE8F4] gap-24 "
                    style={{
                      backgroundColor:
                        checkedOption === data.id ? "#F5F5F5" : "",
                    }}
                  >
                    <p className=" text-[#475467] text-[12.44px] font-normal leading-[21.325px] w-[120.84px] ">
                      {" "}
                      {data.format}{" "}
                    </p>
                    <div className="flex gap-8">
                      <p className=" text-[#475467] text-[12.44px] font-bold leading-[33.765px] ">
                        {" "}
                        {data.webFormat}{" "}
                      </p>
                      <div className="inline-flex items-center">
                        <label
                          className="relative flex items-center p-3 rounded-full cursor-pointer"
                          htmlFor="customStyle"
                        >
                          <input
                            onChange={() => handleCheckboxChange(data.id)}
                            checked={checkedOption === data.id}
                            type="checkbox"
                            className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-white transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#4BC34B] checked:bg-[#4BC34B] checked:before:bg-gray-900 "
                            id="customStyle"
                          />

                          <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              fill="none"
                            >
                              <path
                                d="M8.0709 3.19971L3.99837 7.27224L2.14722 5.42109"
                                stroke="white"
                                stroke-width="1.48092"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              onClick={handleDownload}
              className="text-white w-full text-center text-xs font-semibold leading-5 whitespace-nowrap bg-green-500 justify-center items-center mt-6 px-16 py-3.5 rounded max-md:px-5"
            >
              Download for free!
            </button>
          </div>

          <div>
            <Heading heading="Information" />
            <div className="  grid grid-cols-3 gap-14  ">
              <Information heading="user" title={user} />
              <Information heading="user_id" value={user_id} />
              <Information heading="type" title={type} />
              <Information heading="views" value={views} />
              <Information heading="downloads" value={downloads} />
              <Information heading="likes" value={likes} />
            </div>
          </div>
        </div>
      </div>
      <ModalFooter tags={tags} />
    </div>,
    document.getElementById("modal-root")!
  );
};

interface headingProps {
  heading: string;
}

const Heading = ({ heading }: headingProps) => (
  <h2 className="  text-[#3B4043] text-[21.325px] font-medium leading-[45.447px] ">
    {heading}
  </h2>
);

interface informationProps {
  heading: string;
  title?: string;
  value?: number;
}

const Information = ({ heading, title, value }: informationProps) => (
  <section className="w-[60px] h-[47.102px] flex flex-shrink-0 flex-col items-start gap-2 ">
    <h2 className=" text-[#717579] text-[12.44px] font-semibold leading-[23.102px] text-capitalize  ">
      {" "}
      {heading}{" "}
    </h2>
    {title && (
      <h1 className=" text-[#3B4043] text-[15.994px] font-semibold leading-[23.102px] text-capitalize  ">
        {" "}
        {title}{" "}
      </h1>
    )}
    {value && (
      <h1 className=" text-[#3B4043] text-[15.994px] font-semibold leading-[23.102px] text-capitalize  ">
        {" "}
        {value}{" "}
      </h1>
    )}
  </section>
);

export default ImageDetail;
