import { useContext } from "react";
import { AuthContext } from "../context/auth-context";

export const useAuth = () => {
    const { token, setToken } = useContext(AuthContext);

    return { token, setToken };
};