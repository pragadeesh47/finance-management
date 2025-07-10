// GoogleLoginOnly.js
import React, { useEffect } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utilities/firebase";
import "./Authentication.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const Login = () => {
    const navigate = useNavigate();
    const { user, loading } = useAuth();  // Use the context to access auth state
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);

      // Optional: Send user data or token to your backend
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  useEffect(() => {
    if (loading) {
      return;  // Don't do anything until auth state is loaded
    }

    if (user) {
      if (location.pathname === '/login') {
        navigate('/'); // Redirect logged-in users to dashboard if they try to access login
      }
    }
  }, [user, loading, navigate]);

  return (
    <div className="google-login-container">
      <button onClick={handleGoogleLogin} className="google-login-btn">
        <img
          className="google-logo"
          src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw"
          alt="Google Logo"
        />
        <span>Sign in with Google</span>
      </button>
    </div>
  );
};

export default Login;
