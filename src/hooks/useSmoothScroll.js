import { useEffect } from "react";

const useSmoothScroll = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);
};

export default useSmoothScroll;