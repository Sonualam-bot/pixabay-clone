import { useState } from "react";
import { useImageContext } from "../context/useImageContext";
import Images, { ImageInterface } from "./Images";
import TagCarousel from "./TagCarousel";

function SearchResults() {
  const { urlToDisplay } = useImageContext();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const imageTags = [...urlToDisplay]?.reduce(
    (acc: string[], curr: ImageInterface): string[] => {
      if (acc.includes(curr.tags)) {
        return acc;
      } else {
        return [...acc, curr.tags];
      }
    },
    []
  );

  const allUniqueTags = imageTags.flatMap((tag) => tag.split(", "));
  const uniqueTags = [...new Set(allUniqueTags)];

  const handleTagSelect = (tag: string) => {
    setSelectedTags((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((selectedTag) => selectedTag !== tag);
      } else {
        return [tag];
      }
    });
  };

  const filteredImages = urlToDisplay?.filter((image: ImageInterface) =>
    selectedTags.every((tag) => image.tags.includes(tag))
  );

  return (
    <div className="">
      {urlToDisplay.length > 0 && (
        <div>
          <TagCarousel
            tags={uniqueTags}
            onTagSelect={handleTagSelect}
            selectedTags={selectedTags}
          />
          <Images imagesToDisplay={filteredImages} />
        </div>
      )}
    </div>
  );
}

export default SearchResults;
