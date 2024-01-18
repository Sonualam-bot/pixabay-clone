import { ReactNode, createContext, useState } from "react";

interface ImageContextProps {
  fetchImages: () => void;
  setSearchInput: (input: string) => void;
  searchInput: string;
  urlToDisplay: [];
}

interface ImageComponentProp {
  children: ReactNode;
}

export const ImageContext = createContext<ImageContextProps | undefined>(
  undefined
);

export const ImageContextProvider: React.FC<ImageComponentProp> = ({
  children,
}) => {
  const [urlToDisplay, setUrlToDisplay] = useState<[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  const apiKey = "41879709-750e226c45d736ce651de13b0";

  const url: string = `https://pixabay.com/api/?key=${apiKey}&q=${searchInput}`;
  // const url: string = `https://pixabay.com/api/?key=41879709-750e226c45d736ce651de13b0&q=yellow`;

  const fetchImages = async () => {
    try {
      if (searchInput.trim() === "") {
        alert("enter something eg. yellow");
      } else {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        setUrlToDisplay(result.hits);
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  const value = { fetchImages, setSearchInput, searchInput, urlToDisplay };

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};

// https://pixabay.com/api/?key=41879709-750e226c45d736ce651de13b0&q=yellow
