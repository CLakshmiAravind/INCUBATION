import React, { useEffect, useState } from "react";
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
} from "./SinglePostElements";
//import { BsFillCaretDownFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { updatePostAction } from "../../actions/postsActions";
import { useNavigate, useParams } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import axios from "axios";

const SinglePost = () => {
  const [component, setComponent] = useState();
  const [dept, setDept] = useState();
  const [emaill, setEmaill] = useState();
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [costEstimated, setCostEstimated] = useState();
  const [outline, setOutline] = useState();
  const [abstract, setAbstract] = useState();
  const [date, setDate] = useState("");

  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  //const [selected1, setSelected1] = useState("");
  //const [selected2, setSelected2] = useState("");

  const options1 = ["Projects/Research", "Startup"];
  const options2 = ["CSE", "ECE", "MECH", "CIVIL", "CHEM", "MME", "NA"];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const postUpdate = useSelector((state) => state.postUpdate);
  const { loading, error } = postUpdate;

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/posts/${id}`);

      setComponent(data.component);
      setDept(data.dept);
      setEmaill(data.emaill);
      setTitle(data.title);
      setCategory(data.category);
      setCostEstimated(data.costEstimated);
      setOutline(data.outline);
      setAbstract(data.abstract);
      setDate(data.updatedAt);
    };

    fetching();
  }, [id, date]);

  const resetHandler = () => {
    setComponent("");
    setDept("");
    setEmaill("");
    setTitle("");
    setCostEstimated("");
    setCategory("");
    setOutline("");
    setAbstract("");
  };

  const updateHandler = (e) => {
    e.preventDefault();

    dispatch(
      updatePostAction(
        id,
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
            <Form action="#" onSubmit={updateHandler}>
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              <FormH1>Edit Post</FormH1>
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
                placeholder="Enter your Email"
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
                placeholder="Enter Cost estimated(Put 'NA' if not required)"
                value={costEstimated}
                onChange={(e) => setCostEstimated(e.target.value)}
              />
              <FormLabel htmlFor="for">Category</FormLabel>
              <FormInput
                type="text"
                required
                placeholder="Enter Category(For Example: ML,AI,Data Science,etc.)"
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
              <FormButton type="submit">Update</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};


export default SinglePost;
