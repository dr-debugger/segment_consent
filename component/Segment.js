import React, { useEffect, useRef } from "react";

const Segment = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.addEventListener("click", (event) => {
        event.stopPropagation();
        window.consentManager.openConsentManager();
      });
    }
  }, [buttonRef.current]);
  return (
    <div>
      <button ref={buttonRef}>Segment</button>
    </div>
  );
};

export default Segment;
