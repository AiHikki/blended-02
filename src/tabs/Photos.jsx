import { getPhotos } from "apiService/photos";
import { Form, Text } from "components";
import { useState, useEffect } from "react";

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

  console.log(images);

  const handleSearch = (value) => {
    setQuery(value);
  };

  return (
    <>
      <Text textAlign="center">Let`s begin search 🔎</Text>
      <Form onSubmit={handleSearch} />
    </>
  );
};
