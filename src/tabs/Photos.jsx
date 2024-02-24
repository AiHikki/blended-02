import { getPhotos } from "apiService/photos";
import { Form, Loader, Text, Button } from "components";
import { useState, useEffect } from "react";
import { PhotosGallery } from "components";

export const Photos = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchImages = async () => {
      try {
        const { photos, total_results, per_page } = await getPhotos(
          query,
          page
        );

        if (photos.length === 0) {
          setIsEmpty(true);
          return;
        }

        setImages((prevImg) => [...prevImg, ...photos]);
        setIsVisible(page < Math.ceil(total_results / per_page));
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) {
      fetchImages();
    }
  }, [query, page]);

  const handleSearch = (value) => {
    setImages([]);
    setPage(1);
    setQuery(value);
    setIsEmpty(false);
    setIsError(false);
    setIsVisible(false);
  };

  const handleLoadMore = () => {
    setPage((prePage) => prePage + 1);
  };

  return (
    <>
      <Form onSubmit={handleSearch} />
      {images.length > 0 && <PhotosGallery images={images} />}
      {!images.length && !isEmpty && (
        <Text textAlign="center">Let`s begin search 🔎</Text>
      )}
      {isVisible && (
        <Button onClick={handleLoadMore} disabled={isLoading}>
          {isLoading ? "Loading" : "Load More"}
        </Button>
      )}
      {isLoading && <Loader />}
      {isError && (
        <Text textAlign="center">❌ Something went wrong - {isError}</Text>
      )}
      {isEmpty && (
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      )}
    </>
  );
};
