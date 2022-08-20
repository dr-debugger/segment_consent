import React from "react";
import { useRouter } from "next/router";
import Layout from "../component/Layout";

const FreezeNinja = () => {
  const router = useRouter();
  return (
    <Layout>
      <button onClick={() => router.back()}>Click here to go back</button>
      <div>FreezeNinja</div>
    </Layout>
  );
};

export default FreezeNinja;
