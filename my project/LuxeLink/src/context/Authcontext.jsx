import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
const navigate = useNavigate();
const [token, setToken] = useState(() => {
const savedToken = localStorage.getItem("token");
return savedToken ? JSON.parse(savedToken) : "";
});

useEffect(() => {
localStorage.setItem("token", JSON.stringify(token));
}, [token]);

const [isLoading, setIsLoading] = useState(false);

const handleLogin = async (e, payload) => {
e.preventDefault();
setIsLoading(true);
try {
const response = await axios.post(
`${API_BASE_URL}/api/v1/auth/signin`,
payload
);
console.log(response.data);
if (response.data.success === true) {
setToken(response.data.token);
navigate("/");
}
} catch (error) {
console.error(error);
}
setIsLoading(false);
};

return (
<AuthContext.Provider value={{ handleLogin, isLoading }}>
{children}
</AuthContext.Provider>
);
};

export { AuthContext, AuthProvider };