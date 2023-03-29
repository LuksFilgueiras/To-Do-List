import { PageContainer } from "../../Layout/PageWrapper/styles";
import { LoginContainer, LoginBox, InputContainer, Button, ButtonContainer } from "../Login/styles";
import { AiOutlineRollback } from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../../Firebase/firebase";
import { LogoContainer } from "../../Layout/Header/styles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const notify = (message) => toast(message, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  })

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
          sendEmailVerification(auth.currentUser);
          if(auth?.currentUser?.emailVerified){
            navigate("/");
          }else{
            navigate(`/login/${auth?.currentUser?.emailVerified}`);
          }
      })
      .catch(error => {
        if(error.code === "auth/email-already-in-use")
          notify("Email already in use");
        if(error.code === "auth/invalid-email")
          notify("Invalid e-mail");
        if(error.code === "auth/missing-email")
          notify("Please enter email!");
        if(error.code === "auth/wrong-password")
          notify("Wrong password!");
        if(error.code === "auth/internal-error")
          notify("Missing password!");
        if(error.code === "auth/weak-password")
          notify("Weak password!")
        if(error.code === "auth/too-many-requests")
          notify("Too many requests! wait...")
      });
  }


  return (
    <PageContainer>
      <ToastContainer/>
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