import { GridItem } from "..";
import css from "./PhotosGalleryItem.module.css";

export const PhotosGalleryItem = ({ avg_color, alt, src }) => {
  return (
    <GridItem>
      <div
        style={{ backgroundColor: avg_color, borderColor: avg_color }}
        className={css.thumb}
      >
        <img src={src.large} alt={alt} />
      </div>
    </GridItem>
  );
};
