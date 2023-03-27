import { PageContainer } from "../../Layout/PageWrapper/styles"
import { InputContainer, LoginBox, LoginContainer, Button, ButtonContainer } from "./styles"

import { useState } from "react";
import { useNavigate  } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Firebase/firebase";
import { LogoContainer } from "../../Layout/Header/styles";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) =>{
    setPassword(e.target.value);
  }

  const signUpNavigate = () => {
    navigate("/signup")
  }

  const Login = async () =>{
    let userData = {"email": email, "password": password}
    await signInWithEmailAndPassword(auth, userData.email, userData.password)
    .then(() => {
      navigate('/');
    })
    .catch(error => alert(error));
  }

  return (
    <PageContainer>
      <LoginContainer>
          <LoginBox>
            <LogoContainer></LogoContainer>
            <h1>Login</h1>
            <p>Email</p>
            <InputContainer onChange={handleEmail} type="email" placeholder="email"/>
            <p>Password</p>
            <InputContainer onChange={handlePassword} type="password" placeholder="password"/>
            <ButtonContainer>
              <Button onClick={Login}>Login</Button>
              <Button onClick={signUpNavigate}>Sign Up</Button>
            </ButtonContainer>
          </LoginBox>
          <p>simple to-do list</p>
      </LoginContainer>
    </PageContainer>
  )
}

export default Login