import React from "react";
import { Button, Checkbox, Form, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../assets/styles/index.css";

const LoginForm = () => (
  <Form className="loginform">
    <div className="login-header">
      <Header as="h1">Login Here</Header>
    </div>
    <Form.Field>
      <label>First Name</label>
      <input placeholder="First Name" />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder="Last Name" />
    </Form.Field>
    <Form.Field>
      <Checkbox label="I agree to the Terms and Conditions" />
    </Form.Field>
    <Link to="feed">
      <Button type="submit">Submit</Button>
    </Link>
  </Form>
);

export default LoginForm;
