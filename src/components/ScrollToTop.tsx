import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

const ScrollToTop = () => {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  useEffect(() => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, 50);
}, [pathname]);
  return null;
};


export default ScrollToTop;
