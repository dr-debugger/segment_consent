import { useRouter } from "next/router";
import React from "react";
import Layout from "../component/Layout";

const Argha = () => {
  const router = useRouter();
  const apiCall = () => {
    fetch("http://localhost:3000/api/hello")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        router.push(`/${data.name.split(" ").join("").toLowerCase()}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout>
      <button onClick={() => router.back()}>Click here to go back</button>
      <button onClick={apiCall}>God level coder</button>
    </Layout>
  );
};

export default Argha;
