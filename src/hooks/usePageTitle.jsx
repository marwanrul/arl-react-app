import { useRef, useEffect } from "react";

function usePageTitle(title) {
  const originalTitle = useRef(document.title);

  useEffect(() => {
    const currentTitle = originalTitle.current;
    document.title = title;

    return () => {
      document.title = currentTitle;
    };
  }, [title]);
}

export default usePageTitle;
