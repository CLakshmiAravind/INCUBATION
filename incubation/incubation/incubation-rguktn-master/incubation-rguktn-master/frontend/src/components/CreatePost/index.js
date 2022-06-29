import React, { useState } from "react";
import {
  Container,
  FormWrap,
  FormLabel,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  //Text,
  //FormText,
  Dropdown,
  DropdownBtn,
  //DropdownInput,
  DDContent,
  DDItem,
  //DDIcon,
  DropDownWrap,
} from "./CreatepostElements";
//import { BsFillCaretDownFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction } from "../../actions/postsActions";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";

const CreatePost = () => {
  const [component, setComponent] = useState("");
  const [dept, setDept] = useState("");
  const [emaill, setEmaill] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [costEstimated, setCostEstimated] = useState("");
  const [outline, setOutline] = useState("");
  const [abstract, setAbstract] = useState("");

  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  //const [selected1, setSelected1] = useState("");
  //const [selected2, setSelected2] = useState("");

  const options1 = ["Projects/Research", "Startup"];
  const options2 = ["CSE", "ECE", "MECH", "CIVIL", "CHEM", "MME", "NA"];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postCreate = useSelector((state) => state.postCreate);
  const { loading, error, post } = postCreate;

  console.log(post);

  const resetHandler = () => {
    setComponent("");
    setDept("");
    setTitle("");
    setCostEstimated("");
    setCategory("");
    setOutline("");
    setAbstract("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      createPostAction(
        component,
        dept,
        emaill,
        title,
        category,
        costEstimated,
        outline,
        abstract
      )
    );

    if (
      !component ||
      !dept ||
      !emaill ||
      !title ||
      !category ||
      !costEstimated ||
      !outline ||
      !abstract
    )
      return;

    resetHandler();
    navigate("/userdashboard", { replace: true });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form action="#" onSubmit={submitHandler}>
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              <FormH1>Create a new Post</FormH1>
              <DropDownWrap>
                <Dropdown>
                  <DropdownBtn
                    placeholder="Select Area"
                    value={component}
                    onChange={(e) => setComponent(e.target.value)}
                    onClick={(e) => setIsActive1(!isActive1)}
                  ></DropdownBtn>
                  {isActive1 && (
                    <DDContent>
                      {options1.map((option) => {
                        return (
                          <>
                            <DDItem
                              onClick={(e) => {
                                setComponent(option);
                                setIsActive1(false);
                              }}
                            >
                              {option}
                            </DDItem>
                          </>
                        );
                      })}
                    </DDContent>
                  )}
                </Dropdown>
                <Dropdown>
                  <DropdownBtn
                    placeholder="If Startup Select 'NA'"
                    value={dept}
                    onChange={(e) => setDept(e.target.value)}
                    onClick={(e) => setIsActive2(!isActive2)}
                  ></DropdownBtn>
                  {isActive2 && (
                    <DDContent>
                      {options2.map((option) => {
                        return (
                          <>
                            <DDItem
                              onClick={(e) => {
                                setDept(option);
                                setIsActive2(false);
                              }}
                            >
                              {option}
                            </DDItem>
                          </>
                        );
                      })}
                    </DDContent>
                  )}
                </Dropdown>
              </DropDownWrap>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                required
                placeholder="Enter your Rgukt mail"
                value={emaill}
                onChange={(e) => setEmaill(e.target.value)}
              />
              <FormLabel htmlFor="for">Title</FormLabel>
              <FormInput
                type="text"
                required
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <FormLabel htmlFor="for">Cost Estimated</FormLabel>
              <FormInput
                type="text"
                required
                placeholder="in rupees(Put 'NA' if not required)"
                value={costEstimated}
                onChange={(e) => setCostEstimated(e.target.value)}
              />
              <FormLabel htmlFor="for">Category</FormLabel>
              <FormInput
                type="text"
                required
                placeholder="For Example: ML,AI,Data Science,etc..."
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <FormLabel htmlFor="for">Outline</FormLabel>
              <FormInput
                type="text"
                required
                placeholder="Enter Outline(only under 230 words)"
                value={outline}
                onChange={(e) => setOutline(e.target.value)}
              />
              <FormLabel htmlFor="for">Abstract</FormLabel>
              <FormInput
                type="text"
                required
                placeholder="Enter Abstract"
                value={abstract}
                onChange={(e) => setAbstract(e.target.value)}
              />
              {loading && <Loading size={50} />}
              <FormButton type="submit">Create</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default CreatePost;
