import axios from "axios";
import { useState, useEffect } from "react";
export const useAxios = (apiUrl, initRun = true, methodeType, contentType) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const axiosData = async (bodyData) => {
    
    console.log("Hello world!");
    const typeData = {
      json: "application/json",
      formData: "multipart/form-data",
    };
    try {
      const apiClient = axios.create({
        baseURL: "https://646caca27b42c06c3b2bc2d8.mockapi.io", //  baseURL declaration
        timeout: 5000,
        headers: {
          "Content-Type": typeData[contentType], // data type we want to passs
          Authorization: "Bearer your_token",
        },
      });
      setLoading(true);
      const response = await apiClient[methodeType](`/${apiUrl}`, bodyData);

      if (response.status !== 200) {
        throw new Error("Request Failed 😒");
      }
      const responseData = response.data;
      setData(responseData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log("initRun===", initRun);
    if (initRun) {
      if (methodeType === "post") {
        axiosData({});
      } else {
        axiosData();
      }
    }
  }, [apiUrl, initRun, methodeType, contentType]);
  return { data, isLoading, error, axiosData };
};
