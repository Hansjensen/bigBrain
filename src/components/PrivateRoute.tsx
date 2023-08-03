import {  Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";



    
    export default function PrivateRoute({ children }: any): any {
        const { currentUser } = useAuth();
      
        return currentUser ? children : <Navigate to="/" />;
      }
      
      

