import axios from "axios";
import { useState, useEffect } from "react";

const useBillboard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://65790f5ef08799dc80464bf0.mockapi.io/api/v1/videos"
        );
        setData(response.data[0]);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, isLoading };
};

export default useBillboard;
