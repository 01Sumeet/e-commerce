import React, { useEffect, useState } from "react";
import { useAxios } from "../Hook/useAxios";
import axios from "axios";

const TestComponent = () => {
  debugger;
  const [method, setMethod] = useState("get");

  // Fetch default data on component mount.
  useEffect(() => {
    const fetchData = async () => {
      await axiosData();
      setMethod("post"); // Update the method state
    };
    fetchData();
  }, []);
  const apiUrl = "test";
  const initialRun = false;
  const methodType = method;
  const contentType = "json";

  const { data, isLoading, error, axiosData } = useAxios(
    apiUrl,
    initialRun,
    methodType,
    contentType
  );

  console.log(data);
  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    //debugger;
    const formData = new FormData();
    formData.append("username", input.username);
    formData.append("password", input.password);
    await axiosData(formData);
    setMethod("get");
    // await axiosData(apiUrl);
  };
  const [input, setInput] = useState({ username: "", password: "" });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={input.username}
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={input.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {isLoading ? (
        <div>loading....</div>
      ) : error ? (
        <div>Faileddddd</div>
      ) : (
        <div>
          All LOGS
          {data?.map((x) => (
            <div key={x.id}>
              <div>Username: {x.username}</div>
              <div>Password: {x.password}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default TestComponent;
