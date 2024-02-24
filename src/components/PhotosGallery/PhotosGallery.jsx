import { Grid, PhotosGalleryItem } from "..";

export const PhotosGallery = ({ images, onClick }) => {
  return (
    <Grid>
      {" "}
      {images.map(({ id, avg_color, alt, src }) => (
        <PhotosGalleryItem onClick={onClick} key={id} avg_color={avg_color} alt={alt} src={src} />
      ))}
    </Grid>
  );
};
