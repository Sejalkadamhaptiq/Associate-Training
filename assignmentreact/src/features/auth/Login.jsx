// // src/pages/Login.jsx
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "../../redux/authSlice";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login(form));
//     navigate("/");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         required
//         value={form.email}
//         onChange={(e) => setForm({ ...form, email: e.target.value })}
//       />
//       <br />
//       <input
//         type="password"
//         placeholder="Password"
//         required
//         value={form.password}
//         onChange={(e) => setForm({ ...form, password: e.target.value })}
//       />
//       <br />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;


// src/pages/Login.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import bcrypt from "bcryptjs";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === form.email);

  if (user && bcrypt.compareSync(form.password, user.password)) {
    await dispatch(login(form));
    toast.success("Login successful!");
    navigate("/");
  } else {
    toast.error("Invalid credentials");
  }
};


  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "65vh" }}>
      <Card className="p-4 shadow-sm w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
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

          <Button style={{backgroundColor:'#088395'}} type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
