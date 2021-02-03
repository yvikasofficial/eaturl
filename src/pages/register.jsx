import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Button from "../components/button";
import FormField, { FormWrapper } from "../components/form";
import Layout from "../components/layout";
import { COLOR_BLUE } from "../utils/constats";
import { register } from "../redux/user/user.actions";
import { showErrorToast } from "../utils/notifications";
import ScaleLoader from "react-spinners/ScaleLoader";

const RegisterPage = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userLogin.userInfo);
  const { user, loading } = useSelector((state) => state.userRegister);

  const handleRegister = () => {
    if (password !== repeatPassword) {
      return showErrorToast("Passwords don't match");
    }
    dispatch(register(name, email, password));
  };

  useEffect(() => {
    console.log("hi");
    if (userInfo.email) {
      history.push("/");
    }
  }, [user, history, userInfo]);

  return (
    <Layout>
      <main className="register-page">
        <h2> Register</h2>
        <FormWrapper>
          <FormField
            placeholder="name"
            value={name}
            setValue={setName}
            type="text"
          />
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
          {loading ? (
            <ScaleLoader color={COLOR_BLUE} />
          ) : (
            <Button height="50px" onClick={handleRegister}>
              Create Account
            </Button>
          )}
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
