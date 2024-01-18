import bgimage from "../assets/home-background.jfif";

function MyComponent() {
  return (
    <div className="bg-white flex flex-col items-stretch pb-12">
      <div className="flex-col overflow-hidden relative flex min-h-[914px] w-full items-center px-5 py-11 max-md:max-w-full">
        <img
          loading="lazy"
          src={bgimage}
          className="absolute h-[40%] w-full object-cover object-top inset-0"
        />

        <span className="relative shadow backdrop-blur-[24.955291748046875px] bg-zinc-300 bg-opacity-10 self-stretch flex items-center justify-between gap-5 ml-3 mr-3.5 pl-10 pr-12 py-4 rounded-lg max-md:max-w-full max-md:flex-wrap max-md:mr-2.5 max-md:px-5">
          <div className="text-white text-lg font-semibold leading-5 my-auto">
            Homepage
          </div>
          <span className="self-stretch flex items-center justify-between gap-5">
            <div className="text-white text-lg font-semibold leading-5 my-auto">
              Login
            </div>
            <span className="text-white text-lg font-semibold leading-5 whitespace-nowrap self-stretch grow justify-center items-stretch px-4 py-3 rounded-lg border-[2.663px] border-solid border-white">
              Create Account
            </span>
          </span>
        </span>

        <div className="relative shadow backdrop-blur-[24.955291748046875px] bg-zinc-300 bg-opacity-10 flex w-[755px] max-w-full items-stretch justify-between gap-5 mt-16 px-5 py-4 rounded-lg max-md:flex-wrap max-md:mt-10">
          <span className="flex items-stretch justify-between gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c93468cf35b561a1679f70bc1151654fa9d0ef7dc7de6640f3cfdf28d93859f?"
              className="aspect-[1.05] object-contain object-center w-[22px] overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
            <div className="bg-white w-0.5 shrink-0 h-9" />
            <div className="text-white text-lg font-semibold leading-5 self-center grow whitespace-nowrap my-auto">
              Start new Search
            </div>
          </span>
          <span className="text-white text-lg font-semibold leading-5 whitespace-nowrap aspect-[2] justify-center items-stretch px-5 py-3 rounded-lg border-[2.663px] border-solid border-white self-start max-md:pr-5">
            GO!
          </span>
        </div>

        <div className="relative text-white text-center text-5xl font-bold leading-[87px] whitespace-nowrap mt-6">
          Results: Technology
        </div>

        <div className="relative bg-neutral-100 self-stretch flex w-full flex-col justify-center items-stretch mt-6 pl-8 py-7 max-md:max-w-full max-md:pl-5">
          <div className="items-stretch flex gap-2 px-px max-md:max-w-full max-md:flex-wrap">
            <span className="text-neutral-500 text-center text-sm font-medium leading-4 capitalize whitespace-nowrap items-stretch grow justify-center px-14 py-4 rounded border-[1.057px] border-solid border-neutral-300 max-md:px-5">
              digital
            </span>
            <span className="text-neutral-500 text-center text-sm font-medium leading-4 capitalize whitespace-nowrap items-stretch grow justify-center px-11 py-4 rounded border-[1.057px] border-solid border-neutral-300 max-md:px-5">
              Computer
            </span>
            <span className="text-neutral-500 text-center text-sm font-medium leading-4 capitalize whitespace-nowrap items-stretch grow justify-center px-11 py-4 rounded border-[1.057px] border-solid border-neutral-300 max-md:px-5">
              Codierung
            </span>
            <span className="text-neutral-500 text-center text-sm font-medium leading-4 capitalize whitespace-nowrap grow justify-center px-16 py-4 rounded border-[1.057px] border-solid border-neutral-300 items-start max-md:px-5">
              Tech
            </span>
            <span className="text-neutral-500 text-center text-sm font-medium leading-4 capitalize whitespace-nowrap grow justify-center px-16 py-4 rounded border-[1.057px] border-solid border-neutral-300 items-start max-md:px-5">
              Netz
            </span>
            <span className="text-neutral-500 text-center text-sm font-medium leading-4 capitalize whitespace-nowrap items-stretch grow justify-center px-16 py-4 rounded border-[1.057px] border-solid border-neutral-300 max-md:px-5">
              Code
            </span>
            <span className="text-neutral-500 text-center text-sm font-medium leading-4 capitalize whitespace-nowrap items-stretch grow justify-center px-10 py-4 rounded border-[1.057px] border-solid border-neutral-300 max-md:px-5">
              finanzieren
            </span>
            <span className="text-neutral-500 text-center text-sm font-medium leading-4 capitalize whitespace-nowrap items-stretch grow justify-center pl-11 pr-2 py-4 rounded border-[1.057px] border-solid border-neutral-300 max-md:pl-5">
              Marketing
            </span>
          </div>
        </div>

        <div className="relative justify-center self-stretch ml-4 mr-5 mt-11 mb-9 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="items-stretch relative flex grow flex-col max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-[1.5] object-contain object-center w-full overflow-hidden"
                />
                <div className="items-stretch content-start flex-wrap flex gap-2 mt-3 pr-2">
                  <span className="text-neutral-500 text-xs leading-6 capitalize whitespace-nowrap items-stretch bg-neutral-100 grow justify-center pl-2 pr-4 rounded-sm">
                    Weltraumbilder & bilder
                  </span>
                  <span className="text-neutral-500 text-xs leading-6 capitalize whitespace-nowrap items-stretch bg-neutral-100 grow justify-center px-2 rounded-sm">
                    Erde bilder & bilder
                  </span>
                  <span className="text-neutral-500 text-xs leading-6 capitalize whitespace-nowrap items-stretch bg-neutral-100 grow justify-center px-2.5 rounded-sm">
                    Naturbilder
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch relative flex grow flex-col max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-[1.5] object-contain object-center w-full overflow-hidden"
                />
                <div className="items-stretch content-start flex-wrap flex gap-2 mt-3 pr-20 max-md:pr-5">
                  <span className="text-neutral-500 text-xs leading-6 capitalize whitespace-nowrap items-stretch bg-neutral-100 aspect-[2.8333333333333335] justify-center px-2.5 rounded-sm">
                    Ökostrom
                  </span>
                  <span className="text-neutral-500 text-xs leading-6 capitalize whitespace-nowrap items-stretch bg-neutral-100 grow justify-center px-2 rounded-sm">
                    erneuerbar
                  </span>
                  <span className="text-neutral-500 text-xs leading-6 capitalize whitespace-nowrap items-stretch bg-neutral-100 grow justify-center pl-2 pr-3.5 rounded-sm">
                    Sonnenkollektoren
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch relative flex grow flex-col max-md:mt-10">
                <div className="flex-col overflow-hidden relative flex aspect-[1.4959016393442623] w-full justify-center items-stretch">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-[1.5] object-contain object-center w-full overflow-hidden"
                  />
                </div>
                <div className="items-stretch content-start flex-wrap flex gap-2 mt-3 pr-14 max-md:pr-5">
                  <span className="text-neutral-500 text-xs leading-6 capitalize whitespace-nowrap items-stretch bg-neutral-100 grow justify-center pl-2 pr-3.5 rounded-sm">
                    Cybersicherheit
                  </span>
                  <span className="text-neutral-500 text-xs leading-6 capitalize whitespace-nowrap items-stretch bg-neutral-100 aspect-[2.875] justify-center px-2.5 rounded-sm">
                    Sicherheit
                  </span>
                  <span className="text-neutral-500 text-xs leading-6 capitalize whitespace-nowrap items-stretch bg-neutral-100 grow justify-center pl-2 pr-3.5 rounded-sm">
                    Elektronischer Chip
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center z-[1] mt-0 mx-9 max-md:max-w-full max-md:mr-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-10">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[1.5] object-contain object-center w-full overflow-hidden"
              />
              <div className="items-stretch content-start flex-wrap flex gap-2 mt-3 pr-2">
                <span className="text-neutral-500 text-xs leading-6 capitalize whitespace-nowrap items-stretch bg-neutral-100 grow justify-center pl-2 pr-4 rounded-sm">
                  Weltraumbilder & bilder
                </span>
                <span className="text-neutral-500 text-xs leading-6 capitalize whitespace-nowrap items-stretch bg-neutral-100 grow justify-center px-2 rounded-sm">
                  Erde bilder & bilder
                </span>
                <span className="text-neutral-500 text-xs leading-6 capitalize whitespace-nowrap items-stretch bg-neutral-100 grow justify-center px-2.5 rounded-sm">
                  Naturbilder
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-10">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[1.5] object-contain object-center w-full overflow-hidden"
              />
              <div className="items-stretch content-start flex-wrap flex gap-2 mt-3 pr-20 max-md:pr-5">
                <span className="text-neutral-500 text-xs leading-6 capitalize whitespace-nowrap items-stretch bg-neutral-100 aspect-[2.8333333333333335] justify-center px-2.5 rounded-sm">
                  Ökostrom
                </span>
                <span className="text-neutral-500 text-xs leading-6 capitalize whitespace-nowrap items-stretch bg-neutral-100 grow justify-center px-2 rounded-sm">
                  erneuerbar
                </span>
                <span className="text-neutral-500 text-xs leading-6 capitalize whitespace-nowrap items-stretch bg-neutral-100 grow justify-center pl-2 pr-3.5 rounded-sm">
                  Sonnenkollektoren
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-10">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[1.5] object-contain object-center w-full overflow-hidden"
              />
              <div className="items-stretch content-start flex-wrap flex gap-2 mt-3 pr-14 max-md:pr-5">
                <span className="text-neutral-500 text-xs leading-6 capitalize whitespace-nowrap items-stretch bg-neutral-100 grow justify-center pl-2 pr-3.5 rounded-sm">
                  Cybersicherheit
                </span>
                <span className="text-neutral-500 text-xs leading-6 capitalize whitespace-nowrap items-stretch bg-neutral-100 aspect-[2.875] justify-center px-2.5 rounded-sm">
                  Sicherheit
                </span>
                <span className="text-neutral-500 text-xs leading-6 capitalize whitespace-nowrap items-stretch bg-neutral-100 grow justify-center pl-2 pr-3.5 rounded-sm">
                  Elektronischer Chip
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
