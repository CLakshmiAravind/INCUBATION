import React, { useEffect, useState } from "react";
// import { Button } from "../ButtonElement";
import {
  StartupContainer,
  StartupWrapper,
  StartupBox,
  //StartupIcon,
  StartupTextWrapper,
  StartupH1,
  StartupP1,
  StartupP2,
  StartupP3,
  StartupButton,
  StartupBtnLink,
  StartupBtnLinkA,
  StartupBg,
  Dropdown,
  Footer,
  AccP3,
} from "./StartupElements";
import { useDispatch, useSelector } from "react-redux";
import { allListPosts } from "../../actions/postsActions";

const Startup = () => {
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
      <StartupContainer>
        <StartupBg>
          <StartupWrapper>
            {posts?.map((post, index) => {
              if (post.component === "Startup" && post.dept === "NA") {
                return (
                  <>
                    <StartupBox onClick={() => toggle(index)} key={post._id}>
                      <StartupTextWrapper>
                        <StartupH1>{post.title}</StartupH1>
                        <StartupP1>{post.category}</StartupP1>
                        <StartupP2>{post.costEstimated}</StartupP2>
                        <StartupP3>{post.outline}</StartupP3>
                        {userInfo ? (
                          <StartupButton>
                            <StartupBtnLinkA
                              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${post.emaill}`}
                              target="_blank"
                            >
                              Connect
                            </StartupBtnLinkA>
                          </StartupButton>
                        ) : (
                          <StartupButton>
                            <StartupBtnLink to="/getstarted">
                              Register To Connect
                            </StartupBtnLink>
                          </StartupButton>
                        )}
                      </StartupTextWrapper>
                    </StartupBox>
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
          </StartupWrapper>
        </StartupBg>
      </StartupContainer>
    </>
  );
};

export default Startup;
