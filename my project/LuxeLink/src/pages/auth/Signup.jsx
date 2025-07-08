import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Signup({onSwitchToSignin}) {
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const payload = {
        name:name,
        email: email,
        password: password,
    };
    const handleSubmit = async (e) => {
e.preventDefault();
setLoading(true);
console.log(payload);
 setTimeout(() => {
    console.log("Simulated signup success");
    onSwitchToSignin();
    setLoading(false);
  }, 1000);
};

// try {
// const response = await axios.post(
// `${API_BASE_URL}/api/v1/auth/signup`,
// payload
// );
// console.log(response.data);
// if (response.data.success === true) {
// onSwitchToSignin();
// }
// } catch (error) {
// console.error(error);
// }
// setLoading(false);
// };
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Account</h2>

    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        name="name"
        required
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-amber-500"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        required
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-amber-500"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-amber-500"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
       
        className="w-full py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded transition"
      >
        Sign Up
      </button>
    </form>

    <p className="text-sm text-center mt-4 text-gray-500">
      Already have an account?{" "}
      <button onClick={onSwitchToSignin} className='text-amber-500 hover:underline'>
        sign in instead
      
      </button>
    </p>
  </div>
</section>
    
  );
}

export default Signup