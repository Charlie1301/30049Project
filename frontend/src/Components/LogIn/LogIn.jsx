import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  H1,
  Label,
  Input,
  Button,
  Text
} from "./LogInStyles";

const LogIn = () => {

  const [values, setValues] = useState({

    email: '',
    password: ''

  })

  const navigate = useNavigate();

  const [errors, setErrors] = useState({})

  const handleInput = (event) => {

    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))

  }

  const handleSubmit = (event) => {

    event.preventDefault();

    setErrors(Validation(values));

    if (errors.email === "" && errors.password === "") {

      // Call API with axios
      axios.post('http://localhost:8081/login', values)

      .then(res => {

        if (res.data === "Success") {

          axios.get('http://localhost:8081/login/' + values.email)
                
          .then(res => {

            if (res.data === "Fail") {

              alert("User not found.");

            } else {

              navigate(res.data);
                        
            }

          })

          .catch(err_ => console.log(err_));

        } else {

          alert("No record Existed");

        }
      })

      .catch(err => console.log(err));

    }

  }

  return (
    <>
      <Container>

        <FormWrap>

          <Icon to="/">FOO</Icon>

          <FormContent>

            <Form action="" onSubmit={handleSubmit}>

              <H1>Log in to your account</H1>

              <Label htmlFor="for">E-mail</Label>
              <Input 
                type="email"
                name="email"
                onChange={handleInput} 
                required 
              />
              {errors.email && <span> {errors.email} </span> }

              <Label htmlFor="for">Password</Label>
              <Input 
                type="password"
                name="password"
                onChange={handleInput} 
                required 
              />
              {errors.email && <span> {errors.email} </span> }

              <Button type="submit">Log In</Button>
              <p></p>
              <Link to="/signup" className="text-white">Don't have an account? Signup here.</Link>
              <Text>Forgot my password</Text>

            </Form>

          </FormContent>

        </FormWrap>

      </Container>

    </>
  );
};

export default LogIn;
