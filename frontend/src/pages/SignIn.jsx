import React from "react";
import "../styles/signin.css";
import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <>
    <CommonSection title="SignIn/SignUp" />
      <section>
        <Container>
          <Row>
            <Col  className="mb-4">
            <div className="wrapper">
      <form onSubmit={handleSignIn}>
        <h1>Login</h1>
        <div className="input_box">
            <input type="email" placeholder="Email" required />
            <FaUser className="icon"/>
        </div>
        <div className="input_box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon"/>
        </div>
        <div className="remember_forget">
            <label>
                <input type="checkbox" /> Remember me
            </label>
            <a href="/#">Forgot Password?</a>
        </div>
        <button type="submit">Sign In</button>
        <div className="register_link">
            <p>Don't have an account? <a href="/#">Sign Up</a></p>
        </div>
      </form>
    </div>                
            </Col>
          </Row>
        </Container>
        </section>
        </>
  );
};

export default SignIn;