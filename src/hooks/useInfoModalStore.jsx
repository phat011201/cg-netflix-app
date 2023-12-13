import { useState } from "react";

export const useInfoModalStore = () => {
  const [movieId, setMovieId] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (id) => {
    setMovieId(id);
    setIsOpen(true);
  };

  const closeModal = () => {
    setMovieId(undefined);
    setIsOpen(false);
  };

  return {
    movieId,
    isOpen,
    openModal,
    closeModal,
  };
};

export default useInfoModalStore;
