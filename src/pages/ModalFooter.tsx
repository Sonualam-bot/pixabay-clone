type tagsProp = {
  tags: string;
};

function ModalFooter({ tags }: tagsProp) {
  return (
    <div className="flex  justify-start items-center gap-5 sm:gap-2 md:gap-4 px-6   ">
      <h2 className="text-zinc-700 lg:text-lg sm:text-xs md:text-sm 2xl:text-xl font-bold leading-[52.11px] sm:leading-[10px]  whitespace-nowrap mt-1.5">
        Tags:
      </h2>
      <div className="flex items-center  gap-2 sm:gap-1 md:gap-3 lg:pr-20 sm:pr-4 md:pr-7 max-md:pr-5">
        {tags.split(" ").map((tag, index) => {
          return (
            <div
              key={index}
              className="text-neutral-500 text-[10px] 2xl:text-lg  lg:leading-6 sm:leading-[5px] md:leading-8 capitalize whitespace-nowrap items-stretch bg-neutral-100 grow justify-center pl-2 pr-3.5 sm:px-[1px] md:px-2  rounded-sm"
            >
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ModalFooter;
