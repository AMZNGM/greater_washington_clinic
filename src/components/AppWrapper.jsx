import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AppWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // تعطيل scroll-behavior مؤقتاً
    const html = document.documentElement;
    const originalScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    // ضمان أن الصفحة تبدأ من الأعلى عند التحميل
    window.scrollTo(0, 0);

    // إعادة تفعيل scroll-behavior بعد فترة قصيرة
    setTimeout(() => {
      html.style.scrollBehavior = originalScrollBehavior || "smooth";
    }, 100);
  }, [location.pathname]);

  return children;
};

export default AppWrapper;
