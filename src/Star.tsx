import { useEffect, useRef } from "react";

function Star() {
  const star = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (star.current) {
      star.current.style.right = `${Math.floor(Math.random() * 100)}%`;
      star.current.style.bottom = `${Math.floor(Math.random() * 50 + 60)}%`;
    }
  }, [star]);
  return <div className="star" ref={star}></div>;
}

export default Star;
