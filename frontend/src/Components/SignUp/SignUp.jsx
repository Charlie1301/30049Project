import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import Validation from './SignupValidation';
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
} from "./SignUpStyles";

const Signup = () => {

    // Create useStates to hold values for validation and posting
    const [values, setValues] = useState({

        name: '',
        email: '',
        password: ''

    });

    // create navigate function for directs after complete signup
    const navigate = useNavigate();

    // Create useState for errors to hold displayable errors
    const [errors, setErrors] = useState({});

    // Constanty update values upon user change rather than upon submit
    const handleInput = (event) => {

        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))

    }

    // Prevent default to skirt errors
    // Call validation
    // successful post directs to login page
    const handleSubmit = (event) => {

        event.preventDefault();

        setErrors(Validation(values));

        if (errors.name === "" && errors.email === "" && errors.password === "") {

            // Call API with axios
            axios.post('http://localhost:8081/signup', values)
            .then(res => {navigate('/login')})
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

                  <Label htmlFor="for">Name</Label>
                  <Input
                    type="name"
                    name="name"
                    onChange={handleInput}
                    required
                 />
    
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
                  <Link to="/login" className="text-white">Already have an account? Login here.</Link>
                  <Text>Forgot my password</Text>
    
                </Form>
    
              </FormContent>
    
            </FormWrap>
    
          </Container>
    
        </>
    );

}

export default Signup;