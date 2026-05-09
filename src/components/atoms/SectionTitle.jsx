import { useRef, useEffect, useState } from "react";

export default function SectionTitle({ children }) {
  const wrapperRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.8 }
    );
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className="text-center mb-12">
      <h2 className="text-3xl font-bold text-white mb-3">{children}</h2>
      <div
        className={`
          w-12 h-0.5 bg-blue-500 mx-auto origin-right
          transition-transform duration-700 ease-out
          ${visible ? "scale-x-100" : "scale-x-0"}
        `}
      />
    </div>
  );
}