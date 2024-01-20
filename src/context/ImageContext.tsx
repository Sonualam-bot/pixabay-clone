import { ReactNode, createContext, useState } from "react";

interface ImageContextProps {
  fetchImages: () => void;
  setSearchInput: (input: string) => void;
  searchInput: string;
  urlToDisplay: [];
  loading: boolean;
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
  const [loading, setLoading] = useState<boolean>(false);

  const apiKey = "41879709-750e226c45d736ce651de13b0";

  const url: string = `https://pixabay.com/api/?key=${apiKey}&q=${searchInput}`;

  const fetchImages = async () => {
    try {
      if (searchInput.trim() === "") {
        alert("enter something eg. yellow");
      } else {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setUrlToDisplay(result.hits);
        setLoading(false);
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  const value = {
    fetchImages,
    setSearchInput,
    searchInput,
    urlToDisplay,
    loading,
  };

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};
