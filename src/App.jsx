import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import WelcomePage from "./Pages/WelcomePage";
import LoginForm from "./Pages/LoginForm";
import Dashboard from "./Pages/Dashboard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { checkAuth } from "./Store/Reducers/Auth/authSlice";

const ProtectedRoute = ({ children }) => {
  const { isLogged, loading } = useSelector((state) => state.auth);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return isLogged ? children : <Navigate to="/login" replace />;
};

// Updated AuthRoute to use navigation effect on successful login
const AuthRoute = ({ children }) => {
  const { isLogged } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate("/dashboard", { replace: true });
    }
  }, [isLogged, navigate]);

  return children;
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/login"
          element={
            <AuthRoute>
              <LoginForm />
            </AuthRoute>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
