import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrolltoHash = () => {
  const { hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash, key]);
  return null;
};

export default ScrolltoHash;
