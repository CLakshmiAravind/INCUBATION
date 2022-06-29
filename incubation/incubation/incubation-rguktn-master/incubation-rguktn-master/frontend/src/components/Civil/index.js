import React, { useEffect, useState } from "react";
// import { Button } from "../ButtonElement";
import {
  CseContainer,
  CseWrapper,
  CseBox,
  CseTextWrapper,
  CseH1,
  CseP1,
  CseP2,
  CseP3,
  CseButton,
  CseBtnLink,
  CseBtnLinkA,
  CseBg,
  Dropdown,
  AccP3,
  Footer,
} from "./CivilElements";
import { useDispatch, useSelector } from "react-redux";
import { allListPosts } from "../../actions/postsActions";
import axios from "axios";

const Civil = () => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const postAllList = useSelector((state) => state.postAllList);
  const { loading, posts, error } = postAllList;

  const userSignin = useSelector((state) => state.userSignin);
  const { admin, userInfo } = userSignin;

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  useEffect(() => {
    dispatch(allListPosts());
  }, [dispatch]);

  return (
    <>
      <CseContainer>
        <CseBg>
          <CseWrapper>
            {posts?.map((post, index) => {
              if (
                post.component === "Projects/Research" &&
                post.dept === "CIVIL"
              ) {
                return (
                  <>
                    <CseBox onClick={() => toggle(index)} key={post._id}>
                      <CseTextWrapper>
                        <CseH1>{post.title}</CseH1>
                        <CseP1>{post.category}</CseP1>
                        <CseP2>{post.costEstimated}</CseP2>
                        <CseP3>{post.outline}</CseP3>
                        {userInfo ? (
                          <CseButton>
                            <CseBtnLinkA
                              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${post.emaill}`}
                              target="_blank"
                            >
                              Connect
                            </CseBtnLinkA>
                          </CseButton>
                        ) : (
                          <CseButton>
                            <CseBtnLink to="/getstarted">
                              Register To Connect
                            </CseBtnLink>
                          </CseButton>
                        )}
                      </CseTextWrapper>
                    </CseBox>
                    {clicked === index && admin ? (
                      <Dropdown>
                        <div>{post.title}</div>
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
              }
            })}
          </CseWrapper>
        </CseBg>
      </CseContainer>
    </>
  );
};

export default Civil;
