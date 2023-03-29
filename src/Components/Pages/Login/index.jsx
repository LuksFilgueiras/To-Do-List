import { PageContainer } from "../../Layout/PageWrapper/styles"
import { InputContainer, LoginBox, LoginContainer, Button, ButtonContainer } from "./styles"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { useNavigate, useParams  } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Firebase/firebase";
import { LogoContainer } from "../../Layout/Header/styles";
import { useEffect } from "react";

function Login() {
  const navigate = useNavigate();
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {verify} = useParams()

  useEffect(() => {
    if(verify === "false"){
      notify("Email verification needed")
      navigate('/login');
    }
  }, [verify, navigate])

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
      if(auth?.currentUser?.emailVerified){
        navigate('/');
      }else{
        notify("Email not verified!")
      }
    })
    .catch(error => {
      if(error.code === "auth/user-not-found")
        notify("User not found!");
      if(error.code === "auth/invalid-email")
        notify("Invalid e-mail");
      if(error.code === "auth/wrong-password")
        notify("Wrong password!");
      if(error.code === "auth/internal-error")
        notify("Missing password!");
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