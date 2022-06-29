import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Container,
  FormWrap,
  Icon,
  FormLabel,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  Text,
  FormText,
} from "./SigninElements";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../actions/userActions";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, userInfo, admin } = userSignin;

  useEffect(() => {
    if (admin) {
      navigate("/adminpage", { replace: true });
    } else if (userInfo) {
      navigate("/userdashboard", { replace: true });
    }
  }, [navigate, userInfo, admin]);

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(signin(email, password));
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Incubation</Icon>
          <FormContent>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {loading && <Loading />}
            <Form action="#" onSubmit={submitHandler}>
              <FormH1>Sign in to User account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                required
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
             
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                required
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br></br>
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
            <FormText>
              New User? <Link to="/getstarted">Register</Link>
            </FormText>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
