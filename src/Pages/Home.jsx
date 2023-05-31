import { useEffect } from "react";
import { useState } from "react";

export const useFetchApi = (url, initRun = true, values, methodeType) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiData = async () => {
    try {
      setLoading(true);

      header = {
        methode: methodeType,
        header: {
          "content-type": "application/json",
          authorization: "Bearer",
        },
        body: JSON.stringify(values),
      };
      const responseData = await fetch(url, header);
      if (!responseData.ok) {
        throw new Error("Invalid" + responseData.error);
      }
      const data = await responseData.json();
      setData(data);
      setLoading(false);
    } catch (errors) {
      setError(errors.message);
    }
  };

  useEffect(() => {
    if (initRun) {
      apiData();
    }
  }, [url, initRun]);

  return { data, error, isLoading, apiData };
};
