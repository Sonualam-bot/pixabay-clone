import { useImageContext } from "../context/useImageContext";
import Images from "./Images";
import TagCarousel from "./TagCarousel";

function SearchResults() {
  const { urlToDisplay } = useImageContext();

  const imageTags = [...urlToDisplay]?.reduce((acc, curr) => {
    if (acc.includes(curr.tags)) {
      return acc;
    } else {
      return [...acc, curr.tags];
    }
  }, []);

  const allUniqueTags = imageTags.flatMap((tag) => tag.split(", "));

  const uniqueTags = [...new Set(allUniqueTags)];

  return (
    <div className="relative">
      <TagCarousel tags={uniqueTags} />
      <Images />
    </div>
  );
}

export default SearchResults;
