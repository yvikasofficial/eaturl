import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Button from "../components/button";
import FormField, { FormWrapper } from "../components/form";
import Layout from "../components/layout";
import { COLOR_BLUE } from "../utils/constats";

const RegisterPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  return (
    <Layout>
      <main className="register-page">
        <h2> Register</h2>
        <FormWrapper>
          <FormField
            placeholder="email"
            value={email}
            setValue={setEmail}
            type="email"
          />
          <FormField
            placeholder="password"
            type="password"
            value={password}
            setValue={setPassword}
          />
          <FormField
            placeholder="repeat password"
            type="password"
            value={repeatPassword}
            setValue={setRepeatPassword}
          />
          <Button height="50px">Create Account</Button>
        </FormWrapper>

        <p>Already Have an account?</p>
        <Button
          borderRadius="100px"
          width="200px"
          height="50px"
          outline={true}
          outlineColor={COLOR_BLUE}
          color={COLOR_BLUE}
          onClick={() => {
            history.push("/login");
          }}
        >
          Login
        </Button>
      </main>
    </Layout>
  );
};

export default withRouter(RegisterPage);
