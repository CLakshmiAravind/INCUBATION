import React, { useState } from "react";
import SinglePost from "../components/SinglePost";
import ScrollToTop from "../components/ScrollToTop";

const SinglepostPage = () => {
  return (
    <>
      <ScrollToTop />
      <SinglePost />
    </>
  );
};

export default SinglepostPage;
