import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Authcontext";



function Signin({onSwitchToSignup,onLoginSuccess}) {
    const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const { handleLogin, isLoading } = useContext(AuthContext);
const payload = {
email: email,
password: password,
};

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign In</h2>

    <form onSubmit={ async(e)=>{
      e.preventDefault();
      const success = await handleLogin(e, payload);
if (success) {
  onLoginSuccess();
}
    }}

    className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        name="email"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-amber-500"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-amber-500"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button

        type="submit"
        className="w-full py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded transition"
      >
        Sign In
      </button>
    </form>

    <p className="text-sm text-center mt-4 text-gray-500">
      Don’t have an account?{" "}
      <button onClick={onSwitchToSignup} className="text-amber-500 hover:underline">
        create one
      </button> 
    </p>
  </div>
</section>
     
  )
}

export default Signin