// src/pages/Signup.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";

const Signup = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = users.find(user => user.email === form.email);

  if (userExists) {
    toast.error("User already exists");
  } else {
    await dispatch(signup(form));
    toast.success("Signup successful!");
    navigate("/login");
  }
};

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
      <Card className="p-4 shadow-sm w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Signup</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </Form.Group>

          <Button style={{backgroundColor:'#088395'}}  type="submit" className="w-100">
            Signup
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Signup;
