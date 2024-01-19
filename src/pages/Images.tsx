import { useState } from "react";
// import { useImageContext } from "../context/useImageContext";
import ImageDetail from "./ImageDetail";

export interface ImageInterface {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  fullHDURL: string;
  imageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
}

interface ImagesProps {
  imagesToDisplay: ImageInterface[];
}

function Images({ imagesToDisplay }: ImagesProps) {
  // const { urlToDisplay } = useImageContext();
  const [selectedImage, setSelectedImage] = useState<ImageInterface | null>(
    null
  );

  const handleSelectImage = (data: ImageInterface) => {
    document.body.style.overflow = "hidden";
    setSelectedImage(data);
  };

  const closeModal = () => {
    document.body.style.overflow = "visible";
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-wrap justify-center items-start gap-14 my-6  ">
      {imagesToDisplay?.map((data: ImageInterface, index: number) => {
        const { webformatURL, tags } = data;
        return (
          <div
            onClick={() => handleSelectImage(data)}
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
              {tags.split(",").map((tag: string, index: number) => {
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
          </div>
        );
      })}
      {selectedImage && (
        <ImageDetail selectedImage={selectedImage} closeModal={closeModal} />
      )}
    </div>
  );
}

export default Images;
