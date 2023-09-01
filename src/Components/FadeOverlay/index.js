import React, { useEffect, useState } from "react";
import "./elements.css";

const FadeOverlay = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return <div className="fade-overlay"></div>;
};

export default FadeOverlay;
