import React, { useEffect, useState } from "react";
import MainScreen from "../MainScreen";
import {
  DashBtn,
  DashBtnLink,
  AccordionSection,
  Container,
  Wrap,
  Dropdown,
  AccBtn,
  AccBtnn,
  AccBtnLink,
  AccBtnnLink,
  BtnWrap,
  AccH1,
  AccP1,
  AccP2,
  AccP3,
  Footer,
} from "./DashboardElements";
//import { Data } from "./Data";
import { useDispatch, useSelector } from "react-redux";
import { deletePostAction, listPosts } from "../../actions/postsActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [clicked, setClicked] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postList = useSelector((state) => state.postList);
  const { loading, posts, error } = postList;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, username } = userSignin;
  
  const postCreate = useSelector((state) => state.postCreate);
  const { success: successCreate } = postCreate;

  const postUpdate = useSelector((state) => state.postUpdate);
  const { success: successUpdate } = postUpdate;

  const postDelete = useSelector((state) => state.postDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = postDelete;

  useEffect(() => {
    dispatch(listPosts());
    if (!userInfo) {
      navigate("/", { replace: true });
    }
  }, [
    dispatch,
    successCreate,
    navigate,
    userInfo,
    successUpdate,
    successDelete,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deletePostAction(id));
    }
  };

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <>
      <MainScreen title={`Welcome Back  ${username}...`}>
        <DashBtn>
          <DashBtnLink to="/createnewpost">Create New Post</DashBtnLink>
        </DashBtn>

        <AccordionSection>
          {errorDelete && (
            <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
          )}
          {loadingDelete && <Loading />}
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {loading && <Loading />}
          <Container>
            {posts?.map((post, index) => {
              return (
                <>
                  <Wrap onClick={() => toggle(index)} key={post._id}>
                    <AccH1>{post.title}</AccH1>
                    <BtnWrap>
                      <AccBtn>
                        <AccBtnLink to={`/post/${post._id}`}>Edit</AccBtnLink>
                      </AccBtn>
                      <AccBtnn>
                        <AccBtnnLink
                          to="/userdashboard"
                          onClick={() => deleteHandler(post._id)}
                        >
                          Delete
                        </AccBtnnLink>
                      </AccBtnn>
                    </BtnWrap>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <AccP1>{post.category}</AccP1>
                      <AccP2>{post.costEstimated}</AccP2>
                      OUTLINE:
                      <AccP3>{post.outline}</AccP3>
                      ABSTRACT:
                      <AccP3>{post.abstract}</AccP3>
                      <Footer>
                        Created on{" "}
                        <cite title="Source Title">
                          {post.createdAt.substring(0, 10)}
                        </cite>{" "}
                      </Footer>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}
          </Container>
        </AccordionSection>
      </MainScreen>
    </>
  );
};

export default Dashboard;
