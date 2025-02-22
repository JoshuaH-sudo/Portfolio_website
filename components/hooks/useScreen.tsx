"use client";
const useScreen = () => {
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 640px)").matches;

  return {
    isMobile,
  };
};

export default useScreen;
