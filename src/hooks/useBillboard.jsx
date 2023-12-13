import axios from "axios";
import { useState, useEffect } from "react";

import { API_Link } from "../constants/constant";

const useBillboard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_Link + "videos");
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