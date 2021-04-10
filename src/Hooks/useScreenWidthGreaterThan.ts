import { useEffect, useState } from "react";

export function useScreenWidthGreaterThan(value: number) {
  const [isGreater, setGreater] = useState(window.innerWidth > value);

  useEffect(() => {
    if (value) {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [value, isGreater]);

  function handleResize() {
    if (!isGreater && window.innerWidth >= value) {
      setGreater(true);
    } else if (isGreater && window.innerWidth < value) {
      setGreater(false);
    }
  }

  return isGreater;
}
