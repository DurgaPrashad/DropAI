
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the dashboard
    navigate("/dashboard");
  }, [navigate]);

  return null; // We don't need to render anything as we're redirecting
};

export default Index;
