import { useParams } from "react-router-dom";
import CrossIcon from "../assets/cross.svg";
import { useImageContext } from "../context/useImageContext";
import { useState } from "react";

function ImageDetail() {
  const { imageId } = useParams<string>();
  const { urlToDisplay } = useImageContext();
  const [downloadLink, setDownloadLink] = useState<string | null>(null);

  const selectedImage = urlToDisplay?.filter(
    (image) => image.id === +imageId
  )[0];

  const {
    id,
    pageURL,
    type,
    tags,
    previewURL,
    previewWidth,
    previewHeight,
    webformatURL,
    webformatWidth,
    webformatHeight,
    largeImageURL,
    imageWidth,
    imageHeight,
    imageSize,
    views,
    downloads,
    collections,
    likes,
    comments,
    user_id,
    user,
    userImageURL,
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

  return (
    <div className="flex items-center justify-center w-full h-[80vh] ">
      <div className=" absolute shadow-lg w-[80%]  top-[60%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-white flex flex-col items-stretch pb-10 rounded-lg z-10 gap-8 ">
        <div
          className="bg-neutral-100 flex w-full 
       h-[76.415px] items-center justify-between gap-5 px-9 py-6 rounded-lg  "
        >
          <div className="text-zinc-700 text-xl font-medium  my-auto">
            Preview ID: {id}
          </div>
          <img
            loading="lazy"
            src={CrossIcon}
            className="aspect-square object-contain object-center  "
          />
        </div>

        <div className="gap-5 flex items-start justify-start max-md:flex-col px-6 ">
          <div className="flex-col overflow-hidden  flex  grow justify-center items-stretch  ">
            <img
              loading="lazy"
              src={webformatURL}
              className=" object-contain object-center w-full h-full overflow-hidden "
            />
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="text-zinc-700 text-xl font-medium leading-[50.61px]">
              Download
            </div>

            <div className="justify-between items-stretch bg-neutral-100 flex gap-5 mt-6 px-4 py-1 rounded-md border-[0.889px] border-solid border-slate-200">
              <div className="text-slate-600 text-xs leading-5 self-center grow whitespace-nowrap my-auto">
                Small
              </div>
              <div className="text-slate-600 text-xs font-bold leading-9">
                640x960
              </div>

              <input
                type="checkbox"
                className="bg-white self-center flex w-3.5 h-[15px]  rounded-full"
              />
            </div>
            <div className="items-stretch bg-white flex justify-between gap-5 px-4 py-1 border-x-[0.889px] border-x-slate-200 border-solid">
              <div className="text-slate-600 text-xs leading-5 self-center grow whitespace-nowrap my-auto">
                Medium
              </div>
              <div className="text-slate-600 text-xs font-bold leading-9">
                1920x2660
              </div>
              <input
                type="checkbox"
                className="bg-white self-center flex w-3.5 h-[15px]  rounded-full"
              />
            </div>
            <div className="items-stretch bg-white flex justify-between gap-5 px-4 py-1 border-t-[0.889px] border-t-slate-200 border-x-[0.889px] border-x-slate-200 border-solid">
              <div className="text-slate-600 text-xs leading-5 self-center grow whitespace-nowrap my-auto">
                Big
              </div>
              <div className="text-slate-600 text-xs font-bold leading-9">
                2400x3600
              </div>
              <input
                type="checkbox"
                className="bg-white self-center flex w-3.5 h-[15px]  rounded-full"
              />
            </div>
            <div className="items-stretch bg-white flex justify-between gap-5 px-4 py-1 rounded-none border-[0.889px] border-solid border-slate-200">
              <div className="text-slate-600 text-xs leading-5 self-center grow whitespace-nowrap my-auto">
                Original
              </div>
              <div className="text-slate-600 text-xs font-bold leading-9">
                3850x5640
              </div>
              <input
                type="checkbox"
                className="bg-white self-center flex w-3.5 h-[15px]  rounded-full"
              />
            </div>
            <button
              onClick={handleDownload}
              className="text-white text-center text-xs font-semibold leading-5 whitespace-nowrap bg-green-500 justify-center items-center mt-6 px-16 py-3.5 rounded max-md:px-5"
            >
              Download for free!
            </button>

            <div className="text-zinc-700 text-xl font-medium leading-[50.61px] mt-11 ">
              Information
            </div>
            <div className="flex justify-between gap-5 mt-8 px-0.5 items-start">
              <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                <div className="text-zinc-500 text-xs font-semibold leading-6 capitalize">
                  user
                </div>
                <div className="text-zinc-700 text-base font-semibold leading-6 capitalize whitespace-nowrap mt-3">
                  {user}
                </div>
                <div className="text-zinc-500 text-xs font-semibold leading-6 capitalize whitespace-nowrap mt-7">
                  Views
                </div>
                <div className="text-zinc-700 text-base font-semibold leading-6 capitalize whitespace-nowrap mt-3">
                  {views}
                </div>
              </div>
              <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                <div className="text-zinc-500 text-xs font-semibold leading-6 capitalize whitespace-nowrap">
                  User iD
                </div>
                <div className="text-zinc-700 text-base font-semibold leading-6 capitalize whitespace-nowrap mt-3">
                  {user_id}
                </div>
                <div className="text-zinc-500 text-xs font-semibold leading-6 capitalize whitespace-nowrap mt-7">
                  Downloads
                </div>
                <div className="text-zinc-700 text-base font-semibold leading-6 capitalize whitespace-nowrap mt-3">
                  {downloads}
                </div>
              </div>
              <div className="flex grow basis-[0%] flex-col items-stretch">
                <div className="text-zinc-500 text-xs font-semibold leading-6 capitalize whitespace-nowrap">
                  Type
                </div>
                <div className="text-zinc-700 text-base font-semibold leading-6 capitalize whitespace-nowrap mt-2.5">
                  {type}
                </div>
                <div className="text-zinc-500 text-xs font-semibold leading-6 capitalize whitespace-nowrap mt-7">
                  Likes
                </div>
                <div className="text-zinc-700 text-base font-semibold leading-6 capitalize whitespace-nowrap mt-3">
                  {likes}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-start items-center gap-5  px-6   ">
          <h2 className="text-zinc-700 text-lg font-bold leading-[52.11px]  whitespace-nowrap mt-1.5">
            Tags:
          </h2>
          <div className="flex content-start flex-wrap   gap-2 pr-20  max-md:pr-5">
            {tags.split(" ").map((tag, index) => {
              return (
                <div
                  key={index}
                  className="text-neutral-500 text-xs leading-6 capitalize whitespace-nowrap items-stretch bg-neutral-100 grow justify-center pl-2 pr-3.5 rounded-sm"
                >
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageDetail;
