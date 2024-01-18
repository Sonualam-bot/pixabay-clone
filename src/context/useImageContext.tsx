import { useContext } from "react";
import { ImageContext } from "./ImageContext";

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error(
      "useImageContext must be used within an ImageContextProvider"
    );
  }
  return context;
};
