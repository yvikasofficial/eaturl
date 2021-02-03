import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Button from "../components/button";
import FormField, { FormWrapper } from "../components/form";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout";
import { COLOR_BLUE } from "../utils/constats";
import { login } from "../redux/user/user.actions";
import ScaleLoader from "react-spinners/ScaleLoader";

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userLogin.userInfo);
  const { loading } = useSelector((state) => state.userLogin);

  const handleRegister = () => {
    dispatch(login(email, password));
  };

  useEffect(() => {
    console.log("hi");
    if (userInfo.email) {
      history.push("/");
    }
  }, [history, userInfo]);

  return (
    <Layout>
      <main className="register-page">
        <h2> Login</h2>
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
          {loading ? (
            <ScaleLoader color={COLOR_BLUE} />
          ) : (
            <Button width="100px" height="50px" onClick={handleRegister}>
              Login
            </Button>
          )}
        </FormWrapper>

        <p>Don't Have an account?</p>
        <Button
          borderRadius="100px"
          width="200px"
          height="50px"
          outline={true}
          outlineColor={COLOR_BLUE}
          color={COLOR_BLUE}
          onClick={() => {
            history.push("/register");
          }}
        >
          Create Account
        </Button>
      </main>
    </Layout>
  );
};

export default withRouter(LoginPage);
