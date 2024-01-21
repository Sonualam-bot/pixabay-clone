import React, { useEffect, useState } from "react";

export const BackToTopButton: React.FC = () => {
  const [backToTopButton, setBackToTopButton] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed right-8 bottom-8">
      {backToTopButton && (
        <button
          className=" h-[50px] w-[50px] flex items-center justify-center text-center shadow-xl text-[35px] pt-5 font-extrabold bg-slate-700   text-green-500  p-4 rounded-full"
          onClick={scrollUp}
        >
          ⬆
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
