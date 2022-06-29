import React, { useEffect, useState } from "react";
// import { Button } from "../ButtonElement";
import {
  EceContainer,
  EceWrapper,
  EceBox,
  EceTextWrapper,
  EceH1,
  EceP1,
  EceP2,
  EceP3,
  EceButton,
  EceBtnLink,
  EceBtnLinkA,
  EceBg,
  Dropdown,
  AccP3,
  Footer,
} from "./EceElements";
import { useDispatch, useSelector } from "react-redux";
import { allListPosts } from "../../actions/postsActions";

const Ece = () => {
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
      <EceContainer>
        <EceBg>
          <EceWrapper>
            {posts?.map((post, index) => {
              if (
                post.component === "Projects/Research" &&
                post.dept === "ECE"
              ) {
                return (
                  <>
                    <EceBox onClick={() => toggle(index)} key={post._id}>
                      <EceTextWrapper>
                        <EceH1>{post.title}</EceH1>
                        <EceP1>{post.category}</EceP1>
                        <EceP2>{post.costEstimated}</EceP2>
                        <EceP3>{post.outline}</EceP3>
                        {userInfo ? (
                          <EceButton>
                            <EceBtnLinkA
                              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${post.emaill}`}
                              target="_blank"
                            >
                              Connect
                            </EceBtnLinkA>
                          </EceButton>
                        ) : (
                          <EceButton>
                            <EceBtnLink to="/getstarted">
                              Register To Connect
                            </EceBtnLink>
                          </EceButton>
                        )}
                      </EceTextWrapper>
                    </EceBox>
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
          </EceWrapper>
        </EceBg>
      </EceContainer>
    </>
  );
};

export default Ece;
