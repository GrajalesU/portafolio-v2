import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [size, setSize] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
