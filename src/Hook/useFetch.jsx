import { useEffect, useState } from "react";
export const useFetch = (url , initRun = false, methodeType) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchdata = async ( bodyData) => {
    try {
      console.log("url", url);
      const requestData = {
        method: methodeType,
        // headers: { "Content-Type": "multipart/form-data" },
        // headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(DataObject),
        methode: "GET",
        body: bodyData,
      };
      console.log("requestData", requestData);

      const responseData = await fetch(url, requestData);
      console.log("responseData", responseData);

      if (!responseData.ok) {
        throw new Error("Request  failled 😒");
      }
      const data = await responseData.json();
      setData(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (initRun) {
      fetchdata();
    }
  }, [initRun]);

  return { data, isLoading, error, initRun, fetchdata };
};
