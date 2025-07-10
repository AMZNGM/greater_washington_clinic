import React, { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);

      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div
      id="loading-screen"
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-main mx-auto mb-4"></div>
        <p className="text-main font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
