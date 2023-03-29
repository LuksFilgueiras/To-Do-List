import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const ProtectedRoute = ({children }) => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser || !currentUser?.emailVerified) {
      return <Navigate to={`/login`} replace />;
    }
  
    return children;
};

export default ProtectedRoute