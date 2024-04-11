import React, { useEffect } from "react";

function Mod8_optimal() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.jdoodle.com/assets/jdoodle-pym.min.js";
    script.async = true;
    document.body.appendChild(script);

    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div data-pym-src="https://www.jdoodle.com/embed/v1/ff02ccb3e9cc3b75"></div>
    </div>
  );
}

export default Mod8_optimal;