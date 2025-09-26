import { useEffect, useRef } from "react";

function MoonHoles() {
  const hole = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (hole.current) {
      hole.current.style.top = `${Math.min(
        Math.floor(Math.random() * 90) + 10,
        70
      )}%`;
      hole.current.style.left = `${Math.min(
        Math.floor(Math.random() * 90) + 10,
        70
      )}%`;
      hole.current.style.borderRadius = `${Math.floor(
        Math.random() * 70
      )}% ${Math.floor(Math.random() * 70)}% ${Math.floor(
        Math.random() * 70
      )}% ${Math.floor(Math.random() * 70)}%`;
    }
  }, [hole]);
  return <div className="moon-hole" ref={hole}></div>;
}

export default MoonHoles;
