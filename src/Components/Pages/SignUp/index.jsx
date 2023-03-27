import { PageContainer } from "../../Layout/PageWrapper/styles";
import { LoginContainer, LoginBox, InputContainer, Button, ButtonContainer } from "../Login/styles";
import { AiOutlineRollback } from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Firebase/firebase";
import { LogoContainer } from "../../Layout/Header/styles";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginNavigate = () => {
    navigate("/login")
  }
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) =>{
    setPassword(e.target.value);
  }

  const handleSignUp = async () => {
      
      const userData = {"email": email, "password": password}
      await createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then(() => {
          navigate("/");
      })
      .catch(error => alert(error));
  }


  return (
    <PageContainer>
      <LoginContainer>
        <LoginBox>
          <LogoContainer></LogoContainer>
          <h1>Sign Up</h1>
          <p>Email</p>
          <InputContainer onChange={handleEmail} type="email" placeholder="email"/>
          <p>Password</p>
          <InputContainer onChange={handlePassword} type="password" placeholder="password"/>
          <ButtonContainer>
            <Button onClick={handleSignUp}>Sign</Button>
            <Button onClick={loginNavigate}><AiOutlineRollback/></Button>
          </ButtonContainer>
        </LoginBox>
        <p>simple to-do list</p>
      </LoginContainer>
    </PageContainer>
  )
}

export default SignUp