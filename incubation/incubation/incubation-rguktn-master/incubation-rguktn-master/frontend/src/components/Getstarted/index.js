import React, { useState, useEffect } from "react";
import ErrorMessage from "../ErrorMessage";
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
  FormText,
  FormP,
} from "./RegistrationElements";
import Loading from "../Loading";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";

const Getstarted = () => {
  const initialValues = {
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit && userInfo) {
      navigate("/userdashboard", { replace: true });
    }
  }, [navigate, userInfo, formErrors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formErrors);
    setFormErrors(validate(formValues));
    console.log(formErrors);
    //setIsSubmit(false);
    if (
      formErrors.username ||
      formErrors.email ||
      formErrors.phone ||
      formErrors.password ||
      formErrors.confirmpassword
    ) {
      console.log("errors");
      console.log(
        formErrors.username ||
          formErrors.email ||
          formErrors.phone ||
          formErrors.password ||
          formErrors.confirmpassword
      );
      setIsSubmit(false);
    } else {
      console.log("no errors");
      dispatch(
        register(
          formValues.username,
          formValues.email,
          formValues.phone,
          formValues.password
        )
      );
      setIsSubmit(true);
    }
  };

  /*useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);*/

  const validate = (values) => {
    const errors = {};
    const emailregex = /^[a-zA-Z0-9+_.-]+@[rguktn.ac.in]+$/i;
    const phoneregex =
      /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/i;
    const passregex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i;
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailregex.test(values.email)) {
      errors.email = "Invalid Email(use rguktn mail only)";
    }
    if (!values.phone) {
      errors.phone = "PhoneNumber is required";
    } else if (!phoneregex.test(values.phone)) {
      errors.phone = "Invalid phonenumber";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!passregex.test(values.password)) {
      errors.password =
        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "Confirmation is required";
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = "Passwords did not match";
    }
    return errors;
  };

  // const [message, setMessage] = useState(null);
  //

  /*const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords Do not match");
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        setLoading(true);

        const { data } = await axios.post(
          "/api/users",
          try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setLoading(true);

      const { data } = await axios.post(
        "/api/users",
        {
          username: formValues.username,
          email: formValues.email,
          phone: formValues.phone,
          password: formValues.password,
        },
        config
      );

      console.log(data);
      //localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
    setIsSubmit(true);
        );

        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
      }
    }
  }; 
  
            {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
            
            
  
  */

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Incubation</Icon>
          <FormContent>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {loading && <Loading />}
            <Form action="#" onSubmit={handleSubmit}>
              <FormH1>Sign Up Here!</FormH1>
              <FormLabel htmlFor="for">Full Name</FormLabel>
              <FormInput
                type="text"
                name="username"
                //required
                value={formValues.username}
                placeholder="Enter Name"
                onChange={handleChange}
              />
              <FormP>{formErrors.username}</FormP>
              <FormLabel htmlFor="for">RGUKT mail</FormLabel>
              <FormInput
                type="email"
                name="email"
                //required
                value={formValues.email}
                placeholder="'example@rguktn.ac.in'"
                onChange={handleChange}
              />
              <FormP>{formErrors.email}</FormP>
              <FormLabel htmlFor="for">Phone</FormLabel>
              <FormInput
                type="phone"
                name="phone"
                //required
                value={formValues.phone}
                placeholder="Enter Phone Number"
                onChange={handleChange}
              />
              <FormP>{formErrors.phone}</FormP>
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                name="password"
                //required
                value={formValues.password}
                placeholder="Enter Password"
                onChange={handleChange}
              />
              <FormP>{formErrors.password}</FormP>
              <FormLabel htmlFor="for">Confirm password</FormLabel>
              <FormInput
                type="password"
                name="confirmpassword"
                //required
                value={formValues.confirmpassword}
                placeholder="Confirm Password"
                onChange={handleChange}
              />
              <FormP>{formErrors.confirmpassword}</FormP>
              <FormButton type="submit">Register</FormButton>
            </Form>
            <FormText>
              Have an account? <Link to="/signin">SignIn</Link>
            </FormText>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Getstarted;
