type tagsProp = {
  tags: string;
};

function ModalFooter({ tags }: tagsProp) {
  return (
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
  );
}

export default ModalFooter;
