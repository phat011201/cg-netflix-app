import { useState, useEffect } from "react";
import axios from "axios";

import { API_Link } from "../constants/constant";

const useMovies = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_Link + "videos"
        );
        setData(response.data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    error,
    isLoading,
  };
};

export default useMovies;
