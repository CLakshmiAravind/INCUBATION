import React, { useState } from "react";
import CreatePost from "../components/CreatePost";
import ScrollToTop from "../components/ScrollToTop";

const CreatePage = () => {
  return (
    <>
      <ScrollToTop />
      <CreatePost />
    </>
  );
};

export default CreatePage;
