import { useEffect } from "react";

const useOutsideClick = (
  ref: React.MutableRefObject<any>,
  changeStateFunction: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        changeStateFunction();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, [ref, changeStateFunction]);
};

export default useOutsideClick;
