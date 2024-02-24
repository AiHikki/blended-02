import { GridItem } from "..";
import css from "./PhotosGalleryItem.module.css";

export const PhotosGalleryItem = ({ avg_color, alt, src, onClick }) => {
  return (
    <GridItem>
      <div
        style={{ backgroundColor: avg_color, borderColor: avg_color }}
        className={css.thumb}
        onClick={() => onClick(src, alt)}
      >
        <img src={src.large} alt={alt} />
      </div>
    </GridItem>
  );
};
