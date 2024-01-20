import React, { useState } from "react";

interface TagCarouselProps {
  tags: string[];
  onTagSelect: (tag: string) => void;
  selectedTags: string[];
}

const TagCarousel: React.FC<TagCarouselProps> = ({
  tags,
  onTagSelect,
  selectedTags,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemsPerPage: number = 7;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - itemsPerPage));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(tags.length - itemsPerPage, prevIndex + itemsPerPage)
    );
  };

  const visibleTags = tags.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className=" bg-neutral-100 self-stretch flex w-full flex-col justify-center items-stretch mt-6  py-7 max-md:max-w-full max-md:pl-5">
      <div className="items-stretch flex gap-2 px-px max-md:max-w-full max-md:flex-wrap">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`mx-2  text-[20px] ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed text-gray-500"
              : ""
          }`}
        >
          ◀
        </button>

        {visibleTags.map((tag, index) => (
          <span
            key={index}
            onClick={() => onTagSelect(tag)}
            className={`text-neutral-500 text-center text-sm font-medium leading-4 capitalize whitespace-nowrap items-stretch grow justify-center px-14 py-4 rounded border-[1.057px] border-solid border-neutral-300 max-md:px-5 cursor-pointer  ${
              selectedTags.includes(tag) ? "bg-blue-500  text-white " : ""
            }  `}
          >
            {tag}
          </span>
        ))}

        <button
          onClick={handleNext}
          disabled={currentIndex + itemsPerPage >= tags.length}
          className={`mx-2 text-[20px] ${
            currentIndex + itemsPerPage >= tags.length
              ? "opacity-50 cursor-not-allowed text-gray-500"
              : ""
          }`}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default TagCarousel;
