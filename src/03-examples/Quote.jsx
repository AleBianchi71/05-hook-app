import { useLayoutEffect, useRef, useState } from "react";

export const Quote = (author, quote) => {
  const pRef = useRef();
  const [boxSise, setBoxSise] = useState({ width: 0, heigth: 0 });

  useLayoutEffect(() => {
    const { heigth, width } = pRef.current.getBoundingClientReact();
    setBoxSise({ heigth, width});

    
  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex3" }}>
        <p ref={pRef} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSise)}</code>
    </>
  );
};
