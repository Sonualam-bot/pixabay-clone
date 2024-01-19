import { useImageContext } from "../context/useImageContext";
import Images, { ImageInterface } from "./Images";
import TagCarousel from "./TagCarousel";

function SearchResults() {
  const { urlToDisplay } = useImageContext();

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

  return (
    <div className="relative">
      {urlToDisplay.length > 0 && <TagCarousel tags={uniqueTags} />}
      <Images />
    </div>
  );
}

export default SearchResults;
