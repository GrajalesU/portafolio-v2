import { useScroll } from "@react-three/drei";

export const ScrollManager = () => {
  const data = useScroll();

  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  return null;
};
