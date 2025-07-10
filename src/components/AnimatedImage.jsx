import React, { useEffect, useRef } from "react";

const AnimatedImage = ({
  src,
  alt,
  className = "",
  animationType = "fadeIn",
  delay = 0,
  duration = 1000,
}) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;

            switch (animationType) {
              case "fadeIn":
                img.style.opacity = "0";
                img.style.transform = "translateY(30px)";
                img.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;

                setTimeout(() => {
                  img.style.opacity = "1";
                  img.style.transform = "translateY(0)";
                }, delay);
                break;

              case "scaleIn":
                img.style.opacity = "0";
                img.style.transform = "scale(0.8)";
                img.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;

                setTimeout(() => {
                  img.style.opacity = "1";
                  img.style.transform = "scale(1)";
                }, delay);
                break;

              case "slideInLeft":
                img.style.opacity = "0";
                img.style.transform = "translateX(-50px)";
                img.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;

                setTimeout(() => {
                  img.style.opacity = "1";
                  img.style.transform = "translateX(0)";
                }, delay);
                break;

              case "slideInRight":
                img.style.opacity = "0";
                img.style.transform = "translateX(50px)";
                img.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;

                setTimeout(() => {
                  img.style.opacity = "1";
                  img.style.transform = "translateX(0)";
                }, delay);
                break;

              case "bounceIn":
                img.style.opacity = "0";
                img.style.transform = "scale(0.3)";
                img.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;

                setTimeout(() => {
                  img.style.opacity = "1";
                  img.style.transform = "scale(1)";
                }, delay);
                break;

              default:
                img.style.opacity = "0";
                img.style.transition = `opacity ${duration}ms ease-out`;

                setTimeout(() => {
                  img.style.opacity = "1";
                }, delay);
            }

            observer.unobserve(img);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [animationType, delay, duration]);

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      className={className}
      style={{
        opacity: 0,
        willChange: "opacity, transform",
      }}
    />
  );
};

export default AnimatedImage;
