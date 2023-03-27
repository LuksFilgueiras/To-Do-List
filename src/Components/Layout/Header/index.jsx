import {HeaderContainer, NavStyled, LogoContainer, SignOut} from './styles'
import {AiOutlineLogout} from "react-icons/ai"
import { auth } from '../../../Firebase/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../../Context/AuthContext'
import { useContext } from 'react'

function Header() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const handleSignOut = async () => {
    await signOut(auth)
    .then(() => navigate('/login'))
    .catch(error => {console.error(error)})
  }

  return (
    <HeaderContainer>
        <NavStyled>
            <LogoContainer><h1>{currentUser.email}</h1></LogoContainer>
            <SignOut onClick={handleSignOut}><AiOutlineLogout/>Logout</SignOut>
        </NavStyled>
    </HeaderContainer>
  )
}

export default Header